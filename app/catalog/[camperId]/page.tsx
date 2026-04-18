"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

import { useCamper } from "@/hooks/useCamper";
import { useReviews } from "@/hooks/useReviews";

import ReviewsList from "@/components/ReviewsList/ReviewsList";
import BookingForm from "@/components/BookingForm/BookingForm";

import css from "./camperId.module.css";

export default function CamperDetailsPage() {
  const params = useParams();
  const camperId = params.camperId as string;

  const { data: camper, isLoading, isError } = useCamper(camperId);
  const { data: reviews } = useReviews(camperId);

  const [active, setActive] = useState(0);

  if (isLoading) return <p className={css.status}>Loading...</p>;
  if (isError || !camper) return <p className={css.status}>Error</p>;

  return (
    <section className={css.container}>
      <div className={css.top}>
        <div className={css.gallery}>
          <img
            src={camper.gallery[active]?.original}
            alt={camper.name}
            className={css.mainImage}
          />

          <div className={css.thumbs}>
            {camper.gallery.map((img, index) => (
              <img
                key={img.id}
                src={img.thumb}
                alt={camper.name}
                onClick={() => setActive(index)}
                style={{
                  border:
                    active === index ? "2px solid #829B91" : "none",
                }}
              />
            ))}
          </div>
        </div>

        <div className={css.right}>
          <div className={css.detailsCard}>
            <h1 className={css.title}>{camper.name}</h1>

            <p className={css.meta}>
              ⭐ {camper.rating} ({camper.totalReviews} Reviews) ·{" "}
              {camper.location}
            </p>

            <p className={css.price}>€{camper.price}</p>

            <p className={css.description}>{camper.description}</p>
          </div>

          <div className={css.detailsCard}>
            <h2 className={css.subtitle}>Vehicle details</h2>

            <div className={css.features}>
              {camper.amenities?.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className={css.divider}></div>

            <div className={css.specs}>
              <div>
                <span>Form</span>
                <span>{camper.form}</span>
              </div>
              <div>
                <span>Length</span>
                <span>{camper.length}</span>
              </div>
              <div>
                <span>Width</span>
                <span>{camper.width}</span>
              </div>
              <div>
                <span>Height</span>
                <span>{camper.height}</span>
              </div>
              <div>
                <span>Tank</span>
                <span>{camper.tank}</span>
              </div>
              <div>
                <span>Consumption</span>
                <span>{camper.consumption}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={css.bottom}>
        <div className={css.reviews}>
          <h2>Reviews</h2>
          <ReviewsList reviews={reviews || []} />
        </div>

        <div className={css.form}>
          <BookingForm camperId={camperId} />
        </div>
      </div>
    </section>
  );
}