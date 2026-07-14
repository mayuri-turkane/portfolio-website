import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = ({ project, onBack }) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -80 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button */}

      <button
        onClick={onBack}
        className="mb-10 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
      >
        <HiArrowLeft />
        Back to Projects
      </button>

      {/* Hero */}

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">

        <img
          src={project.image}
          alt={project.title}
          className="h-[350px] w-full object-cover"
        />

        <div className="p-8">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
            {project.category}
          </span>

          <h2 className="mt-6 text-5xl font-bold">

            {project.title}

          </h2>

          <p className="mt-4 text-xl text-slate-400">

            {project.subtitle}

          </p>

        </div>

      </div>

      {/* About */}

      <div className="mt-14">

        <h3 className="text-3xl font-bold mb-5">

          About Project

        </h3>

        <p className="leading-8 text-slate-400">

          {project.description}

        </p>

      </div>

      {/* Features */}

      <div className="mt-16">

        <h3 className="text-3xl font-bold mb-8">

          Core Features

        </h3>

        <div className="grid md:grid-cols-2 gap-6">

          {project.features.map((feature) => (

            <div
              key={feature}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
            >
              ✅ {feature}
            </div>

          ))}

        </div>

      </div>

      {/* Technologies */}

      <div className="mt-16">

        <h3 className="text-3xl font-bold mb-8">

          Technologies Used

        </h3>

        <div className="flex flex-wrap gap-4">

          {project.technologies.map((tech) => (

            <span
              key={tech}
              className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-cyan-300"
            >
              {tech}
            </span>

          ))}

        </div>

      </div>

      {/* GitHub */}

      <div className="mt-16">

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-8 py-4 font-semibold transition hover:bg-cyan-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
        >
          <FaGithub />

          View Source Code

        </a>

      </div>

    </motion.div>
  );
};

export default ProjectDetails;