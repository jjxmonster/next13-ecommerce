import React, { type FunctionComponent } from "react";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductCardDescription } from "../atoms/ProductCardDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductCardProps {
	product: ProductListItemFragment;
}

export const ProductCard: FunctionComponent<ProductCardProps> = ({
	product,
}) => {
	return (
		<article className="flex gap-10">
			<ProductCoverImage src={product.image} alt="" />
			<ProductCardDescription product={product} />
		</article>
	);
};
