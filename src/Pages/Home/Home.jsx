import Blog from "../../Components/Blog/Blog";
import Hackathon from "../../Components/Services/Hackathon";
import Support from "../../Components/Support/Support";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <>
      <div className="mt-5 mb-10 relative flex justify-center">
        <img src="/hackathon.png" alt="hackathon" />
        <button className="absolute bottom-4 text-white rounded-lg border-1 px-3 py-2 bg-slate-800">
          Join our community
        </button>
      </div>
      <Hackathon />
      <Blog />
      <Support />
      <Footer />
    </>
  );
}

export default Home;
