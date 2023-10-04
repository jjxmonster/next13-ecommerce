import { cookies } from "next/headers";
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
