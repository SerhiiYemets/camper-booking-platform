"use client";

import css from "./Header.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTruck } from "react-icons/fa";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={css.header}>
            <Link href="/" className={css.logo}>
                <FaTruck />
                TravelTrucks
            </Link>

            <nav aria-label="Main Navigation">
                <ul className={css.navigation}>
                    <li>
                        <Link
                            href="/"
                            className={`${css.navLink} ${pathname === "/" ? css.active : ""}`}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/catalog"
                            className={`${css.navLink} ${pathname === "/catalog" ? css.active : ""}`}
                        >
                            Catalog
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}