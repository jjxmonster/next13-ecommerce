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
				<h3 className="py-8 font-medium">{title}</h3>
			</div>
		</div>
	);
};
