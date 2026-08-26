import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Pimpri Chinchwad University, Pune",
    duration: "2024 – 2026",
    score: "CGPA: 8.54 / 10",
    description:
      "Specialized in Full Stack Development, RESTful API integrations, AI-native application workflows, and modern web software engineering.",
  },
  {
    degree: "Bachelor of Computer Science (BCS)",
    institute: "K. J. Somaiya College, Kopargaon, Maharashtra",
    duration: "2021 – 2024",
    score: "CGPA: 8.38 / 10",
    description:
      "Built a strong foundation in Computer Science, Data Structures, OOP principles, Database Management Systems, and Software Development.",
  },
  {
    degree: "Class XII – HSC (Science)",
    institute: "Shri Saibaba Junior College, Shirdi, Maharashtra",
    duration: "2020 – 2021",
    score: "Percentage: 88.17%",
    description:
      "Completed Higher Secondary Certificate with a focus on Higher Mathematics, Physics, and Science fundamentals.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative bg-[#050816] text-white py-24 overflow-hidden"
    >
      {/* Background Blur */}
      <div className="absolute top-24 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-10 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">
            My academic journey has built a solid foundation in software engineering, problem-solving, and modern technologies.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 w-1 h-full bg-gradient-to-b from-cyan-400 via-cyan-500 to-blue-500 rounded-full"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative flex items-start gap-6"
              >
                {/* Timeline Icon */}
                <div className="hidden md:flex w-16 h-16 rounded-full bg-cyan-500 items-center justify-center shadow-[0_0_20px_#22d3ee] flex-shrink-0 z-10">
                  <FaGraduationCap className="text-2xl text-white" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                  }}
                  className="flex-1 bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    {/* Duration */}
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <FaCalendarAlt />
                      {item.duration}
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-1.5 text-xs font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 px-3 py-1 rounded-full">
                      <FaAward />
                      {item.score}
                    </div>
                  </div>

                  {/* Degree */}
                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  {/* University */}
                  <div className="flex items-center gap-2 text-gray-300 mt-3">
                    <FaUniversity className="text-cyan-400" />
                    <span>{item.institute}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mt-5 leading-7">
                    {item.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;