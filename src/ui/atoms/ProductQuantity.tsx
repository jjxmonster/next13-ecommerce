"use client";
import { useOptimistic, useTransition } from "react";
import { useRouter } from "next/navigation";
import { changeItemQuantity, removeItem } from "@/actions";

export const ProductQuantity = ({
	quantity,
	itemId,
}: {
	quantity: number;
	itemId: string;
}) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);
	const [_, startTransition] = useTransition();
	const router = useRouter();

	return (
		<form className="flex items-center justify-center gap-2">
			<button
				data-testid="decrement"
				formAction={async () => {
					if (optimisticQuantity === 1) {
						startTransition(async () => {
							await removeItem(itemId);
							router.refresh();
						});
					} else {
						setOptimisticQuantity(optimisticQuantity - 1);
						await changeItemQuantity(itemId, optimisticQuantity - 1);
					}
				}}
				className="h-8 w-8 rounded-full border bg-slate-50"
			>
				-
			</button>
			<span data-testid="quantity">{optimisticQuantity}</span>
			<button
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
				className="h-8 w-8 rounded-full border bg-slate-50"
			>
				+
			</button>
		</form>
	);
};
