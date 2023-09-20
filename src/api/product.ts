import { exectueQuery } from "./lib";
import {
	type ProductListItemFragment,
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	type ProductPageFragment,
} from "@/gql/graphql";

export const getProducts = async (offset?: number) => {
	const graphqlResponse = await exectueQuery(ProductsGetListDocument, {
		offset,
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (
	slug: string,
	productsOffset?: number,
) => {
	let graphqlResponse;

	if (productsOffset) {
		graphqlResponse = await exectueQuery(ProductsGetByCategorySlugDocument, {
			slug,
			productsOffset,
		});
	} else {
		graphqlResponse = await exectueQuery(ProductsGetByCategorySlugDocument, {
			slug,
		});
	}

	return graphqlResponse.category_products
		?.products as ProductListItemFragment[];
};

export const getProductById = async (id: ProductPageFragment["id"]) => {
	const graphqlResponse = await exectueQuery(ProductGetByIdDocument, {
		id,
	});

	return graphqlResponse.product;
};
