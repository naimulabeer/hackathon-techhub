import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto md:w-[500px]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign up</h2>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-slate-200 hover:bg-slate-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Sign up
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign up With Google
            </button>
          </div>
          <div className="mt-6">
            <h1>
              Already Have an Account? <Link to="/login">Login</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
