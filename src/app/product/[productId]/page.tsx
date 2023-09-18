import { type Metadata } from "next";
import { getProductById } from "@/api/product";
import { ProductCard } from "@/ui/molecules/ProductCard";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} - Next13 E-Commerce`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Next13 E-Commerce`,
			description: product.description,
			images: [
				{
					url: product.coverImage.src,
				},
			],
		},
	};
};

export default async function ProductPage({
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProductById(params.productId);

	return <ProductCard product={product} />;
}
