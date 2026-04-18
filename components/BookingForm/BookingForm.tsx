"use client";

import { useState } from "react";
import css from "./BookingForm.module.css";

type Props = {
    camperId: string;
}

export default function BookingForm({ camperId } : Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            setLoading(true);

            const res = await fetch(
                `https://campers-api.goit.study/campers/${camperId}/booking-requests`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, email }),
                }
            );

            if(!res.ok) throw new Error();

            alert ("Booking successful ✅");

            setName("");
            setEmail("");
        }   catch (error) {
            alert("Error booking ❌");
        }   finally {
            setLoading(false);   
        }
    };

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <h3 className={css.title}>Book your campervan now</h3>
            <p className={css.subtitle}>Stay connected! We are always ready to help you.</p>

            <input
                className={css.input}
                type="text"
                placeholder="Name*"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                className={css.input}
                type="email"
                placeholder="Email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <button className={css.button} disabled={loading}>
                {loading ? "Sending..." : "Send"}
            </button>
        </form>
    );
}