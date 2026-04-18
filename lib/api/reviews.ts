import { apiFetch } from "./client";
import { Review } from "@/types/review";

export const fetchReviews = (camperId: string) => {
    return apiFetch<Review[]>(`/campers/${camperId}/reviews`);
};