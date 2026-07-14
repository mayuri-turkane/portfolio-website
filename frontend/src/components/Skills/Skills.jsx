import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

const skills = [
  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    items: ["Java", "Python", "Flask", "REST APIs"],
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    items: ["MySQL", "SQLite"],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    items: ["Git", "GitHub", "VS Code", "Postman"],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0b1120] py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Technical Skills
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Technologies I Work With
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            A collection of technologies, frameworks, databases, and
            development tools that I use to build modern, scalable,
            and responsive applications.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
            >

              {/* Card Header */}

              <div className="flex items-center gap-4 mb-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 text-2xl">
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-3">

                {category.items.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-500/20"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;