import { executeGraphql } from "./lib";
import { ReviewsGetByIdDocument } from "@/gql/graphql";

export const getReviewsByProductId = async (productId: string) => {
	const graphqlResponse = await executeGraphql({
		query: ReviewsGetByIdDocument,
		variables: {
			productId,
		},
	});
	return graphqlResponse.reviews;
};
