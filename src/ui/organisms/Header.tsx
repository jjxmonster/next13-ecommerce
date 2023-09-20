import * as React from "react";
import Image from "next/image";
import { Navigation } from "../molecules/Navigation";
import { ShoppingCart } from "../atoms/ShoppingCart";
import { SearchInput } from "../atoms/SearchInput";

export const Header = () => {
	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 sm:px-4 lg:px-8">
				<Navigation />
				<Image alt="Logo Men`s store" width={35} height={35} src="/logo.svg" />
				<div className="flex h-16 flex-1 items-center gap-4 px-2 lg:ml-6 lg:justify-end">
					<SearchInput />
					<ShoppingCart />
				</div>
			</div>
		</header>
	);
};
