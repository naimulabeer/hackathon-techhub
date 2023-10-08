import { Link, NavLink } from "react-router-dom";
import "./navbar.styles.css";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";

function NavBar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  const links = (
    <nav id="sidebar" className="flex flex-col lg:flex-row lg:gap-10 gap-2">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/hackathons">Hackathons</NavLink>

      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );

  return (
    <div className=" md:font-bold px-2 py-2">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className=" items-center flex">
            <img className="w-12 md:w-20" src="/logo.png" alt="logo" />
            <h1 className="text-xs md:text-base lg:text-lg font-bold">
              Hackathon TechHub
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} alt="userphoto" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user?.displayName}</a>
                </li>

                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div id="sidebar" className=" md:w-1/2 flex gap-5">
              <NavLink to="/login">Log in</NavLink>
              <NavLink to="/signup">Sign up</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
