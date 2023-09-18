import React, { type FunctionComponent } from "react";
import { formatCurrency } from "@/utils";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListItemDescriptionProps {
	product: ProductListItemFragment;
}

export const ProductListItemDescription: FunctionComponent<
	ProductListItemDescriptionProps
> = ({ product: { name, categories, price } }) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="text-sm font-semibold text-slate-700">{name}</h3>
				<p className="small-caps text-sm font-medium text-slate-900">
					{formatCurrency(price)}
				</p>
			</div>
			<div>
				{categories[0] && (
					<p className="text-sm text-gray-500">{categories[0].name}</p>
				)}
			</div>
		</div>
	);
};
