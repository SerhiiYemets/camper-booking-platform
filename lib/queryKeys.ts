import { CamperFilters } from "@/types/filters";

export const queryKeys = {
    campers: (filters: CamperFilters) => ["campers", filters] as const,
    camper: (camperId: string) => ["camper", camperId] as const,
};