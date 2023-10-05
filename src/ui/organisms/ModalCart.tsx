import { ShoppingCartItem } from "../molecules/ShoppingCartItem";
import { type CartFragment } from "@/gql/graphql";

export const ModalCart = ({ cart }: { cart: CartFragment }) => {
	return (
		<div className="flex-1">
			<div>
				<h1 className="text-3xl font-bold">Shopping Cart</h1>
			</div>
			<div className="flex-1">
				<ul>
					{cart.orderItems.map((item) => (
						<ShoppingCartItem item={item} key={item.id} isModalVersion={true} />
					))}
				</ul>
			</div>
		</div>
	);
};
