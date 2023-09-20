import { getProductsByKeyword } from "@/api/product";
import { SectionHeader } from "@/ui/molecules/SectionHeader";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchPage({
	searchParams,
}: {
	searchParams: { [key: string]: string | string[] };
}) {
	const products = await getProductsByKeyword(searchParams.query as string);

	return (
		<>
			<SectionHeader
				title={`Found ${products.length} items for phrase "${
					searchParams.query as string
				}"`}
			/>
			<ProductList products={products} />
		</>
	);
}
