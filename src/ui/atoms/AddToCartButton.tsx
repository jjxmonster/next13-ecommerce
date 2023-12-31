"use client";

import { useSearchParams } from "next/navigation";
import { useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	const { get } = useSearchParams();

	const size = get("size");
	const color = get("color");
	return (
		<button
			data-testid="add-to-cart-button"
			disabled={formStatus.pending || !size || !color}
			type="submit"
			className="bg-slate- 100 rounded-sm border px-6 py-2 shadow-sm disabled:cursor-not-allowed disabled:bg-slate-200"
		>
			ADD TO CART
		</button>
	);
};
