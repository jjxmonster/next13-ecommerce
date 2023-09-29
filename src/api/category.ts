import { exectueQuery } from "./lib";
import {
	CategoryGetAllDocument,
	CategoryGetBySlugDocument,
} from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await exectueQuery(CategoryGetAllDocument, {});

	return graphqlResponse.categories;
};

export const getCategory = async (slug: string) => {
	const graphqlResponse = await exectueQuery(CategoryGetBySlugDocument, {
		slug,
	});

	return graphqlResponse.category;
};
