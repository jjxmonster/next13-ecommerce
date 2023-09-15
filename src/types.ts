export type ProductItem = {
	id: string;
	category: string;
	name: string;
	price: number;
	description: string;
	coverImage: {
		src: string;
		alt: string;
	};
};
