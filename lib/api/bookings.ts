import { apiFetch } from "./client";
import { BookingRequest } from "@/types/booking";

export async function createBooking(
    camperId: string,
    data: BookingRequest
) {
    return apiFetch(`/camper/${camperId}/booking-requests`, {
        method: "POST",
        body: JSON.stringify(data),
    });
}