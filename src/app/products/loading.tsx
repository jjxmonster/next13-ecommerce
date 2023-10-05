import { LoadingIndicator } from "@/ui/atoms/LoadingIndicator";

export default function Loading() {
	return (
		<div className="flex h-full min-h-[400px] w-full items-center justify-center">
			<LoadingIndicator />
		</div>
	);
}
