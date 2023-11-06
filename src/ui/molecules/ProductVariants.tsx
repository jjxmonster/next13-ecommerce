import type { FunctionComponent } from "react";
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
	return (
		<div className="flex flex-col gap-5">
			<section>
				<h2 className="text-md mb-3 uppercase">Colors</h2>
				<div className="flex gap-2">
					{variants.color.map((color) => {
						return (
							<ProductVariantLink
								selectedValue={searchParams.color as string}
								otherParams={
									searchParams.size
										? {
												size: searchParams.size as string,
										  }
										: null
								}
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
								otherParams={
									searchParams.color
										? {
												color: searchParams.color as string,
										  }
										: null
								}
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
