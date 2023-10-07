import { useLoaderData, useParams } from "react-router-dom";
import { GoGlobe, GoHome } from "react-icons/go";

function HackathonDetails() {
  const hackathons = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const hackathon = hackathons.find((hackathon) => hackathon.id === idInt);

  if (!hackathon) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col md:flex-row mt-10 md:px-20 px-5 gap-10">
      <div className="w-1/2 pr-8">
        <img src={hackathon.image} alt="hackathon" className="mb-4" />
        <h1 className="md:text-xl sm:text-xs font-bold">{hackathon.name}</h1>
        <p className="text-sm">{hackathon.shortDescription}</p>
      </div>
      <div className="md:w-1/2 font-bold flex flex-col gap-5">
        <h2 className="md:text-lg sm:text-sm font-semibold">Event Details</h2>
        <div>
          <span>Schedule: {hackathon.schedule}</span>
        </div>

        <div className="w-1/2 h-px bg-slate-300 opacity-70 mt-2 mb-2"></div>
        <div className="flex gap-5 items-center">
          <GoGlobe />
          <span className="mr-2">{hackathon.type}</span>

          <GoHome />
          <span>Public</span>
        </div>
        <div className="w-1/2 h-px bg-slate-300 opacity-70 mt-2 mb-2"></div>
        <div className="flex gap-12">
          <span>{hackathon.price} in prizes</span>
          <span>{hackathon.participants} participants</span>
        </div>

        <p className="mt-4">Managed by Hackathon TechHub</p>
        <button className="mt-4 w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Join Hackathon
        </button>
      </div>
    </div>
  );
}

export default HackathonDetails;
