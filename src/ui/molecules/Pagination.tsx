import * as React from "react";
import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";
import { getProducts } from "@/app/api/product";

export const Pagination = async () => {
	const products = await getProducts();
	const pages = Math.ceil(products.length / 4);

	const renderPaginationItem = Array.from(Array(pages).keys()).map((page) => (
		<li key={page}>
			<ActiveLink
				className="inline-flex items-center border-b-2 px-4 pt-4 text-sm font-medium"
				activeClassName="border-blue-600 text-blue-600"
				href={`/products/${page + 1}` as Route}
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
