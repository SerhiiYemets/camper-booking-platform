import { apiFetch } from "./client";
import { BookingRequest } from "@/types/booking";

export async function createBooking(data: BookingRequest) {
    return apiFetch("/bookings", {
        method: "POST",
        body: JSON.stringify(data),
    });
}