"use client";

import { useState } from "react";
import { CamperFilters } from "@/types/filters";
import css from "./Filters.module.css";
import Icon from "../Icon/Icon";


type Props = {
    filters: CamperFilters;
    setFilters: (filters: CamperFilters) => void;
};

const FORM_OPTIONS = [
    { value: "alcove", label: "Alcove" },
    { value: "panel_van", label: "Panel Van" },
    { value: "integrated", label: "Integrated" },
    { value: "semi_integrated", label: "Semi integrated"}
] as const;

const ENGINE_OPTIONS = [
    { value: "diesel", label: "Diesel" },
    { value: "petrol", label: "Petrol" },
    { value: "hybrid", label: "Hybrid" },
    { value: "electric", label: "Electric" },
] as const;

const TRANSMISSION_OPTIONS = [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
] as const;

export default function Filters({ filters, setFilters }: Props) {

    const [localFilters, setLocalFilters] = useState<CamperFilters>(filters);

    const toggleFilter = <K extends keyof CamperFilters>(
        key: K,
        value: CamperFilters[K]
    ) => {
        setLocalFilters({
            ...localFilters,
            [key]: localFilters[key] === value ? undefined : value,
        });
    };

    const handleLocation = (value: string) => {
        setLocalFilters({
            ...localFilters,
            location: value || undefined,
        });
    };

    const applyFilters = () => {
        setFilters(localFilters); 
    };

    const clearFilters = () => {
        setLocalFilters({});
        setFilters({});
    };

    return (
        <div className={css.wrapper}>
            <div className={css.section}>
                <p className={css.title}>Location</p>

                <div className={css.inputWrapper}>
                    <Icon id="map" className={css.icon} />

                    <input
                        className={css.input}
                        placeholder="Kyiv, Ukraine"
                        value={localFilters.location || ""}
                        onChange={(e) => handleLocation(e.target.value)}
                    />
                </div>
            </div>

            <p className={css.filtersTitle}>Filters</p>

            <div className={css.section}>
                <p className={css.title}>Camper form</p>
                <div className={css.group}>
                    {FORM_OPTIONS.map((opt) => (
                        <label key={opt.value} className={css.checkbox}>
                            <input
                                type="radio"
                                name="form"
                                checked={localFilters.form === opt.value}
                                onChange={() => toggleFilter("form", opt.value)}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </div>

            <div className={css.section}>
                <p className={css.title}>Engine</p>
                <div className={css.group}>
                    {ENGINE_OPTIONS.map((opt) => (
                        <label key={opt.value} className={css.checkbox}>
                            <input
                                type="radio"
                                name="engine"
                                checked={localFilters.engine === opt.value}
                                onChange={() => toggleFilter("engine", opt.value)}
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </div>

            <div className={css.section}>
                <p className={css.title}>Transmission</p>
                <div className={css.group}>
                    {TRANSMISSION_OPTIONS.map((opt) => (
                        <label key={opt.value} className={css.checkbox}>
                            <input
                                type="radio"
                                name="transmission"
                                checked={localFilters.transmission === opt.value}
                                onChange={() =>
                                    toggleFilter("transmission", opt.value)
                                }
                            />
                            {opt.label}
                        </label>
                    ))}
                </div>
            </div>

            <button className={css.search} onClick={applyFilters}>
                Search
            </button>

            <button className={css.clear} onClick={clearFilters}>
                <Icon id="close" className={css.clearIcon} />
                Clear filters
            </button>
        </div>
    );
}