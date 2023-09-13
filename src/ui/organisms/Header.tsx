import * as React from "react";
import { Navigation } from "../molecules/Navigation";

export const Header = () => {
	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
				<Navigation />
			</div>
		</header>
	);
};
