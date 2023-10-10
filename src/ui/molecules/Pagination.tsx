"use client";
import * as React from "react";
import { type Route } from "next";
import { useSearchParams } from "next/navigation";
import { ActiveLink } from "../atoms/ActiveLink";
import { type ProductListItemFragment } from "@/gql/graphql";

interface PaginationProps {
	products: ProductListItemFragment[];
	path: string;
}

export const Pagination: React.FunctionComponent<PaginationProps> = async ({
	products,
	path,
}) => {
	const { get: getSearchParam } = useSearchParams();
	const pages = Math.ceil(products.length / 4);

	const renderPaginationItem = Array.from(Array(pages).keys()).map((page) => (
		<li key={page}>
			<ActiveLink
				exact={true}
				className="inline-flex items-center border-b-2 px-4 pt-4 text-sm font-medium"
				activeClassName="border-blue-600 text-blue-600"
				href={
					`${path}/${page + 1}${
						getSearchParam("sort") ? `?sort=${getSearchParam("sort")}` : ""
					}` as Route
				}
			>
				{page + 1}
			</ActiveLink>
		</li>
	));
	return (
		<nav
			aria-label="Pagination Navigation"
			role="navigation"
			className="border-gr h-auto w-full border-b-2"
		>
			<ul className="flex w-full items-center justify-center">
				{renderPaginationItem}
			</ul>
		</nav>
	);
};
