import React from "react";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { ActiveLink } from "./ActiveLink";

export const ShoppingCart = ({ quantity }: { quantity: number }) => {
	return (
		<ActiveLink href="/cart">
			<ShoppingCartIcon color="black" size={20} />{" "}
			<span className="ml-1 text-[15px] font-medium text-black">
				{quantity}
			</span>
		</ActiveLink>
	);
};
