import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/product";
import { ProductCard } from "@/ui/molecules/ProductCard";

export const generateMetadata = async ({
	params,
}: {
	params: { productId: string };
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	if (!product) {
		return {};
	}

	return {
		title: `${product.name} - Next13 E-Commerce`,
		description: product.description,
		openGraph: {
			title: `${product.name} - Next13 E-Commerce`,
			description: product.description,
			images: [
				{
					url: product.image,
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

	if (!product) {
		notFound();
	}

	return <ProductCard product={product} />;
}
