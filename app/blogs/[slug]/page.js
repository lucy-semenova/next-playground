import styles from "./page.module.css";
export default async function BlogPostPage({ params }) {
  const { slug } = await params;

   const title = slug
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");


  return (
      <main className={styles.page}>
      <h1 className={styles.title}>Blog post page</h1>
      <p className={ styles.p}>My slug is {slug}</p>
    </main>
  );
}