export type FormType =
    | "alcove"
    | "panel_van"
    | "integrated"
    | "semi_integrated"
    | string;

export type TransmissionType = "automatic" | "manual" | string;

export type EngineType =
    | "diesel"
    | "petrol"
    | "hybrid"
    | "electric"
    | string;

export type Amenity =
    | "ac"
    | "bathroom"
    | "kitchen"
    | "tv"
    | "radio"
    | "refrigerator"
    | "microwave"
    | "gas"
    | "water"
    | string;


export interface CamperCard {
    id: string;
    name: string;
    price: number;
    rating: number;
    location: string;
    form: FormType;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: TransmissionType;
    engine: EngineType;
    amenities: Amenity[];
    coverImage: string;
    totalReviews: number;
};

export interface CamperDetails {
    id: string;
    name: string;
    price: number;
    rating: number;
    totalReviews: number;
    location: string;
    description: string;
    form: FormType;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: TransmissionType;
    engine: EngineType;
    amenities: Amenity;
    gallery: GalleryItem[];
    createdAt: string;
    updatedAt: string;
};

export interface GalleryItem {
    id: string;
    camperId: string;
    thumb: string;
    original: string;
    order: number;
};



