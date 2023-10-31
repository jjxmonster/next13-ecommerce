import { X } from "lucide-react";

export default async function CartCancelPage() {
	return (
		<div className="mt-10 flex flex-col items-center">
			<X color="red" size={40} strokeWidth={3} />
			<h2 className="text-xl"> Payment Cancelled</h2>
		</div>
	);
}
