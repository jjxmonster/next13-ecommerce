import { type FunctionComponent } from "react";

interface SectionHeaderProps {
	title: string;
	leftContent?: React.ReactNode;
}
export const SectionHeader: FunctionComponent<SectionHeaderProps> = ({
	title,
	leftContent,
}) => {
	return (
		<div className="bg-slate-200">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-8">
				<h2 role="heading" className="py-8 font-medium text-gray-500">
					{title}
				</h2>
				<div>{leftContent}</div>
			</div>
		</div>
	);
};
