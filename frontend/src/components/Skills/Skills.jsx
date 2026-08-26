import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaTools,
  FaBrain,
  FaCogs,
} from "react-icons/fa";

const skills = [
  {
    title: "Languages",
    icon: <FaCode />,
    items: ["Java", "Python", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & UI",
    icon: <FaLaptopCode />,
    items: ["React.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: <FaDatabase />,
    items: ["MySQL", "SQLite", "Supabase"],
  },
  {
    title: "Tools & IDEs",
    icon: <FaTools />,
    items: ["VS Code", "Android Studio", "Postman", "Eclipse", "Git", "GitHub"],
  },
  {
    title: "APIs & AI / ML",
    icon: <FaBrain />,
    items: ["Razorpay API", "Google Vision API", "OpenAI API", "OpenCV", "ML Integration", "YOLOv8", "ByteTrack"],
  },
  {
    title: "Concepts & Methodologies",
    icon: <FaCogs />,
    items: ["OOP", "REST APIs", "SDLC", "Agile/Scrum"],
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
            A comprehensive list of programming languages, frameworks, databases,
            AI/ML technologies, and tools aligned with my resume experience.
          </p>
        </motion.div>

        {/* Skills Grid */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {skills.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-800 bg-slate-900/80 p-7 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
            >

              {/* Card Header */}

              <div className="flex items-center gap-4 mb-6">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 text-2xl">
                  {category.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}

              <div className="flex flex-wrap gap-2.5">

                {category.items.map((skill) => (

                  <span
                    key={skill}
                    className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400 hover:bg-cyan-500/20"
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