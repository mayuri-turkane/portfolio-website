import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Pimpri Chinchwad University",
    duration: "2024 – 2026",
    description:
      "Completed MCA with a strong focus on Full Stack Development, Java, Database Management Systems, Software Engineering, Web Technologies, and modern application development.",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    institute: "K. J. Somaiya College",
    duration: "2021 – 2024",
    description:
      "Built a strong foundation in Programming, Data Structures, Database Management Systems, Operating Systems, Computer Networks, and Problem Solving.",
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

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My academic journey has built a solid foundation in software
            development, problem-solving, and modern technologies that support
            my career as a Full Stack Developer.
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
                  {/* Duration */}
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-3">
                    <FaCalendarAlt />
                    {item.duration}
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