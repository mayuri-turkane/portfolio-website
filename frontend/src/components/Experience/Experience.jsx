import { motion } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaRobot } from "react-icons/fa";

const experiences = [
  {
    role: "AI Native Developer",
    company: "Aug 2026 – Present",
    type: "Full-Time",
    tech: ["React.js", "Next.js", "JavaScript", "REST APIs", "AI Coding Tools (Claude & Claude Code)", "Git/GitHub"],
    points: [
      "Developing AI-native web applications using React.js and Next.js while ensuring responsive, scalable, and maintainable user experiences, along with building and integrating REST APIs to enable seamless frontend–backend communication for reliable end-to-end functionality.",
      "Leveraging AI-assisted development tools like Claude and Claude Code to accelerate coding, debugging, refactoring, and feature development, while collaborating via Git/GitHub and following clean code practices.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative bg-[#050816] text-white py-24 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Work Experience
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            Hands-on professional background building AI-native applications, web platforms, and RESTful API integrations.
          </p>
        </motion.div>

        {/* Experience List */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-3xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 text-xl">
                      <FaRobot />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-cyan-400 text-sm font-semibold bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/20 w-fit">
                  <FaCalendarAlt />
                  {exp.company}
                </div>
              </div>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                {exp.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-slate-800 border border-slate-700 px-3.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Bullet points */}
              <ul className="space-y-3">
                {exp.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-base leading-relaxed">
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
