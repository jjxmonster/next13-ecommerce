"use server";

import { executeGraphql } from "./api/lib";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
	ReviewAddForProductDocument,
} from "./gql/graphql";

export const removeItem = (itemId: string) => {
	return executeGraphql({
		query: CartRemoveProductDocument,
		variables: { id: itemId },
	});
};

export const changeItemQuantity = (itemId: string, quantity: number) => {
	return executeGraphql({
		query: CartSetProductQuantityDocument,
		variables: { itemId, quantity },
	});
};
export const addProductReview = (formData: FormData) => {
	return executeGraphql({
		query: ReviewAddForProductDocument,
		variables: {
			title: formData.get("headline") as string,
			content: formData.get("content") as string,
			rating: Number(formData.get("rating")),
			productId: formData.get("productId") as string,
			email: formData.get("email") as string,
			name: formData.get("name") as string,
		},
	});
};
