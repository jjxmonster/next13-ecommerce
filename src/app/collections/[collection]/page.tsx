import { type Metadata } from "next";
import { getCollection } from "@/api/collection";
import { getProductsByCollectionSlug } from "@/api/product";
import { SectionHeader } from "@/ui/molecules/SectionHeader";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateMetadata = async ({
	params,
}: {
	params: { collection: string };
}): Promise<Metadata> => {
	const collection = await getCollection(params.collection);

	if (!collection) {
		return {};
	}

	return {
		title: collection.name,
	};
};

export default async function CollectionProductsPage({
	params: { collection },
}: {
	params: { collection: string };
}) {
	const products = await getProductsByCollectionSlug(collection);

	return (
		<>
			<SectionHeader title="Winter 2023" />
			<ProductList products={products} />
		</>
	);
}
