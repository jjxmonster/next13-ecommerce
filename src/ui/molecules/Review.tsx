import type { FunctionComponent } from "react";
import { Star } from "lucide-react";

interface ReviewProps {
	name: string;
	rating: number;
	title: string;
	content: string;
}

export const Review: FunctionComponent<ReviewProps> = ({
	name,
	rating,
	title,
	content,
}) => {
	return (
		<div className="flex flex-col gap-2 py-12">
			<div className="text-sm ">{name}</div>
			<div className="flex items-center gap-1 text-sm">
				<span className="font-bold text-gray-500">{rating}/5</span>
				<div className="flex">
					{[1, 2, 3, 4, 5].map((star) => (
						<Star
							key={star}
							fill={star <= rating ? "gold" : "transparent"}
							color="gold"
							size={18}
						/>
					))}
				</div>
			</div>
			<span className="text-sm font-medium text-gray-800">{title}</span>
			<p className="cursive text-sm italic text-gray-500">{content}</p>
		</div>
	);
};
