import { CamperCard } from "./camper";

export interface CampersResponse {
    total: number;
    items: CamperCard[];
}