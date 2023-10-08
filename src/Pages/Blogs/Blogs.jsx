import { useLoaderData } from "react-router-dom";

function Blogs() {
  const blogs = useLoaderData();

  return (
    <>
      <div
        className=" text-3xl font-extrabold text-center py-4 mb-5"
        style={{
          backgroundImage: `url(/cool-background2.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        Recent Blog Posts
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-5">
        {blogs.map((blog) => (
          <div className="border-1 border-teal-300 " key={blog.id}>
            <img className="w-full h-3/5" src={blog.image} alt={blog.title} />
            <div className="flex flex-col gap-1 mt-2">
              <span className="bg-teal-500 px-2 py-2 text-white text-sm border-1 w-fit rounded-md">
                {blog.type}
              </span>
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="mb-3">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Blogs;
