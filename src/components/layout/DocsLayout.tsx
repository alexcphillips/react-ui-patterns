import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import styles from "./DocsLayout.module.css";

export default function DocsLayout() {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
}
