import styles from "./Navbar.module.css";
import { navItems } from "./navbarData";
import NavbarItem from "./NavItem";

export function Navbar() {
    const internalLinks = navItems.filter(
        (item) => !item.path.startsWith("http"),
    );
    const externalLinks = navItems.filter((item) =>
        item.path.startsWith("http"),
    );

    return (
        <div className={styles.navbar}>
            <div className={styles.title}>React Component Patterns</div>

            <div className={styles["links-container"]}>
                {internalLinks.map((item) => (
                    <NavbarItem key={item.label} {...item} />
                ))}

                <div className={`${styles["external-links-container"]}`}>
                    {externalLinks.map((item) => (
                        <NavbarItem key={item.label} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
