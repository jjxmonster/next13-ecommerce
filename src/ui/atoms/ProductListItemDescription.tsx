import React, { type FunctionComponent } from "react";
import { formatCurrency } from "@/utils";

interface ProductListItemDescriptionProps {
	product: {
		name: string;
		category: string;
		price: number;
	};
}

export const ProductListItemDescription: FunctionComponent<
	ProductListItemDescriptionProps
> = ({ product: { name, category, price } }) => {
	return (
		<div className="mt-2">
			<div className="flex flex-row justify-between">
				<h3 className="text-sm font-semibold text-slate-700">{name}</h3>
				<p className="small-caps text-sm font-medium text-slate-900">
					{formatCurrency(price)}
				</p>
			</div>
			<div>
				<p className="text-sm text-gray-500">{category}</p>
			</div>
		</div>
	);
};
