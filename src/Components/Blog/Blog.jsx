import { Link } from "react-router-dom";

function Blog() {
  return (
    <div
      className="bg-cover bg-center relative mt-5 mb-5"
      style={{ backgroundImage: `url(/background.png)` }}
    >
      <div className=" h-screen text-white flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center space-x-4">
          <img
            src="/background1.jpg"
            alt="Image 1"
            className="w-1/4 max-h-64 rounded-md"
            data-aos="zoom-in-right"
          />
          <img
            src="/background2.jpg"
            alt="Image 2"
            className="w-1/4 max-h-64 rounded-md"
            data-aos="zoom-in-down"
          />
          <img
            src="/background3.jpg"
            alt="Image 3"
            className="w-1/4 max-h-64 rounded-md"
            data-aos="zoom-in-left"
          />
        </div>
        <Link
          to="/blogs"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-lg focus:outline-none focus:shadow-outline"
        >
          Visit More in Blogs
        </Link>
      </div>
    </div>
  );
}

export default Blog;
