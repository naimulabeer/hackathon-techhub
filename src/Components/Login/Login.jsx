import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

function Login() {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto md:w-[500px]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
          <form onClick={handleLogin}>
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
                name="email"
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
                name="password"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-slate-200 hover:bg-slate-600 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Log in
              </button>
              {/* <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Login With Google
              </button> */}
            </div>
            s
          </form>
          <div className="mt-6">
            <h1>
              Dont Have an Account? <Link to="/signup">Sign up</Link>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
