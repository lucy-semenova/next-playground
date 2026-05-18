import styles from "./page.module.css";

export default async function Dog() {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const dog = await data.json();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Dog of the Day</h1>
      <img className={styles.image} src={dog.message} alt="Random Dog" />
    </div>
  );
}
