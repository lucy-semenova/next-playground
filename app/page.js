import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.content}>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={30}
            priority
          />

          <h1 className={styles.title}>Next.js Session</h1>

          <p className={styles.text}>Navigation to all completed exercises</p>

          <nav className={styles.nav}>
            <Link href="/dog" className={styles.linkBlue}>
              Dog Photo of the Day
            </Link>

            <Link href="/blog" className={styles.linkOrange}>
              Blog Categories
            </Link>

            <Link href="/onserver" className={styles.linkBlue}>
              Server-side Rendering
            </Link>

            <Link href="/onclient" className={styles.linkOrange}>
              Client-side Rendering
            </Link>

            <Link href="/blogs" className={styles.linkBlue}>
              Dynamic Blog Routes
            </Link>

            <Link href="/blogs/my-new-post" className={styles.linkOrange}>
              Dynamic Post
            </Link>

            <Link href="/server-action" className={styles.linkBlue}>
              Server Action
            </Link>
          </nav>
        </div>
      </main>
    </div>
  );
}
