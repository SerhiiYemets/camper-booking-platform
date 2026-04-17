"use client";

import { Review } from "@/types/review";
import css from "./ReviewsList.module.css";

type Props = {
    reviews: Review[];
};

export default function ReviewsList({ reviews }: Props) {
    if (!reviews.length) {
        return <p>No reviews yet</p>;
    }


    function Stars({ rating }: { rating: number }) {
        return (
            <div className={css.stars}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < rating ? css.activeStar : css.star}>
                ⭐
                </span>
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