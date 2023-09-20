"use client";
import { useEffect, type FunctionComponent } from "react";
import { useRouter } from "next/navigation";
import { ProductVariantLink } from "../atoms/ProductVariantLink";

interface ProductVariantsProps {
	variants: {
		[key: string]: ({
			name: string;
			slug: string;
		} | null)[];
	};
	searchParams: { [key: string]: string | string[] };
}

export const ProductVariants: FunctionComponent<ProductVariantsProps> = ({
	variants,
	searchParams,
}) => {
	const router = useRouter();
	const selectedColor =
		(searchParams.color as string) ?? variants.color[0]?.slug;
	const selectedSize = (searchParams.size as string) ?? variants.size[0]?.slug;

	useEffect(() => {
		router.replace(`?color=${selectedColor}&size=${selectedSize}`);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="flex flex-col gap-5">
			<section>
				<h2 className="text-md mb-3 uppercase">Colors</h2>
				<div className="flex gap-2">
					{variants.color.map((color) => {
						return (
							<ProductVariantLink
								selectedValue={searchParams.color as string}
								otherParams={{
									size: searchParams.size as string,
								}}
								key={color?.slug}
								type="color"
								value={color?.name ?? ""}
								slug={color?.slug ?? ""}
							/>
						);
					})}
				</div>
			</section>

			<section>
				<h2 className="text-md mb-3 uppercase">Sizes</h2>
				<div className="flex gap-2">
					{variants.size.map((size) => {
						return (
							<ProductVariantLink
								selectedValue={searchParams.size as string}
								otherParams={{
									color: searchParams.color as string,
								}}
								key={size?.slug}
								type="size"
								value={size?.name ?? ""}
								slug={size?.slug ?? ""}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
};
