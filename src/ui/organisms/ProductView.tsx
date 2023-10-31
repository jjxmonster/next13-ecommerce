import React, { Suspense, type FunctionComponent } from "react";
import { revalidatePath } from "next/cache";
import { ProductCoverImage } from "../atoms/ProductCoverImage";
import { ProductCardDescription } from "../atoms/ProductCardDescription";
import { ProductVariants } from "../molecules/ProductVariants";
import { LoadingIndicator } from "../atoms/LoadingIndicator";
import { SimilarProducts } from "../molecules/SimilarProducts";
import { AddToCartButton } from "../atoms/AddToCartButton";
import { ReviewForm } from "../molecules/ReviewForm";
import { Reviews } from "./Reviews";
import { type ProductPageFragment } from "@/gql/graphql";
import { addProductToCart, getOrCreateCart } from "@/api/cart";

interface ProductViewProps {
	product: ProductPageFragment;
	searchParams: { size: string; color: string };
}

export const ProductView: FunctionComponent<ProductViewProps> = ({
	product,
	searchParams,
}) => {
	const productVariants = {
		color: product.product_color_variants.filter((variant) => variant !== null),
		size: product.product_size_variants.filter((variant) => variant !== null),
	};

	async function addToCardAction() {
		"use server";
		const cart = await getOrCreateCart();
		await addProductToCart(
			cart.id,
			product.id,
			1,
			searchParams.size,
			searchParams.color,
		);

		revalidatePath("cart");
	}

	return (
		<>
			<article className="mt-10 flex w-full flex-col gap-10 md:flex-row">
				<ProductCoverImage src={product.image} alt="" />
				<div className="flex flex-col items-start gap-10">
					<ProductCardDescription product={product} />
					<ProductVariants
						variants={productVariants}
						searchParams={searchParams}
					/>
					<form action={addToCardAction}>
						<AddToCartButton />
					</form>
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
			<section className="mb-10 grid w-full md:grid-cols-2">
				<ReviewForm productId={product.id} />
				<Reviews productId={product.id} />
			</section>
		</>
	);
};
