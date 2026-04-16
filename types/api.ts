import { CamperCard } from "./camper";

export interface CampersResponse {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    campers: CamperCard[];
};

