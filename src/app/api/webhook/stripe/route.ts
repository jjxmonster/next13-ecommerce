/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import Stripe from "stripe";
import { updateOrderStatus } from "@/api/cart";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET");
	}
	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		apiVersion: "2023-08-16",
		typescript: true,
	});

	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		return new Response("No signature", { status: 401 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			if (!event.data.object.metadata || !event.data.object.customer_details) {
				return new Response("No metadata", { status: 401 });
			}

			await updateOrderStatus(
				event.data.object.metadata.cartId,
				"COMPLETED",
				event.data.object.customer_details.email as string,
			);
		}
	}

	return new Response(null, { status: 204 });
}
