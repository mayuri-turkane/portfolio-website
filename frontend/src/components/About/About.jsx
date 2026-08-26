import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaRobot,
  FaReact,
  FaBriefcase,
} from "react-icons/fa";

const highlights = [
  {
    icon: <FaRobot />,
    title: "AI Native",
    subtitle: "Developer",
  },
  {
    icon: <FaReact />,
    title: "Full Stack",
    subtitle: "React & Next.js",
  },
  {
    icon: <FaLaptopCode />,
    title: "10+",
    subtitle: "Projects Built",
  },
  {
    icon: <FaBriefcase />,
    title: "Open",
    subtitle: "To Work",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#050816] py-24 text-white"
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
            About Me
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Building AI-Native & Scalable Web Applications
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 leading-8">
            Passionate about creating modern, responsive, and scalable web
            applications while integrating AI capabilities and production-ready
            application workflows.
          </p>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold leading-tight">
              Turning ideas into{" "}
              <span className="text-cyan-400">
                scalable digital solutions.
              </span>
            </h3>

            <p className="mt-8 text-slate-400 leading-8">
              I'm{" "}
              <span className="font-semibold text-white">
                Mayuri Turkane
              </span>
              , an AI-focused Full Stack Developer and MCA graduate with hands-on experience building modern web applications, RESTful APIs, and AI-integrated solutions.
            </p>

            <p className="mt-6 text-slate-400 leading-8">
              Skilled in <span className="text-cyan-300 font-medium">React.js</span>, <span className="text-cyan-300 font-medium">Next.js</span>, <span className="text-cyan-300 font-medium">Supabase</span>, <span className="text-cyan-300 font-medium">JavaScript</span>, <span className="text-cyan-300 font-medium">Python</span>, and <span className="text-cyan-300 font-medium">MySQL</span>, with experience integrating APIs, AI capabilities, and production-ready application workflows. I possess strong problem-solving skills, rapid learning capability, and AI-assisted development expertise focusing on building scalable and user-centric web products.
            </p>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
              >
                <div className="text-3xl text-cyan-400 mb-4">
                  {item.icon}
                </div>

                <h4 className="text-2xl font-bold">
                  {item.title}
                </h4>

                <p className="mt-2 text-slate-400">
                  {item.subtitle}
                </p>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;