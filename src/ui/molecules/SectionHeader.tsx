import { ShirtIcon } from "lucide-react";
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
		<div className="flex justify-between py-5">
			<div className="flex flex-col gap-2">
				<ShirtIcon color="gray" />
				<h1 className="text-md font-bold uppercase text-gray-600">{title}</h1>
			</div>
			{leftContent}
		</div>
	);
};
