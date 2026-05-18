import styles from "./page.module.css";
export default function ServerActionPage() {
  async function logCurrentTime() {
    "use server";

    console.log("Server time:", new Date().toLocaleString());
  }

  return (
      <main className={styles.page}>
          <h1 className={styles.title}>Server Action</h1>

      <form action={logCurrentTime}>
        <button className={styles.button} type="submit">
          Log current time
        </button>
      </form>
    </main>
  );
}