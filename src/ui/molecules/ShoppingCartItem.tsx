import { Check } from "lucide-react";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { IncrementProductQuantity } from "../atoms/IncrementProductQuantity";
import { RemoveButton } from "../atoms/RemoveProductButton";
import { type CartFragment } from "@/gql/graphql";
import { formatCurrency } from "@/utils";

export const ShoppingCartItem = ({
	item,
	isModalVersion = false,
}: {
	item: CartFragment["orderItems"][0];
	isModalVersion?: boolean;
}) => {
	return (
		<li key={item.id} className="flex gap-5 border-t py-4">
			<div className="w-[200px]">
				<ProductCoverImage
					src={item.product.image}
					alt={`Product ${item.product.name}`}
				/>
			</div>
			<div className="flex w-full flex-col justify-between">
				<div className="flex w-full justify-between">
					<div className="flex flex-col gap-2 text-gray-600">
						<h3>{item.product.name}</h3>
						<p className="flex gap-3 text-sm font-light">
							Black <span>|</span> L
						</p>
						<span className="text-sm font-medium">
							{formatCurrency(item.product.price)}
						</span>
					</div>
					{!isModalVersion && (
						<>
							<div>
								<IncrementProductQuantity
									quantity={item.quantity}
									itemId={item.id}
								/>
							</div>
							<div>
								<RemoveButton productId={item.id} />
							</div>
						</>
					)}
				</div>
				<div>
					<p className="flex gap-2 text-sm text-gray-500">
						<Check color="green" />
						In stock
					</p>
				</div>
			</div>
		</li>
	);
};
