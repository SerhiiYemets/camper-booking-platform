"use client";

import { useCampers } from "@/hooks/useCampers";
import css from "./CatalogPage.module.css";
import { useState } from "react";
import Filters from "@/components/Filters/Filters";
import { CamperFilters } from "@/types/filters";
import CamperCard from "@/components/CamperCard/CamperCard";

export default function CatalogPage() {

    const [filters, setFilters] = useState<CamperFilters>({});

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
        <section className={css.container}>
            <div className={css.sidebar}>
                <Filters filters={filters} setFilters={setFilters} />
            </div>
            <div className={css.content}>
                <ul className={css.list}>
                {campers.map((camper) => (
                    <CamperCard key={camper.id} camper={camper} />
                ))}
                </ul>

                {hasNextPage && (
                <button className={css.button} onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </button>
                )}
            </div>
        </section>
    );
}