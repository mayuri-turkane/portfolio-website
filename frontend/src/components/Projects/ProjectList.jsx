import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const categoryColors = {
  "Full Stack": "bg-cyan-500/10 text-cyan-400 border-cyan-400/30",
  "Web Application": "bg-orange-500/10 text-orange-400 border-orange-400/30",
  "Computer Vision": "bg-purple-500/10 text-purple-400 border-purple-400/30",
  "Android": "bg-green-500/10 text-green-400 border-green-400/30",
  "Android Application": "bg-green-500/10 text-green-400 border-green-400/30",
};

const ProjectList = ({ projects, onSelect }) => {
  return (
    <div className="space-y-8">
      {projects.map((project, index) => {
        const Icon = project.icon;
        const reverse = index % 2 !== 0;

        return (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            onClick={() => onSelect(project)}
            className="group cursor-pointer rounded-3xl border border-slate-800 bg-slate-900/80 p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
          >
            <div
              className={`flex flex-col md:flex-row ${
                reverse ? "md:flex-row-reverse" : ""
              } justify-between items-center gap-8`}
            >
              {/* Icon */}

              <motion.div
                whileHover={{ rotate: 10, scale: 1.08 }}
                className="flex h-24 w-24 items-center justify-center rounded-3xl bg-cyan-500/10 text-5xl text-cyan-400 shadow-lg"
              >
                <Icon />
              </motion.div>

              {/* Content */}

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold transition group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mt-3 text-lg text-slate-400">
                  {project.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                  <span
                    className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                      categoryColors[project.category]
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Arrow */}

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-2 text-cyan-400 font-semibold"
              >
                <span>Explore</span>
                <HiArrowRight className="text-2xl" />
              </motion.div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectList;