import { getProducts } from "@/api/product";
import { ProductList } from "@/ui/organisms/ProductList";
import { ImageWithText } from "@/ui/organisms/ImageWithText";
import { TrendingCollections } from "@/ui/organisms/TrendingCollections";

export default async function Home() {
	const products = await getProducts(1);

	return (
		<>
			<ImageWithText />
			<TrendingCollections />
			<section>
				<h3 className="mb-5 text-2xl font-medium">Latest Products</h3>
				<ProductList products={products} />
			</section>
		</>
	);
}
