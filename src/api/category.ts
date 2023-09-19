import { exectueQuery } from "./lib";
import { CategoryGetAllDocument } from "@/gql/graphql";

export const getAllCategories = async () => {
	const graphqlResponse = await exectueQuery(CategoryGetAllDocument, {});

	return graphqlResponse.categories;
};
