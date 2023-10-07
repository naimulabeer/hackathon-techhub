import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const { createUser } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photoUrl = form.get("photoUrl");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      return toast.error("🦄 Password should not be less than 6 character!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password should have atleast one capital character!",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    } else if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
      return toast.error(
        "Password should have atleast one special character!",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then()
          .catch();
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="flex h-screen bg-gray-200">
      <ToastContainer />
      <div className="m-auto md:w-[500px]">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Sign up</h2>
          <form onSubmit={handleSignup}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="name"
                placeholder="Name"
                name="name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="photoUrl"
              >
                Photo URL
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="photoUrl"
                type="photoUrl"
                placeholder="PhotoURL"
                name="photoUrl"
              />
            </div>
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
                Sign up
              </button>
              {/* <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign up With Google
            </button> */}
            </div>
          </form>
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
