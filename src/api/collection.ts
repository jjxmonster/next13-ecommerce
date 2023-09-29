import { exectueQuery } from "./lib";
import { CollectionGetBySlugDocument } from "@/gql/graphql";

export const getCollection = async (slug: string) => {
	const graphqlResponse = await exectueQuery(CollectionGetBySlugDocument, {
		slug,
	});

	return graphqlResponse.collection;
};
