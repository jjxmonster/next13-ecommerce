"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const ImageWithText = () => {
	const router = useRouter();
	return (
		<div className="flex h-[50vh] w-full overflow-x-hidden after:absolute after:left-0 after:z-0 after:m-auto after:h-[50vh] after:w-screen after:bg-slate-200">
			<div className="z-30 flex w-1/2 flex-col justify-center gap-3">
				<h1 className="text-4xl font-bold text-gray-700">Click, Buy, Amaze!</h1>
				<p className="text-xl text-gray-500">
					Discover your best vibes with our latest Arrivals!
				</p>
				<button
					onClick={() => router.push("/products")}
					className="w-[300px] rounded-md bg-blue-600 px-5 py-3 text-white"
				>
					Check out our products!
				</button>
			</div>
			<div className="z-30 hidden aspect-square w-1/2 md:block">
				<Image
					alt="Landing page image, clothes on a hanger"
					className="h-full w-full object-cover"
					src="/landing.jpg"
					width={1000}
					height={1000}
				/>
			</div>
		</div>
	);
};
