import { type ProductItem } from "@/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: {
		rate: number;
		count: number;
	};
	image: string;
	longDescription: string;
};

export const getProducts = async (offset?: number) => {
	let url = "https://naszsklep-api.vercel.app/api/products";

	if (offset) {
		url += `?take=4&offset=${offset}`;
	} else {
		url += `?take=20`;
	}

	const res = await fetch(url);

	const productsResponse = (await res.json()) as ProductResponseItem[];
	const products = productsResponse.map(productResponseItemToProductItem);

	return products;
};

export const getProductById = async (id: ProductResponseItem["id"]) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);

	const productResponse = (await res.json()) as ProductResponseItem;

	return productResponseItemToProductItem(productResponse);
};

const productResponseItemToProductItem = (
	product: ProductResponseItem,
): ProductItem => {
	return {
		id: product.id,
		name: product.title,
		price: product.price,
		category: product.category,
		description: product.description,
		coverImage: {
			src: product.image,
			alt: product.title,
		},
	};
};
