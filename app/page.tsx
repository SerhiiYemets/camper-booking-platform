import Link from "next/link";
import css from "./Home.module.css";

export default function HomePage() {
  return (
    <section className={css.heroSection}>
      <div className={css.hero}>
        <div className={css.overlay} />

        <div className={css.content}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>

          <Link href="/catalog" className={css.button}>
            View Now
          </Link>
        </div>
      </div>
    </section>
  );
}