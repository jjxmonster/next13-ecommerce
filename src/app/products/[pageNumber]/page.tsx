import { getProducts } from "../../../api/product";
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
}: {
	params: { pageNumber: string };
}) {
	const products = await getProducts(Number(params.pageNumber));

	return (
		<>
			<ProductList products={products} />
		</>
	);
}
