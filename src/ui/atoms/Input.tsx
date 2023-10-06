import { type FunctionComponent } from "react";

interface InpurProps {
	label: string;
	type: string;
	name: string;
	required: boolean;
}

export const Input: FunctionComponent<InpurProps> = ({
	label,
	type,
	name,
	required,
}) => {
	return (
		<label className="mb-3 flex max-w-md flex-col gap-2">
			<span className="text-xs text-gray-700">{label}</span>
			{type === "area" ? (
				<textarea
					required={required}
					className="w-25 mt-1  max-h-48 min-h-[2.5rem] rounded-md  border p-2 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
					name={name}
					spellCheck="false"
				></textarea>
			) : (
				<input
					className="w-25 mt-1  max-h-48 min-h-[2.5rem] rounded-md  border p-2 text-sm font-light shadow-sm focus:border-blue-300 focus:outline-none focus:ring  focus:ring-blue-200 focus:ring-opacity-50"
					type={type}
					name={name}
					required={required}
				/>
			)}
		</label>
	);
};
