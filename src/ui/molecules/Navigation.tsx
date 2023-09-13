import * as React from "react";
import { ActiveLink } from "../atoms/ActiveLink";
import { navigationitems } from "@/utils";

export const Navigation = () => {
	const renderNavigationItem = navigationitems.map(({ href, name }) => {
		return (
			<li key={href} className="flex items-center justify-center">
				<ActiveLink
					className="px-4 py-2 text-gray-800 transition duration-300 ease-in-out hover:opacity-50"
					activeClassName="!text-blue-600"
					href={href}
				>
					{name}
				</ActiveLink>
			</li>
		);
	});
	return (
		<nav className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
			<ul className="flex h-16 max-w-full space-x-8 whitespace-nowrap lg:px-8">
				{renderNavigationItem}
			</ul>
		</nav>
	);
};
