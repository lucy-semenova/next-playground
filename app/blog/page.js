import styles from "./page.module.css";
export default async function Blog() {
  const blogResponse = await fetch("https://api.vercel.app/blog");
  const blog = await blogResponse.json();

  const categories = blog.map(entry => entry.category);

  const uniqueCategories = Array.from(new Set(categories));

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Blog page</h1>

      <ol className={styles.ol}>
        {uniqueCategories.map((category) => (
          <li className={styles.list} key={category}>{category}</li>
        ))}
      </ol>
      <p className={ styles.p}>Total categories: {uniqueCategories.length}</p>

    </div >
  );
}