import * as React from "react";
import { Shirt } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Navigation } from "../molecules/Navigation";
import { ShoppingCart } from "../atoms/ShoppingCart";
import { SearchInput } from "../atoms/SearchInput";
import { getCartFromCookies } from "@/api/cart";

export const Header = async () => {
	const cart = await getCartFromCookies();
	const quantity = cart?.orderItems.length || 0;
	return (
		<header className="sticky top-0 z-50  border-b bg-white bg-opacity-60 backdrop-blur-lg">
			<div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between px-2 sm:px-4 md:flex-row lg:px-8">
				<Navigation />
				<Shirt size={30} className="ml-10 hidden text-blue-600 md:block" />
				<div className="flex h-16 flex-1 items-center gap-4 px-2 pb-2 md:pb-0 lg:ml-6 lg:justify-end">
					<SearchInput />
					<ShoppingCart quantity={quantity} />
					<SignedIn>
						<UserButton />
					</SignedIn>
					<SignedOut>
						<SignInButton />
					</SignedOut>
				</div>
			</div>
		</header>
	);
};
