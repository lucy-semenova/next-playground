import styles from "./page.module.css";
import Link from "next/link";
export default async function Onserver() {
  const onServerResponse = await fetch("https://api.vercel.app/blog");
  const onServer = await onServerResponse.json();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>10 articles on the server</h1>
      <ol className={styles.ol}>
        {onServer.slice(0, 10).map((article) => (
          <li key={article.id} className={styles.list}>
            {article.title}
          </li>
        ))}
      </ol>
      <Link href="/" className={styles.backHome}>
        Back to Home
      </Link>
    </div>
  );
}
