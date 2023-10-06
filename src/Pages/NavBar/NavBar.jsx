import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const links = (
    <nav id="sidebar" className="flex flex-col lg:flex-row lg:gap-10 gap-2">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/hackathons">Hackathons</NavLink>

      <NavLink to="/blogs">Blogs</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );

  return (
    <div>
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
          <Link to="/" className="w-20">
            <img src="logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <div className=" w-1/2 flex ">
            <Link>Log in</Link>
            <Link>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
