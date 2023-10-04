import { executeGraphql } from "./lib";
import {
	CategoryGetAllDocument,
	CategoryGetBySlugDocument,
} from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await executeGraphql({
		query: CategoryGetAllDocument,
		variables: {},
	});

	return graphqlResponse.categories;
};

export const getCategory = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CategoryGetBySlugDocument,
		variables: {
			slug,
		},
	});

	return graphqlResponse.category;
};
