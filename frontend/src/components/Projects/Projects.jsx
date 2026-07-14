import { motion } from "framer-motion";
import { FaGithub, FaCheck } from "react-icons/fa";
import { projects } from "./projectsData";

const categoryColors = {
  "Full Stack":
    "bg-cyan-500/10 text-cyan-400 border-cyan-400/30",

  "Web Application":
    "bg-orange-500/10 text-orange-400 border-orange-400/30",

  "Computer Vision":
    "bg-purple-500/10 text-purple-400 border-purple-400/30",

  "Android":
    "bg-green-500/10 text-green-400 border-green-400/30",

  "Android Application":
    "bg-green-500/10 text-green-400 border-green-400/30",
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#050816] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            My Work
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Featured Projects & Case Studies
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            A selection of projects demonstrating my experience in Full Stack
            Development, Computer Vision, Android Development, and modern web
            technologies.
          </p>
        </motion.div>

        {/* Projects */}

        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
              >

                {/* Image */}

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

                  <div className="absolute bottom-5 left-6">
                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-cyan-300 mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                <div className="p-8">

                  {/* Top */}

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-3xl text-cyan-400">
                        <Icon />
                      </div>

                    </div>

                    <span
                      className={`rounded-full border px-4 py-2 text-xs font-semibold ${
                        categoryColors[project.category]
                      }`}
                    >
                      {project.category}
                    </span>

                  </div>

                  {/* Description */}

                  <p className="mt-6 text-slate-400 leading-7">
                    {project.description}
                  </p>

                  {/* Features */}

                  <div className="mt-8">
                    <h4 className="mb-4 font-semibold text-cyan-400">
                      Core Features
                    </h4>

                    <div className="grid grid-cols-2 gap-3">
                      {project.features.slice(0, 4).map((feature) => (
                        <motion.div
                          key={feature}
                          whileHover={{ scale: 1.04 }}
                          className="rounded-xl bg-slate-800 p-3 text-sm transition-all duration-300 hover:bg-slate-700"
                        >
                          <div className="flex items-center gap-2">
                            <FaCheck className="text-cyan-400 text-xs" />
                            <span>{feature}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}

                  <div className="mt-8">
                    <h4 className="mb-4 font-semibold text-cyan-400">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.08 }}
                          viewport={{ once: true }}
                          className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* GitHub Button */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_0_20px_#22d3ee] hover:scale-105"
                  >
                    <FaGithub className="text-xl" />
                    View Source Code
                  </a>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Projects;