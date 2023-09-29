import { type FunctionComponent } from "react";

interface SectionHeaderProps {
	title: string;
}
export const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
	title,
}) => {
	return (
		<div className="bg-gray-100">
			<div className="mx-auto max-w-7xl px-8">
				<h2 role="heading" className="py-8 font-medium text-gray-500">
					{title}
				</h2>
			</div>
		</div>
	);
};
