import styles from "./page.module.css";
import Link from "next/link";
export default function BlogsPage() {
  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Blogs</h1>

      <ul className={styles.ul}>
        <li className={styles.list}>
          <a href="/blogs/my-new-post">My New Post</a>
        </li>
        <li className={styles.list}>
          <a href="/blogs/hello-next-js">Hello Next Js</a>
        </li>
      </ul>
      <Link href="/" className={styles.backHome}>
        Back to Home
      </Link>
    </main>
  );
}
