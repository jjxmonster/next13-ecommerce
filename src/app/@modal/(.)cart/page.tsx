import { getCartFromCookies } from "@/api/cart";
import { Overlay } from "@/ui/atoms/Overlay";
import { ModalCart } from "@/ui/organisms/ModalCart";
import { CheckoutButton } from "@/ui/atoms/CheckoutButton";

export default async function Modal() {
	const cart = await getCartFromCookies();

	if (!cart) {
		return null;
	}

	return (
		<aside className="animation-fade-in fixed inset-0 z-20 backdrop-blur-md">
			<Overlay />
			<div className="animate-slide absolute bottom-0 right-0 top-0 z-50 flex h-full flex-col overflow-hidden bg-white p-5 shadow-xl sm:w-1/2 lg:w-1/3">
				<ModalCart cart={cart} />
				<CheckoutButton />
			</div>
		</aside>
	);
}
