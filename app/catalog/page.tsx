"use client";

import { useCampers } from "@/hooks/useCampers";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
    const filters = {};

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetchingNextPage,
    } = useCampers(filters);

    const campers = data?.pages.flatMap((page) => page.campers) ?? [];

    if (isLoading) {
        return <p className={css.status}>Loading...</p>;
    }

    return (
        <section className={css.section}>
        <h1 className={css.title}>Catalog</h1>

        <ul className={css.list}>
            {campers.map((camper) => (
            <li key={camper.id} className={css.card}>
                <span>{camper.name}</span>
                <span>€{camper.price}</span>
            </li>
            ))}
        </ul>

        {/* 🔥 Load More прямо здесь */}
        {hasNextPage && (
            <button
            className={css.button}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            >
            {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
        )}
        </section>
    );
}