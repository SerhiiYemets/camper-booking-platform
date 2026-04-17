"use client";

import { useParams } from "next/navigation";
import { useCamper } from "@/hooks/useCamper";
import ReviewsList from "@/components/ReviewsList/ReviewsList";
import css from "./camperId.module.css";

export default function CamperDetailsPage() {
  const params = useParams();
  const camperId = params.camperId as string;

  const { data: camper, isLoading, isError } = useCamper(camperId);

  if (isLoading) return <p className={css.status}>Loading...</p>;
  if (isError || !camper) return <p className={css.status}>Error</p>;

  return (
    <section className={css.container}>
      <h1 className={css.title}>{camper.name}</h1>

      <p className={css.meta}>
        ⭐ {camper.rating} ({camper.totalReviews}) · {camper.location}
      </p>

      <p className={css.price}>€{camper.price}</p>

      <div className={css.gallery}>
        {camper.gallery.map((img, index) => (
          <img key={index} src={img.thumb} alt={camper.name} />
        ))}
      </div>

      <p className={css.description}>{camper.description}</p>

      <div className={css.features}>
        <span>Form: {camper.form}</span>
        <span>Engine: {camper.engine}</span>
        <span>Transmission: {camper.transmission}</span>
        <span>Length: {camper.length}</span>
        <span>Width: {camper.width}</span>
        <span>Height: {camper.height}</span>
        <span>Tank: {camper.tank}</span>
        <span>Consumption: {camper.consumption}</span>
      </div>

      <div className={css.bottom}>
        <div className={css.reviews}>
          <h2>Reviews</h2>
          <ReviewsList reviews={camper.reviews || []} />
        </div>

        <div className={css.form}>
          {/* позже тут будет форма */}
        </div>
      </div>
    </section>
  );
}