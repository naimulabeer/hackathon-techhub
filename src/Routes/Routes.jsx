import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Hackathons from "../Pages/Hackathons/Hackathons";
import Blogs from "../Pages/Blogs/Blogs";
import About from "../Pages/About/About";
import HackathonDetails from "../Pages/HackathonDetails/HackathonDetails";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import HackathonsProject from "../Pages/Hackathons/HackathonsProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/hackathons",
        element: <Hackathons />,
        loader: () => fetch("/projects.json"),
      },
      {
        path: "/hackathons/project",
        element: (
          <PrivateRoute>
            <HackathonsProject />
          </PrivateRoute>
        ),
      },

      {
        path: "/hackathon/:id",
        element: (
          <PrivateRoute>
            <HackathonDetails />
          </PrivateRoute>
        ),
        loader: () => fetch("/data.json"),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoute>
            <Blogs />
          </PrivateRoute>
        ),
        loader: () => fetch("/blog.json"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default router;
