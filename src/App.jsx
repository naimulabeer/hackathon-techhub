import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css"; // Import the CSS for AOS
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
