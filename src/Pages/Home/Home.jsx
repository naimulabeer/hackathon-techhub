import { Link } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Hackathon from "../../Components/Services/Hackathon";
import Support from "../../Components/Support/Support";

function Home() {
  return (
    <>
      <div className="mt-5 mb-10 relative flex justify-center">
        <img
          className="md:w-full"
          src="/hackathon.png"
          alt="hackathon"
          data-aos="fade-up"
        />
        <Link
          to="/signup"
          className="absolute bottom-4 text-white rounded-lg border-1 px-3 py-2 bg-slate-800"
          data-aos="fade-right"
        >
          Join our community
        </Link>
      </div>
      <Hackathon />
      <Blog />
      <Support />
    </>
  );
}

export default Home;
