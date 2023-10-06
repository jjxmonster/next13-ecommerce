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
	{
		name: "Hoodies",
		href: "/categories/hoodies" as Route,
	},
	{
		name: "T-Shirts",
		href: "/categories/t-shirts" as Route,
	},
];

export const reviewFormItems = [
	{
		label: "Review title",
		type: "text",
		name: "title",
		required: true,
	},
	{
		label: "Review content",
		type: "area",
		name: "content",
		required: true,
	},
	{
		label: "Rating",
		type: "rating",
		name: "rating",
		required: true,
	},
	{
		label: "Name",
		type: "text",
		name: "name",
		required: true,
	},
	{
		label: "Email",
		type: "email",
		name: "email",
		required: true,
	},
];
