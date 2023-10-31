import { Review } from "../molecules/Review";
import { getReviewsByProductId } from "@/api/reviews";

export const Reviews = async ({ productId }: { productId: string }) => {
	const reviews = await getReviewsByProductId(productId);

	if (!reviews) return null;

	return (
		<div className="divide-y divide-gray-700">
			{reviews.map(({ id, title, name, rating, content }) => (
				<Review
					key={id}
					title={title}
					name={name}
					rating={rating}
					content={content}
				/>
			))}
		</div>
	);
};
