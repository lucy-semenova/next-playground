export default async function Blog() {
  const blogResponse = await fetch("https://api.vercel.app/blog");
  const blog = await blogResponse.json();

  const categories = blog.map(entry => entry.category);

  const uniqueCategories = Array.from(new Set(categories));

  return (
    <>
      <h1 className="text-4xl font-bold">Blog page</h1>

      <ul>
        {uniqueCategories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </>
  );
}