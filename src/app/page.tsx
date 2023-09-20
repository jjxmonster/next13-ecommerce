import { getProducts } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProducts(1);

	return (
		<section>
			<ProductList products={products} />
		</section>
	);
}
