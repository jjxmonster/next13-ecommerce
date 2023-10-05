import { cookies } from "next/headers";
import Stripe from "stripe";
import { redirect } from "next/navigation";
import { executeGraphql } from "./lib";
import {
	CartAddProductDocument,
	CartByGetIdDocument,
	CartCreateDocument,
	type CartFragment,
} from "@/gql/graphql";

export const getCartFromCookies = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql({
			query: CartByGetIdDocument,
			variables: {
				id: cartId,
			},
			next: {
				tags: ["cart"],
			},
		});
		if (cart) {
			return cart;
		}
	}
};

const createCart = async () => {
	return executeGraphql({ query: CartCreateDocument, variables: {} });
};

export const getOrCreateCart = async (): Promise<CartFragment> => {
	const cart = await getCartFromCookies();

	if (cart) {
		return cart;
	}

	const { createOrder: newCart } = await createCart();
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id, {
		httpOnly: true,
		sameSite: "lax",
	});
	return newCart;
};

export const addProductToCart = async (
	orderId: string,
	productId: string,
	quantity: number,
) => {
	return executeGraphql({
		query: CartAddProductDocument,
		variables: {
			orderId,
			productId,
			quantity,
		},
	});
};

export const handlePaymentAction = async () => {
	"use server";
	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}
	const cart = await getCartFromCookies();
	if (!cart) {
		return;
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const checkoutSession = await stripe.checkout.sessions.create({
		payment_method_types: ["card"],
		metadata: {
			cartId: cart.id,
		},
		line_items: cart.orderItems.map((item) => ({
			price_data: {
				currency: "usd",
				product_data: {
					name: item.product.name,
					images: [item.product.image],
				},
				unit_amount: item.product.price,
			},
			quantity: item.quantity,
		})),
		mode: "payment",
		success_url:
			"http://localhost:3000/cart/success?sessionId={CHECKOUT_SESSION_ID}",
		cancel_url: "http://localhost:3000/cart/cancel?",
	});

	if (!checkoutSession.url) {
		throw new Error("Something went wrong...");
	}
	cookies().set("cartId", "");
	redirect(checkoutSession.url);
};
