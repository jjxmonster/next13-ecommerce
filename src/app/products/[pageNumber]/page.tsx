import { getProducts } from "../../../api/product";
import { SectionHeader } from "@/ui/molecules/SectionHeader";
import { SortSelect } from "@/ui/molecules/SortSelect";
import { ProductList } from "@/ui/organisms/ProductList";

export const generateStaticParams = async () => {
	const products = await getProducts();

	const pages = Math.ceil(products.length / 4);

	return Array.from(Array(pages).keys()).map((page) => ({
		pageNumber: String(page + 1),
	}));
};

export default async function Home({
	params,
	searchParams,
}: {
	params: { pageNumber: string };
	searchParams: { sort?: string };
}) {
	const products = await getProducts(
		Number(params.pageNumber),
		searchParams.sort
			? {
					field: searchParams.sort.replace("↑", "").replace("↓", ""),
					order: searchParams.sort.includes("↑") ? "asc" : "desc",
			  }
			: undefined,
	);

	return (
		<>
			<SectionHeader title="All Products" leftContent={<SortSelect />} />
			<ProductList products={products} />
		</>
	);
}
