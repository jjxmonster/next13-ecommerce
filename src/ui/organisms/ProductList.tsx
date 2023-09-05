import React, { type FunctionComponent } from "react";
import { type ProductItem } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

interface ProductListProps {
	products: ProductItem[];
}

export const ProductList: FunctionComponent<ProductListProps> = ({
	products,
}) => {
	return (
		<ul
			data-testid="products-list"
			className="mb-8 mt-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
