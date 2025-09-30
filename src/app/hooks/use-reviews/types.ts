export interface ReviewType {
  id: number;
  reviewer_name: string;
  text: string;
  rating: number;
}

export interface ReviewDataType {
  status: string;
  result: {
    data: ReviewType[];
  };
}
