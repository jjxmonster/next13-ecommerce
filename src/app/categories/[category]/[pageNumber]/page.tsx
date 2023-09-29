import { type Metadata } from "next";
import { getCategory } from "@/api/category";
import { getProductsByCategorySlug } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";
import { SectionHeader } from "@/ui/molecules/SectionHeader";

export const generateMetadata = async ({
	params,
}: {
	params: { category: string };
}): Promise<Metadata> => {
	const category = await getCategory(params.category);

	if (!category) {
		return {};
	}

	return {
		title: category.name,
	};
};

export const generateStaticParams = async ({
	params: { category },
}: {
	params: { category: string };
}) => {
	const products = await getProductsByCategorySlug(category);

	const pages = Math.ceil(products.length / 4);

	return Array.from(Array(pages).keys()).map((page) => ({
		pageNumber: String(page + 1),
	}));
};

export default async function CategoryProductsPage({
	params: { category, pageNumber },
}: {
	params: { category: string; pageNumber: string };
}) {
	const products = await getProductsByCategorySlug(
		category,
		Number(pageNumber),
	);
	const category_data = await getCategory(category);

	return (
		<>
			<SectionHeader title={category_data?.name ?? ""} />
			<ProductList products={products} />
		</>
	);
}
