import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/product";
import { ProductView } from "@/ui/organisms/ProductView";

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
	searchParams,
}: {
	params: { productId: string };
	searchParams: { size: string; color: string };
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		notFound();
	}

	return <ProductView product={product} searchParams={searchParams} />;
}
