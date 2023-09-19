import { getProductsByCategorySlug } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";

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

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
