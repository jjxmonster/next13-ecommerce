"use client";

import { experimental_useFormStatus as useFormStatus } from "react-dom";

export const AddToCartButton = () => {
	const formStatus = useFormStatus();
	return (
		<button
			data-testid="add-to-cart-button"
			disabled={formStatus.pending}
			type="submit"
			className="bg-slate- 100 rounded-sm border px-6 py-2 shadow-sm disabled:cursor-wait disabled:bg-slate-200"
		>
			ADD TO CART
		</button>
	);
};
