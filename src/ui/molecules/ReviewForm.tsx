import { Input } from "../atoms/Input";
import { Rating } from "../atoms/RatingInput";
import { SubmitButton } from "../atoms/SubmitButton";
import { addProductReview } from "@/actions";
import { reviewFormItems } from "@/utils";

export const ReviewForm = ({ productId }: { productId: string }) => {
	return (
		<div>
			<h3 className="mb-5 text-2xl font-bold">Customer Reviews</h3>
			<form
				id="add-review-form"
				action={addProductReview}
				data-testid="add-review-form"
			>
				<input type="hidden" name="productId" value={productId} />
				{reviewFormItems.map((item) => {
					if (item.type === "rating") {
						return <Rating key={item.name} />;
					}
					return <Input key={item.name} {...item} />;
				})}
				<SubmitButton text="Submit Review" />
			</form>
		</div>
	);
};
