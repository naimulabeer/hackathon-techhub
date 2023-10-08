import { Outlet } from "react-router-dom";
import NavBar from "../Pages/NavBar/NavBar";
import Footer from "../Pages/Footer/Footer";

function Root() {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
