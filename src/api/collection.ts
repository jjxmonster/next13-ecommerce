import { executeGraphql } from "./lib";
import { CollectionGetBySlugDocument } from "@/gql/graphql";

export const getCollection = async (slug: string) => {
	const graphqlResponse = await executeGraphql({
		query: CollectionGetBySlugDocument,
		variables: {
			slug,
		},
	});

	return graphqlResponse.collection;
};
