"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/fetchCampers";
import { CamperFilters } from "@/types/filters";
import { queryKeys } from "@/lib/queryKeys";


export const useCampers = (filters: CamperFilters) => {
    return useInfiniteQuery({
        queryKey: queryKeys.campers(filters),

        queryFn: ({ pageParam = 1 }) =>
        fetchCampers({
            pageParam,
            filters,
        }),

        initialPageParam: 1,

        getNextPageParam: (lastPage) => {
        if (lastPage.page < lastPage.totalPages) {
            return lastPage.page + 1;
        }
        return undefined;
        },
    });
};