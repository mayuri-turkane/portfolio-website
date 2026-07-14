import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

import profile from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 flex items-center pt-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl"></div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
         <p className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 mb-6">
           👋 Hello, I'm
         </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Mayuri
            <span className="text-cyan-400"> Turkane</span>
          </h1>

           <div className="mt-6 h-16 text-2xl font-semibold text-slate-300 sm:text-3xl lg:text-4xl">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Java Developer",
                2000,
                "Backend Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />

            <div className="flex flex-wrap gap-3 mt-6">
         {[
            "Java",
            "JavaScript",
             "React.js",
            "Python",
             "MySQL",
          ].map((tech) => (
    <span
      key={tech}
      className="px-4 py-2 rounded-full bg-slate-800/80 border border-cyan-400/30 text-cyan-300 text-sm font-medium transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:-translate-y-1"
    >
      {tech}
    </span>
  ))}
</div>

          </div>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
  MCA graduate and Full Stack Developer specializing in
  <span className="text-cyan-400 font-medium"> Java</span>,
  <span className="text-cyan-400 font-medium"> JavaScript</span>,
  <span className="text-cyan-400 font-medium"> React.js</span>,
  <span className="text-cyan-400 font-medium"> Python</span>, and
  <span className="text-cyan-400 font-medium"> MySQL</span>. Passionate about building scalable web applications, REST APIs, and intuitive user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
             <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                🟢 Available for Full-Time Opportunities
             </span>
           </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
             className="group flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-[0_0_25px_rgba(34,211,238,0.45)]"
            >
              <FaDownload />
              Download Resume
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="group cursor-pointer rounded-xl border border-cyan-400 px-8 py-3 font-semibold text-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-slate-950 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
            >
              Contact Me
            </Link>

          </div>

          {/* Social Icons */}
          <div className="flex gap-6 mt-10 text-2xl text-white">

            <a
              href="https://github.com/mayuri-turkane"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -12, 0],
          }}
          transition={{
            opacity: { duration: 0.8 },
            x: { duration: 0.8 },
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-30"></div>

            {/* Image Border */}
            <div className="relative h-80 w-80 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-[5px] shadow-[0_0_60px_rgba(34,211,238,0.35)] md:h-96 md:w-96">

              <img
                src={profile}
                alt="Mayuri"
                className="w-full h-full rounded-full object-cover border-4 border-slate-900"
              />

            </div>

          </div>

        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <HiArrowDown className="text-cyan-400 text-3xl" />
      </motion.div>

    </section>
  );
};

export default Hero;