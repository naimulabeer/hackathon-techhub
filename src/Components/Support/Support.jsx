import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Support() {
  const [donated, setDonated] = useState(false);

  const handleDonate = () => {
    setDonated(true);

    toast.success("Donated Successfully", {
      position: "top-center",
      autoClose: 5000,
    });
  };
  return (
    <div
      className="bg-cover bg-center h-60 relative"
      style={{ backgroundImage: `url(/coolbackground.png)` }}
    >
      <div className="h-full bg-black bg-opacity-50 text-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Support Us</h1>
        <button
          className=" w-36 bg-slate-200 hover:bg-slate-700 hover:text-white text-cyan-500 font-bold py-2 px-4 rounded-sm focus:outline-none focus:shadow-outline"
          onClick={handleDonate}
          disabled={donated}
        >
          {donated ? "Donated!" : "Donate"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Support;
