"use client";

import { Review } from "@/types/review";
import css from "./ReviewsList.module.css";
import Icon from "../Icon/Icon";

type Props = {
    reviews: Review[];
};

export default function ReviewsList({ reviews }: Props) {
    if (!reviews.length) {
        return <p>No reviews yet</p>;
    }


    function Stars({ rating }: { rating: number }) {
    const rounded = Math.round(rating);
    return (
        <div className={css.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                key={i}
                id={i < rounded ? "star-filled" : "star-empty"}
                className={i < rounded ? css.starActive : css.starEmpty}
                />
            ))}
        </div>
    );
}
    return (
        <div className={css.list}>
            {reviews.map((review) => (
                <div key={review.id} className={css.card}>
                    <div className={css.header}>
                        <div className={css.avatar}>
                            {review.reviewer_name[0]}
                    </div>

                    <div>
                        <p className={css.name}>{review.reviewer_name}</p>
                            <Stars rating={review.reviewer_rating} />
                    </div>
                </div>
                
                <p className={css.text}>{review.comment}</p>
                </div>
            ))}
        </div>
    );
}