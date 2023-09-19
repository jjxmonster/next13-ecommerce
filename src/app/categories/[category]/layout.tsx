import { getAllCategories } from "@/api/category";
import { getProductsByCategorySlug } from "@/api/product";
import { Pagination } from "@/ui/molecules/Pagination";

export const generateStaticParams = async () => {
	const categories = await getAllCategories();

	return categories.map((category) => ({
		category: category.slug,
	}));
};

export default async function Layout({
	children,
	params: { category },
}: {
	children: React.ReactNode;
	params: { category: string };
}) {
	const products = await getProductsByCategorySlug(category);

	return (
		<>
			<div>{children}</div>
			<Pagination products={products} path={`/categories/${category}`} />
		</>
	);
}
