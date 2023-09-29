import { type Route } from "next";
import { getProducts } from "@/api/product";
import { ActiveLink } from "@/ui/atoms/ActiveLink";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function Home() {
	const products = await getProducts(1);

	return (
		<>
			<div>
				<ActiveLink exact={false} href={"/collections/winter-2023" as Route}>
					Winter 2023
				</ActiveLink>
			</div>
			<section>
				<ProductList products={products} />
			</section>
		</>
	);
}
