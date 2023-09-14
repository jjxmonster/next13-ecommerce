import React, { type FunctionComponent } from "react";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductCardDescription } from "../atoms/ProductCardDescription";
import { type ProductItem } from "@/types";

interface ProductCardProps {
	product: ProductItem;
}

export const ProductCard: FunctionComponent<ProductCardProps> = ({
	product,
}) => {
	return (
		<article className="flex gap-10">
			<ProductCoverImage {...product.coverImage} />
			<ProductCardDescription product={product} />
		</article>
	);
};
