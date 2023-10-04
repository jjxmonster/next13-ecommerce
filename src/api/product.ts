import { executeGraphql } from "./lib";
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
	const graphqlResponse = await executeGraphql({
		query: ProductsGetListDocument,
		variables: {
			offset,
		},
	});

	return graphqlResponse.products;
};

export const getProductsByCategorySlug = async (
	slug: string,
	productsOffset?: number,
) => {
	let graphqlResponse;

	if (productsOffset) {
		graphqlResponse = await executeGraphql({
			query: ProductsGetByCategorySlugDocument,
			variables: {
				slug,
				productsOffset,
			},
		});
	} else {
		graphqlResponse = await executeGraphql({
			query: ProductsGetByCategorySlugDocument,
			variables: {
				slug,
			},
		});
	}

	return graphqlResponse.category_products
		?.products as ProductListItemFragment[];
};

export const getProductsByCollectionSlug = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: {
			slug,
		},
	});

	return graphqlResponse.collection_products
		?.products as ProductListItemFragment[];
};

export const getSimilarProducts = async (
	id: ProductListItemFragment["id"],
	category: string,
) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetSimilarDocument,
		variables: {
			id,
			category,
		},
	});

	return graphqlResponse.products_similar;
};

export const getProductById = async (id: ProductPageFragment["id"]) => {
	const graphqlResponse = await executeGraphql({
		query: ProductGetByIdDocument,
		variables: {
			id,
		},
	});

	return graphqlResponse.product;
};

export const getProductsByKeyword = async (keyword: string) => {
	const graphqlResponse = await executeGraphql({
		query: ProductsGetByKeywordDocument,
		variables: {
			keyword,
		},
	});

	return graphqlResponse.products_by_keyword;
};
