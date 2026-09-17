import { motion } from "framer-motion";
import { FaGithub, FaCheck } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { projects } from "./ProjectsData";

const categoryColors = {
  "Full Stack":
    "bg-cyan-500/10 text-cyan-400 border-cyan-400/30",
  "Web Application":
    "bg-orange-500/10 text-orange-400 border-orange-400/30",
  "AI & Computer Vision":
    "bg-purple-500/10 text-purple-400 border-purple-400/30",
  "Computer Vision":
    "bg-purple-500/10 text-purple-400 border-purple-400/30",
  "Mobile & AI":
    "bg-emerald-500/10 text-emerald-400 border-emerald-400/30",
  "Android":
    "bg-green-500/10 text-green-400 border-green-400/30",
  "Android Application":
    "bg-green-500/10 text-green-400 border-green-400/30",
};

const Projects = () => {
  // Only show first 2 featured projects on home page
  const featuredProjects = projects.slice(0, 2);

  return (
    <section
      id="projects"
      className="bg-[#050816] pt-12 pb-16 text-white"
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

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Featured Projects & Case Studies
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            A selection of projects demonstrating my experience in Full Stack
            Development, Computer Vision, Android Development, and modern web
            technologies.
          </p>
        </motion.div>

        {/* Featured Projects Grid (2 projects) */}
        <div className="grid gap-10 lg:grid-cols-2">
          {featuredProjects.map((project, index) => {
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
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.subtitle} by Mayuri Turkane`}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950/40">
                      <Icon className="text-6xl text-cyan-400/30" />
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent"></div>

                  <div className="absolute bottom-5 left-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                    <p className="text-cyan-300 mt-1 text-sm sm:text-base">
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
                        categoryColors[project.category] || "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
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
                    <h4 className="mb-4 font-semibold text-cyan-400 text-sm uppercase tracking-wider">
                      Core Features
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.slice(0, 4).map((feature) => (
                        <motion.div
                          key={feature}
                          whileHover={{ scale: 1.02 }}
                          className="rounded-xl bg-slate-800/90 border border-slate-700/50 p-3 text-sm transition-all duration-300 hover:bg-slate-700/80 hover:border-cyan-400/30"
                        >
                          <div className="flex items-center gap-2">
                            <FaCheck className="text-cyan-400 text-xs shrink-0" />
                            <span className="text-slate-200">{feature}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-8">
                    <h4 className="mb-4 font-semibold text-cyan-400 text-sm uppercase tracking-wider">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-2.5">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300"
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
                    rel="noopener noreferrer"
                    aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
                    className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-6 py-3 font-semibold transition-all duration-300 hover:bg-cyan-600 hover:shadow-[0_0_20px_#22d3ee] hover:scale-105 text-sm"
                  >
                    <FaGithub className="text-lg" />
                    View Source Code
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Link
            to="/projects"
            aria-label={`Explore all ${projects.length} projects on dedicated projects page`}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 font-bold text-white text-base shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Explore More Projects ({projects.length}+)</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:translate-x-1.5 transition-transform duration-300">
              <HiArrowRight className="text-white text-base" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;