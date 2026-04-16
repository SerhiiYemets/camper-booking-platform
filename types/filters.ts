import { FormType, TransmissionType, EngineType } from "./camper";

export interface FiltersResponse {
    forms: FormType[];
    transmissions: TransmissionType[];
    engines: EngineType[];
};

export interface CamperFilters {
    location?: string;
    form?: FormType;
    transmission?: TransmissionType;
    engine?: EngineType;
};


