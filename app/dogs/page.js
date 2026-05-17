export default async function Dogs() {
  const data = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const dog = await data.json();

  return (
    <>
      <h1>Dog of the Day</h1>
      <img src={dog.message} alt="Random Dog" />
    </>
  );
}
