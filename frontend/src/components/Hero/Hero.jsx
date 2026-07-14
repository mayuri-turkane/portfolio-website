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
          <p className="text-cyan-400 text-xl font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
            Mayuri
            <span className="text-cyan-400"> Turkane</span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold text-slate-300 mt-6 h-16">
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
          </div>

          <p className="text-slate-400 mt-8 text-lg leading-8 max-w-xl">
            Passionate Full Stack Developer focused on building scalable,
            responsive and user-friendly applications using Java,
            Spring Boot, React.js, Python and MySQL.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold"
            >
              <FaDownload />
              Download Resume
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-3 rounded-xl font-semibold"
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
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:your-email@gmail.com"
              className="hover:text-cyan-400 transition"
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
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 p-2 shadow-2xl">

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