import { motion } from "framer-motion";
import {
  FaCertificate,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

const certifications = [
  {
    title: "Python Programming with Red Hat",
    issuer: "Red Hat",
    year: "2026",
    description:
      "Completed Red Hat's Python Programming (AD141 - RHA) training covering Python programming fundamentals, scripting, automation, and problem solving.",
  },
  {
    title: "Python Programming",
    issuer: "Skill India Digital Hub & Microsoft",
    year: "2026",
    description:
      "Completed a 40-hour Python Programming course covering core Python concepts, programming logic, functions, data structures, and real-world applications.",
  },
  {
    title: "Introduction to Data Science",
    issuer: "IBM • Coursera",
    year: "2025",
    description:
      "Learned Data Science fundamentals including Jupyter Notebook, SQL, Data Science methodology, databases, and analytical thinking.",
  },
  {
    title: "UI / UX Design Specialization",
    issuer: "California Institute of the Arts • Coursera",
    year: "2025",
    description:
      "Completed UI/UX Design specialization covering wireframing, prototyping, user research, visual hierarchy, and user-centered design principles.",
  },
  {
    title: "Web Technologies & Security",
    issuer: "Coursera",
    year: "2025",
    description:
      "Learned modern web technologies, Vue.js fundamentals, software security, data security, and secure web application development.",
  },
  {
    title: "Java Programming Certification",
    issuer: "Certification Course",
    year: "2024",
    description:
      "Covered Object-Oriented Programming, Collections Framework, Exception Handling, JDBC, Multithreading, and Core Java.",
  },
  {
    title: "C Programming Certification",
    issuer: "Certification Course",
    year: "2023",
    description:
      "Learned C programming fundamentals including functions, pointers, arrays, memory management, file handling, and problem solving.",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative bg-[#050816] py-24 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Certifications</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg leading-8">
            Continuous learning is an essential part of my journey. These
            certifications showcase my commitment to improving my skills in
            Full Stack Development, Python, UI/UX Design, Data Science, and
            Modern Web Technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5"></div>

              {/* Icon */}
              <div className="relative w-16 h-16 rounded-2xl bg-cyan-500 flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.5)] mb-6">
                <FaCertificate className="text-3xl text-white" />
              </div>

              {/* Title */}
              <h3 className="relative text-2xl font-bold leading-snug">
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="relative flex items-center gap-2 mt-4 text-gray-300">
                <FaBuilding className="text-cyan-400" />
                <span>{cert.issuer}</span>
              </div>

              {/* Year */}
              <div className="relative inline-flex items-center gap-2 mt-4 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 text-cyan-300 text-sm font-semibold">
                <FaCalendarAlt />
                {cert.year}
              </div>

              {/* Description */}
              <p className="relative text-gray-400 mt-6 leading-7">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;