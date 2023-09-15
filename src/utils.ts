import { type Route } from "next";

export const formatCurrency = (value: number) => {
	return new Intl.NumberFormat("us-US", {
		style: "currency",
		currency: "USD",
	}).format(value);
};

export const navigationitems: { name: string; href: Route }[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "All",
		href: "/products",
	},
];
