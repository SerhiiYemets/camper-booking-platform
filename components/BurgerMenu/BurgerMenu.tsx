import Link from "next/link";
import css from "./BurgerMenu.module.css";

interface BurgerMenuProps {
    menuOpen: boolean;
    onClose: () => void;
}

export default function BurgerMenu({ menuOpen, onClose }: BurgerMenuProps) {
    if (!menuOpen) return null;

    return (
        <nav className={css.menu}>
            <Link href="/" onClick={onClose} className={css.link}>
                Home
            </Link>
            <Link href="/catalog" onClick={onClose} className={css.link}>
                Catalog
            </Link>
        </nav>
    );
}