import React from "react";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { ActiveLink } from "./ActiveLink";

export const ShoppingCart = () => {
	return (
		<ActiveLink href="/">
			<ShoppingCartIcon color="black" size={30} />
		</ActiveLink>
	);
};
