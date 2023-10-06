import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Root;
