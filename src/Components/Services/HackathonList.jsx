import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function HackathonList({ hackathon }) {
  // eslint-disable-next-line react/prop-types
  const { id, name, image, price } = hackathon;
  return (
    <div className="flex bg-white border border-l-4 border-r-1 border-green-200 border-l-green-600 border-r-green-600 w-451 h-270">
      <div className="lg:w-64 lg:h-44 p-4">
        <img className="lg:w-full lg:h-full" src={image} alt="hackathons" />
      </div>
      <div className="flex flex-col justify-center p-4">
        <h1 className="lg:text-2xl font-semibold">{name}</h1>
        <span className="text-gray-600">
          <span className="font-bold">{price}</span> in prices
        </span>
        <Link
          to={`/hackathon/${id}`}
          className="mt-2 text-center  w-40 h-15  bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default HackathonList;
