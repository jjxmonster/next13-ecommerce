import React from "react";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { ActiveLink } from "./ActiveLink";

export const ShoppingCart = ({ quantity }: { quantity: number }) => {
	return (
		<ActiveLink href="/cart">
			<ShoppingCartIcon color="black" size={30} />{" "}
			<span className="ml-2 text-[17px] font-medium text-black">
				{quantity}
			</span>
		</ActiveLink>
	);
};
