export default async function Serverside() {
  const serversideResponse = await fetch("https://api.vercel.app/blog");
  const serverside = await serversideResponse.json();
 

  return (
    <ul>
  {serverside.slice(0, 10).map((article) => (
    <li key={article.id}>
      {article.title}
    </li>
  ))}
</ul>
  );
}
