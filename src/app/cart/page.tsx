import { redirect } from "next/navigation";
import { getCartFromCookies } from "@/api/cart";
import { formatCurrency } from "@/utils";
import { ShoppingCartItem } from "@/ui/molecules/ShoppingCartItem";
import { CheckoutButton } from "@/ui/atoms/CheckoutButton";

export const generateMetadata = () => {
	return {
		title: "Cart",
	};
};

export default async function CartPage() {
	const cart = await getCartFromCookies();

	if (!cart) {
		redirect("/");
	}

	return (
		<div className="w-full">
			<h1 className="text-4xl font-bold">Shopping Cart</h1>
			<div className="mt-10 flex flex-col gap-20 md:flex-row">
				<section className="w-full md:w-2/3">
					<ul>
						{cart.orderItems.map((item) => (
							<ShoppingCartItem item={item} key={item.id} />
						))}
					</ul>
				</section>
				<section className="w-full md:w-1/3">
					<div className="flex flex-col rounded-md bg-slate-50 p-5">
						<h2 className="text-xl font-medium">Order Summary</h2>
						<p className="flex justify-between py-3">
							<span>Order Total</span>
							<span>{formatCurrency(cart.total)}</span>
						</p>
						<CheckoutButton />
					</div>
				</section>
			</div>
		</div>
	);
}
