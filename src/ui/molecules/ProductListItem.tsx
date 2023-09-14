import React, { type FunctionComponent } from "react";
import Link from "next/link";
import { ProductCoverImage } from "@/ui/atoms/ProductCoverImage";
import { ProductListItemDescription } from "@/ui/atoms/ProductListItemDescription";
import { type ProductItem } from "@/types";

interface ProductListItemProps {
	product: ProductItem;
}

export const ProductListItem: FunctionComponent<ProductListItemProps> = ({
	product,
}) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductListItemDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
