import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-4 bg-white rounded shadow-lg">
        <h1 className="text-3xl text-red-500 font-semibold mb-4">
          Oops! Error 404!!! Something went wrong.
        </h1>
        <p className="text-gray-700 mb-4">
          The page you are looking for could not be found
        </p>
        <Link
          to="/"
          className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        >
          Go back to the home page
        </Link>
      </div>
    </div>
  );
}

export default Error;
