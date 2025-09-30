import { formatReviews } from '@/app/utils/formatReviews';
import { useQuery } from '@tanstack/react-query';
import fallbackReviews from '@/app/utils/fallback.json';

const fetchReviews = async () => {
  const rawReviews = await fetch(`${process.env.NEXT_PUBLIC_REVIEWS_URL}`);
  const reviewsData = await rawReviews.json();
  const hasReviews = reviewsData && reviewsData?.result?.data?.length;

  const responseObj = hasReviews
    ? formatReviews(reviewsData)
    : fallbackReviews.reviews;

  return responseObj;
};

export const useReviews = () => {
  const { data, error, isFetched, ...otherProps } = useQuery({
    queryKey: ['reviews'],
    queryFn: fetchReviews,
  });

  return {
    reviews: data,
    isFetched,
    ...otherProps,
  };
};
