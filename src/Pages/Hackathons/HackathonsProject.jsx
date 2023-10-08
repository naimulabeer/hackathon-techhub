import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HackathonsProject() {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Submitted to Hackathon TechHub", {
      position: "top-center",
      autoClose: 5000,
    });

    setTimeout(() => {
      navigate("/");
    }, 3000);

    setProjectName("");
    setProjectDescription("");
    setRepositoryLink("");
  };

  return (
    <div className="max-w-md mx-auto mt-8 mb-10 p-4 border rounded-lg shadow-lg bg-white">
      <ToastContainer />
      <h2 className="text-2xl font-semibold mb-4">
        Submit Your Hackathon Project
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="projectName" className="block font-medium">
            Project Name:
          </label>
          <input
            type="text"
            id="projectName"
            className="w-full p-2 border rounded-md"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="projectDescription" className="block font-medium">
            Project Description:
          </label>
          <textarea
            id="projectDescription"
            className="w-full p-2 border rounded-md"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="repositoryLink" className="block font-medium">
            GitHub Repository Link:
          </label>
          <input
            type="text"
            id="repositoryLink"
            className="w-full p-2 border rounded-md"
            value={repositoryLink}
            onChange={(e) => setRepositoryLink(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}

export default HackathonsProject;
