import { apiFetch } from "./client";
import { BookingRequest } from "@/types/booking";

export async function createBooking(
    camperId: string,
    data: BookingRequest
): Promise<void> {
    return apiFetch(`/campers/${camperId}/booking-requests`, {
        method: "POST",
        body: JSON.stringify(data),
    });
}
