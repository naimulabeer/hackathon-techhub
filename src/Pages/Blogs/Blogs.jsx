import { useLoaderData } from "react-router-dom";

function Blogs() {
  const blogs = useLoaderData();

  return (
    <div className="grid grid-cols-3 px-2">
      {blogs.map((blog) => (
        <div className="blog" key={blog.id}>
          <img src={blog.image} alt={blog.title} />
          <div className="blog-info">
            <span className="blog-type">{blog.type}</span>
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-description">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
