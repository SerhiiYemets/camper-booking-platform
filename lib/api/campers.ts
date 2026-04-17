import { apiFetch } from "./client";
import { CampersResponse } from "@/types/api";
import { CamperDetails } from "@/types/camper";
import { CamperFilters } from "@/types/filters";

type FetchCampersParams = {
    pageParam?: number;
    filters?: CamperFilters;
};

export async function fetchCampers({
    pageParam = 1,
    filters,
}: FetchCampersParams): Promise<CampersResponse> {
    const params = new URLSearchParams();

    params.set("page", String(pageParam));
    params.set("perPage", "4");

    if (filters?.location) params.set("location", filters.location);
    if (filters?.form) params.set("form", filters.form);
    if (filters?.engine) params.set("engine", filters.engine);
    if (filters?.transmission) params.set("transmission", filters.transmission);

    return apiFetch<CampersResponse>(`/campers?${params.toString()}`);
}

export async function fetchCamperById(
    camperId: string
): Promise<CamperDetails> {
    return apiFetch<CamperDetails>(`/campers/${camperId}`);
}