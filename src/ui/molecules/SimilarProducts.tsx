import { type FunctionComponent } from "react";
import { ProductList } from "../organisms/ProductList";
import { getSimilarProducts } from "@/api/product";

interface SimilarProductsProps {
	id: string;
	category: string;
}

export const SimilarProducts: FunctionComponent<SimilarProductsProps> = async ({
	id,
	category,
}) => {
	const products = await getSimilarProducts(id, category);

	return (
		<>
			<h2 className="py-8 text-xl font-semibold leading-7">
				{" "}
				Similar Products
			</h2>
			<ProductList products={products} />
		</>
	);
};
