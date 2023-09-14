import { Pagination } from "@/ui/molecules/Pagination";

export default function ProductsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<div className="h-[80wh]">{children}</div>
			<Pagination />
		</>
	);
}
