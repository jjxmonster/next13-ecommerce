"use client";
import { useEffect, type FunctionComponent } from "react";
import { useFormStatus } from "react-dom";

interface SubmitButtonProps {
	text: string;
}

export const SubmitButton: FunctionComponent<SubmitButtonProps> = ({
	text,
}) => {
	const formStatus = useFormStatus();

	useEffect(() => {
		const form = document.getElementById("add-review-form") as HTMLFormElement;
		if (formStatus.pending) {
			return;
		}
		form?.reset();
	}, [formStatus]);
	return (
		<button
			disabled={formStatus.pending}
			type="submit"
			className="rounded-md bg-blue-600 px-5 py-3 text-white"
		>
			{text}
		</button>
	);
};
