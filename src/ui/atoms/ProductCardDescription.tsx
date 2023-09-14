import React, { type FunctionComponent } from "react";
import { formatCurrency } from "@/utils";

interface ProductCardDescriptionProps {
	product: {
		name: string;
		description: string;
		price: number;
	};
}

export const ProductCardDescription: FunctionComponent<
	ProductCardDescriptionProps
> = ({ product: { name, description, price } }) => {
	return (
		<div className="mt-2">
			<div className="flex flex-col justify-between gap-5">
				<h3 className="text-2xl font-bold text-slate-700">{name}</h3>
				<p className="small-caps text-xl font-medium text-slate-900">
					{formatCurrency(price)}
				</p>

				<p className="text-md font-medium text-gray-500">{description}</p>
			</div>
		</div>
	);
};
