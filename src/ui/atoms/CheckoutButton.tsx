import { handlePaymentAction } from "@/api/cart";

export const CheckoutButton = () => {
	return (
		<form className="w-full" action={handlePaymentAction}>
			<button
				type="submit"
				className="w-full rounded-md bg-blue-600 py-3 text-white"
			>
				Checkout
			</button>
		</form>
	);
};
