import Link from "next/link";
import { type FunctionComponent } from "react";

interface ProductVariantLinkProps {
	type: string;
	value: string;
	slug: string;
	selectedValue: string;
	otherParams: { [key: string]: string } | null;
}

export const ProductVariantLink: FunctionComponent<ProductVariantLinkProps> = ({
	type,
	value,
	slug,
	selectedValue,
	otherParams,
}) => {
	return (
		<Link
			// eslint-disable-next-line @typescript-eslint/restrict-template-expressions
			href={`?${new URLSearchParams({ [type]: slug, ...otherParams })}`}
			className={`rounded-full border-2 bg-gray-100 px-4 py-1 hover:opacity-75 ${
				slug === selectedValue && "border-blue-600"
			}`}
		>
			{value}
		</Link>
	);
};
