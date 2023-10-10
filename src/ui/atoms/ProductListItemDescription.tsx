import React, { type FunctionComponent } from "react";
import { StarIcon } from "lucide-react";
import { formatCurrency } from "@/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListItemDescriptionProps {
	product: ProductListItemFragment;
}

export const ProductListItemDescription: FunctionComponent<
	ProductListItemDescriptionProps
> = ({ product: { name, categories, price, weightedRating } }) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="text-sm font-semibold text-slate-700">{name}</h3>
				<p
					data-testid="product-price"
					className="small-caps text-sm font-medium text-slate-900"
				>
					{formatCurrency(price)}
				</p>
			</div>
			<div className="flex justify-between">
				{categories[0] && (
					<p className="text-sm text-gray-500">{categories[0].name}</p>
				)}
				<p
					data-testid="product-rating"
					className="font-md flex items-center text-sm text-gray-700"
				>
					<span data-testid="product-rating">{weightedRating}</span>{" "}
					<span>/5</span>
					<StarIcon size={18} color="blue" />
				</p>
			</div>
		</div>
	);
};
