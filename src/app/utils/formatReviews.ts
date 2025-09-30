import { ReviewDataType, ReviewType } from '../hooks/use-reviews/types';

export function formatReviews(reviewData: ReviewDataType): ReviewType[] {
  return reviewData.result.data.map(
    ({ id, reviewer_name, text, rating }: ReviewType) => ({
      id,
      reviewer_name,
      text,
      rating,
    })
  );
}
