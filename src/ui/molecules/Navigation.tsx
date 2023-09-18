import * as React from "react";
import { ActiveLink } from "../atoms/ActiveLink";
import { navigationitems } from "@/utils";

export const Navigation = () => {
	const renderNavigationItem = navigationitems.map(({ href, name }) => {
		return (
			<li key={href} className="flex items-center justify-center">
				<ActiveLink exact={false} href={href}>
					{name}
				</ActiveLink>
			</li>
		);
	});

	return (
		<nav className="flex-1">
			<ul className="flex h-16 max-w-full whitespace-nowrap lg:px-8">
				{renderNavigationItem}
			</ul>
		</nav>
	);
};
