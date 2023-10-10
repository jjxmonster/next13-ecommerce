import { getProducts } from "@/api/product";
import { Pagination } from "@/ui/molecules/Pagination";

export default async function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const products = await getProducts();

	return (
		<>
			<div>{children}</div>
			<Pagination products={products} path="/products" />
		</>
	);
}
