import React, { type FunctionComponent } from "react";
import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductListItemFragment } from "@/gql/graphql";

interface ProductListItemProps {
	product: ProductListItemFragment;
}

export const ProductListItem: FunctionComponent<ProductListItemProps> = ({
	product,
}) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage src={product.image} alt="" />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
