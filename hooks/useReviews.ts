"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchReviews } from "@/lib/api/reviews";

export const useReviews = (camperId: string) => {
    return useQuery({
        queryKey: ["reviews", camperId],
        queryFn: () => fetchReviews(camperId),
        enabled: !!camperId,
    });
};