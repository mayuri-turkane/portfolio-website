const projects = [
  {
    title: "CampusCrave",
    description:
      "A full-stack food ordering web application for college canteens with online ordering and group ordering features.",
    tech: "React.js • Flask • MySQL",
    github: "#",
    demo: "#",
  },
  {
    title: "Roommate Expense Splitter",
    description:
      "A web application to split expenses among roommates with balance tracking and payment management.",
    tech: "React.js • Java • SQLite",
    github: "#",
    demo: "#",
  },
  {
    title: "Human Detection & Counting",
    description:
      "Computer Vision project that detects and counts people in real time using OpenCV.",
    tech: "Python • OpenCV",
    github: "#",
    demo: "#",
  },
  {
    title: "Nutrition Analysis App",
    description:
      "Android application that analyzes food nutrition using image recognition.",
    tech: "Java • SQLite",
    github: "#",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#050816] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              <p className="text-sm text-yellow-300 mb-6">
                {project.tech}
              </p>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="bg-cyan-500 px-4 py-2 rounded-lg hover:bg-cyan-600"
                >
                  GitHub
                </a>

                <a
                  href={project.demo}
                  className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600"
                >
                  Live Demo
                </a>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;