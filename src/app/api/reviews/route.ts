import fallbackReviews from './fallback.json';

interface ReviewType {
  id: number;
  reviewer_name: string;
  text: string;
  rating: number;
}

interface ReviewDataType {
  status: string;
  result: {
    data: ReviewType[];
  };
}

function formatReviews(reviewData: ReviewDataType): ReviewType[] {
  return reviewData.result.data.map(
    ({ id, reviewer_name, text, rating }: ReviewType) => ({
      id,
      reviewer_name,
      text,
      rating,
    })
  );
}

export async function GET(request: Request) {
  const rawReviews = await fetch(`${process.env.NEXT_PUBLIC_REVIEWS_URL}`);
  const reviewsData = await rawReviews.json();
  const hasReviews = reviewsData && reviewsData?.result?.data?.length;

  const responseObj = hasReviews
    ? formatReviews(reviewsData)
    : fallbackReviews.reviews;

  return new Response(JSON.stringify(responseObj), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
