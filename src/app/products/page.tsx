import { type ProductItem } from "@/types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductItem[] = [
	{
		id: "1",
		name: "Shoes",
		price: 50,
		category: "Shoes",
		coverImage: {
			src: "/product_1.jpg",
			alt: "Shoes",
		},
	},
	{
		id: "2",
		name: "Black hoodie",
		price: 70,
		category: "Hoodies",
		coverImage: {
			src: "/product_2.webp",
			alt: "Black hoodie",
		},
	},
	{
		id: "3",
		name: "Black t-shirt",
		price: 30,
		category: "T-shirts",
		coverImage: {
			src: "/product_3.jpg",
			alt: "Black t-shirt",
		},
	},
	{
		id: "4",
		name: "Green t-shirt",
		price: 30,
		category: "T-shirts",
		coverImage: {
			src: "/product_4.webp",
			alt: "Green t-shirt",
		},
	},
];

export default function Home() {
	return (
		<section className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
