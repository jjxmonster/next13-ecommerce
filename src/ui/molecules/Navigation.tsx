import * as React from "react";
import { ActiveLink } from "../atoms/ActiveLink";
import { navigationitems } from "@/utils";
import { SignedIn } from "@clerk/nextjs";

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
			<ul className="flex h-16 max-w-full whitespace-nowrap">
				{renderNavigationItem}
				<SignedIn>
					<li className="flex items-center justify-center">
						<ActiveLink exact={false} href={"/orders"}>
							Orders
						</ActiveLink>
					</li>
				</SignedIn>
			</ul>
		</nav>
	);
};
