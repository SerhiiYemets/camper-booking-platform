"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon/Icon";
import css from "./Header.module.css";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={css.header}>
        <div className={css.container}>
            <Link href="/" className={css.logo}>
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
        </div>
        </header>
    );
}