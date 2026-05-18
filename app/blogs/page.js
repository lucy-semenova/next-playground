import styles from "./page.module.css";
export default function BlogsPage() {
  return (
    <main className={styles.page}>
      <h1 className={ styles.title}>Blogs</h1>

      <ul className={ styles.ul}>
        <li className={ styles.list}>
          <a href="/blogs/my-new-post">My New Post</a>
        </li>
        <li className={ styles.list}>
          <a href="/blogs/hello-next-js">Hello Next Js</a>
        </li>
      </ul>
    </main>
  );
}