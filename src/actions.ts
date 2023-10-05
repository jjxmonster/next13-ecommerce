"use server";

import { executeGraphql } from "./api/lib";
import {
	CartRemoveProductDocument,
	CartSetProductQuantityDocument,
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