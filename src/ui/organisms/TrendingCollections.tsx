"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const TrendingCollections = () => {
	const router = useRouter();
	return (
		<section className="mb-10 mt-10 flex w-full flex-col">
			<h3 className="mb-5 text-2xl font-medium">Trending Collections</h3>
			<div
				className="cursor-pointer"
				onClick={() => router.push("/collections/winter-2023")}
			>
				<div className="aspect-square h-[200px] w-[300px] cursor-pointer overflow-hidden rounded-md">
					<Image
						width={350}
						height={320}
						alt="Winter 2023 Collection"
						src="/winter.jpg"
						className="h-full w-full object-cover object-center  transition-transform hover:scale-105"
					/>
				</div>
				<span className="text-xl font-medium text-gray-500">Winter 2023</span>
			</div>
		</section>
	);
};
