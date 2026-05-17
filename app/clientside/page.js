'use client'
export default async function Clientside() {
  const clientsideResponse = await fetch("https://api.vercel.app/blog");
  const clientside = await clientsideResponse.json();
 

  return (
    <ul>
  {clientside.slice(0, 10).map((article) => (
    <li key={article.id}>
      {article.title}
    </li>
  ))}
</ul>
  );
}

  

 