function About() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('/coolbackground.png')`,
      }}
    >
      <div className=" min-h-screen py-8">
        <div className="container mx-auto p-4">
          <section className="mb-8">
            <h1 className="text-3xl font-semibold mb-4">About Me</h1>
            <p className="text-slate-100">
              Hi, I am Naimul Haq Abeer. I am a passionate developer and tech
              enthusiast. I love exploring new technologies, solving complex
              problems, and turning ideas into reality. When I am not coding,
              you can find me hiking in the great outdoors or enjoying a good
              book.
            </p>
          </section>

          <section>
            <h1 className="text-3xl font-semibold mb-4">Hackathons</h1>
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h2 className="text-xl font-semibold mb-2">CodeMaster 2023</h2>
              <p className="text-gray-700">
                I participated in the CodeMaster 2023 hackathon and had an
                amazing experience. It was a thrilling coding marathon where I
                got to showcase my skills and compete against talented
                developers from around the world. I even won the grand prize of
                $5000!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">
                InnovateX Hackathon
              </h2>
              <p className="text-gray-700">
                InnovateX Hackathon was another incredible event I attended. It
                was an immersive offline competition that allowed me to
                collaborate with brilliant minds and build innovative solutions.
                I won $3000 and gained recognition for my ideas.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
