"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCamperById } from "@/lib/api/campers";
import { queryKeys } from "@/lib/queryKeys";

export const useCamper = (camperId: string) => {
    return useQuery({
        queryKey: queryKeys.camper(camperId),
        queryFn: () => fetchCamperById(camperId),
        enabled: !!camperId,
    });
};


