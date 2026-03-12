import { useEffect, useState } from "react";
import styles from "./Introduction.module.css";

export default function Introduction() {
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                );
                if (!response.ok)
                    throw new Error("HTTP Error: " + response.status);
                const result = await response.json();
                setData(result);
                setError(null);
            } catch (err) {
                setData(null);
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError(String(err));
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Welcome to React Component Patterns
            </h1>
            <p className={styles.description}>
                dskapdiunweqiupvbenqriuvberubviuer iquvneriv
                rvqipuvberiquvbriqubvie ervuberiuv beriui
            </p>

            <p>This is data from "https://jsonplaceholder.typicode.com/user</p>

            {loading && <div className={styles["loading"]}>Loading...</div>}

            {error && (
                <div className={styles["fetch-error"]}>
                    Error fetching user list: {error}
                </div>
            )}

            {!loading && !error && data && (
                <div className={styles["users"]}>
                    {
                        <ul>
                            {data.map((user: any) => (
                                <li key={user.id}>
                                    {user.name} - {user.email}
                                </li>
                            ))}
                        </ul>
                    }
                </div>
            )}
        </div>
    );
}
