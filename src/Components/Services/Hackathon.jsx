import { useLoaderData } from "react-router-dom";
import HackathonList from "./HackathonList";

function Hackathon() {
  const hackathons = useLoaderData();
  return (
    <>
      <div
        className=" text-3xl font-extrabold text-center py-4 mb-5"
        style={{
          backgroundImage: `url(/subtle-prism.svg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        Hackathons for you
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-2 px-4">
        {hackathons.map((hackathon) => (
          <HackathonList key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </>
  );
}

export default Hackathon;
