import * as React from "react";
import { Shirt } from "lucide-react";
import { Navigation } from "../molecules/Navigation";
import { ShoppingCart } from "../atoms/ShoppingCart";
import { SearchInput } from "../atoms/SearchInput";
import { getCartFromCookies } from "@/api/cart";

export const Header = async () => {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length || 0;
	return (
		<header className="sticky top-0 z-20 border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-2 sm:px-4 lg:px-8">
				<Navigation />
				<Shirt size={30} className="text-blue-600" />
				<div className="flex h-16 flex-1 items-center gap-4 px-2 lg:ml-6 lg:justify-end">
					<SearchInput />
					<ShoppingCart quantity={quantity} />
				</div>
			</div>
		</header>
	);
};
