import React, { Suspense, type FunctionComponent } from "react";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductCardDescription } from "../atoms/ProductCardDescription";
import { ProductVariants } from "../molecules/ProductVariants";
import { LoadingIndicator } from "../atoms/LoadingIndicator";
import { SimilarProducts } from "../molecules/SimilarProducts";
import { type ProductPageFragment } from "@/gql/graphql";

interface ProductViewProps {
	product: ProductPageFragment;
	searchParams: { [key: string]: string | string[] };
}

export const ProductView: FunctionComponent<ProductViewProps> = ({
	product,
	searchParams,
}) => {
	const productVariants = {
		color: product.product_color_variants.filter((variant) => variant !== null),
		size: product.product_size_variants.filter((variant) => variant !== null),
	};

	return (
		<>
			<article className="flex gap-10">
				<ProductCoverImage src={product.image} alt="" />
				<div className="flex flex-col items-start gap-10">
					<ProductCardDescription product={product} />
					<ProductVariants
						variants={productVariants}
						searchParams={searchParams}
					/>
				</div>
			</article>
			<aside data-testid="related-products">
				<div className="py-16">
					<Suspense fallback={<LoadingIndicator />}>
						<SimilarProducts
							id={product.id}
							category={product.categories[0].slug}
						/>
					</Suspense>
				</div>
			</aside>
		</>
	);
};