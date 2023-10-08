import { Link, useLoaderData } from "react-router-dom";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiGithub,
} from "react-icons/si";

const trendingTags = [
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss3 /> },
  { name: "React", icon: <SiReact /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "GitHub", icon: <SiGithub /> },
];

function Hackathons() {
  const projects = useLoaderData();

  return (
    <div>
      <div
        className="bg-cover bg-center relative h-64"
        style={{ backgroundImage: 'url("/coolbackground.png")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col lg:flex-row gap-10 items-center justify-around text-white">
          <h1 className="text-4xl font-semibold mb-4 text-center">
            Explore Projects from Hackathons TechHub
          </h1>
          <Link
            to="/hackathons/project"
            className="bg-teal-500 w-1/8 h-fit hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded-sm transition duration-300"
          >
            Add Your Project
          </Link>
        </div>
      </div>

      <div className="container mx-auto mt-8 p-4">
        <h2 className="text-2xl font-semibold mb-4">Staff Picks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg border-2 border-solid border-slate-200 p-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
              <p className="text-sm italic">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto mt-8 mb-10 p-4">
        <h2 className="text-2xl font-medium mb-6">Trending Tags</h2>
        <div className="flex gap-10">
          {trendingTags.map((tag, index) => (
            <div key={index} className="flex items-center gap-1">
              <span className="mr-1">{tag.icon}</span>
              <span>{tag.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hackathons;
