import { CampersResponse } from "@/types/api";
import { CamperFilters } from "@/types/filters";

const BASE_URL = "https://campers-api.goit.study";

export const fetchCampers = async ({
    pageParam = 1,
    filters,
    }: {
    pageParam?: number;
    filters?: CamperFilters;
    }): Promise<CampersResponse> => {
    const params = new URLSearchParams();


    params.append("page", String(pageParam));
    params.append("perPage", "4");

    if (filters?.location) {
        params.append("location", filters.location);
    }

    if (filters?.form) {
        params.append("form", filters.form);
    }

    if (filters?.transmission) {
        params.append("transmission", filters.transmission);
    }

    if (filters?.engine) {
        params.append("engine", filters.engine);
    }

    const res = await fetch(`${BASE_URL}/campers?${params.toString()}`);

    if (!res.ok) {
        throw new Error("Failed to fetch campers");
    }

    return res.json();
};