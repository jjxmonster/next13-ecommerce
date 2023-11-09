import { Check } from "lucide-react";
import { redirect } from "next/navigation";
import Stripe from "stripe";

export default async function CartSuccessPage({
	searchParams,
}: {
	searchParams: { sessionId?: string };
}) {
	if (!searchParams.sessionId) {
		redirect("/");
	}

	if (!process.env.STRIPE_SECRET_KEY) {
		throw new Error("Missing STRIPE_SECRET_KEY");
	}

	const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		apiVersion: "2023-08-16",
		typescript: true,
	});
	const session = await stripe.checkout.sessions.retrieve(
		searchParams.sessionId,
	);

	return (
		<div className="mt-10 flex flex-col items-center">
			<Check color="green" size={40} strokeWidth={3} />
			<h2 className="text-xl">
				Payment Status: {session.payment_status.toUpperCase()}
			</h2>
		</div>
	);
}
