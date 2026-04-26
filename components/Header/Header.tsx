"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon/Icon";
import BurgerMenu from "@/components/BurgerMenu/BurgerMenu";
import css from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={css.header}>
        <div className={css.container}>
            
            <Link href="/" className={css.logo} aria-label="Go to home page">
            <Icon id="logo" width={136} height={16} />
            </Link>

            <nav className={css.nav}>
            <Link
                href="/"
                className={`${css.link} ${
                pathname === "/" ? css.active : ""
                }`}
            >
                Home
            </Link>

            <Link
                href="/catalog"
                className={`${css.link} ${
                pathname.startsWith("/catalog") ? css.active : ""
                }`}
            >
                Catalog
            </Link>
            </nav>

            <button
            className={css.burger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            >
            ☰
            </button>

        </div>

        <BurgerMenu
            menuOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
        />
        </header>
    );
}