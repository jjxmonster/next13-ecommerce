import { exectueQuery } from "./lib";
import {
	type ProductListItemFragment,
	ProductsGetListDocument,
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	type ProductPageFragment,
	ProductsGetSimilarDocument,
	ProductsGetByKeywordDocument,
	ProductsGetByCollectionSlugDocument,
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

export const getProductsByCollectionSlug = async (slug: string) => {
	const graphqlResponse = await exectueQuery(
		ProductsGetByCollectionSlugDocument,
		{
			slug,
		},
	);

	return graphqlResponse.collection_products
		?.products as ProductListItemFragment[];
};

export const getSimilarProducts = async (
	id: ProductListItemFragment["id"],
	category: string,
) => {
	const graphqlResponse = await exectueQuery(ProductsGetSimilarDocument, {
		id,
		category,
	});

	return graphqlResponse.products_similar;
};

export const getProductById = async (id: ProductPageFragment["id"]) => {
	const graphqlResponse = await exectueQuery(ProductGetByIdDocument, {
		id,
	});

	return graphqlResponse.product;
};

export const getProductsByKeyword = async (keyword: string) => {
	const graphqlResponse = await exectueQuery(ProductsGetByKeywordDocument, {
		keyword,
	});

	return graphqlResponse.products_by_keyword;
};
