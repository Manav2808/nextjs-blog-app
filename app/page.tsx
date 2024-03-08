import BlogCard from "@/components/blogCard/BlogCard";

export default async function Home() {
  let blogs: Array<any> = [];

  await fetch("http://localhost:3000/api/getallblogs", { next: { revalidate: 5 } })
  .then(async (response) => {
    if (!response.ok) {
      throw new Error("There was some error");
    }
    blogs = JSON.parse(await response.text()).blogs;
  })
  .catch(error => {
    console.error(error);
  });

  return (
    <div>
      {blogs.map((blog) => (
          <BlogCard key={blog} title={blog.title} author={blog.author} createdAt={blog.createdAt} />
        ))}
    </div>
  );
}
