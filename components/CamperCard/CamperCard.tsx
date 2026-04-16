"use client";

import { CamperCard as CamperType } from "@/types/camper";
import css from "./CamperCard.module.css";

type Props = {
    camper: CamperType;
};

export default function CamperCard({ camper }: Props) {
    return (
        <li className={css.card}>
            <img
                src={camper.coverImage}
                alt={camper.name}
                className={css.image}
            />

            <div className={css.info}>
                <div className={css.header}>
                    <h3>{camper.name}</h3>
                    <span className={css.price}>€{camper.price}</span>
                </div>

                <p className={css.meta}>
                    ⭐ {camper.rating} ({camper.totalReviews}) · {camper.location}
                </p>

                <p className={css.description}>
                    {camper.name} camper — perfect for your trip...
                </p>

                <div className={css.tags}>
                    <span>{camper.engine}</span>
                    <span>{camper.transmission}</span>
                    <span>{camper.form}</span>
                </div>

                <button className={css.button}>Show more</button>
            </div>
        </li>
    );
}

