"use client";

import { CamperCard as CamperType } from "@/types/camper";
import css from "./CamperCard.module.css";
import Link from "next/link";
import Icon from "../Icon/Icon";

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
                    ⭐ {camper.rating} ({camper.totalReviews} Reviews) {" "}
                    
                    <Icon id="map" className={css.metaIcon} />
                    {camper.location}
                </p>

                <p className={css.description}>
                    {camper.name} camper — perfect for your trip...
                </p>

                <div className={css.tags}>
                    <span className={css.tag}>
                        <Icon id="gas-pump" className={css.tagIcon} />
                        {camper.engine}
                    </span>

                    <span className={css.tag}>
                        <Icon
                        id={camper.transmission === "automatic" ? "automatic" : "manual"}
                        className={css.tagIcon}
                        />
                        {camper.transmission}
                    </span>

                    <span className={css.tag}>
                        <Icon
                        id={
                            camper.form === "panel_van"
                            ? "van"
                            : camper.form === "alcove"
                            ? "van"
                            : camper.form === "integrated"
                            ? "van"
                            : "van"
                        }
                        className={css.tagIcon}
                        />
                        {camper.form}
                    </span>
                    </div>

                <Link href={`/catalog/${camper.id}`} target="_blank" rel="noopener noreferrer">
                    <button className={css.button}>Show more</button>
                </Link>
            </div>
        </li>
    );
}

