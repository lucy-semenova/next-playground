"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Onclient() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/blog");

        const data = await response.json();

        console.log(data);

        setArticles(data);
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>
        10 articles on the client
      </h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ol className={styles.ol}>
          {articles.slice(0, 10).map((article) => (
            <li key={article.id} className={styles.list}>
              {article.title}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}