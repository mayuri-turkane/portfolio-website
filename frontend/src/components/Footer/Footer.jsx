import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
  FaCircle,
  FaLaptopCode,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const commands = [
  "> whoami",
  "Mayuri Turkane",
  "",
  "> role",
  "Full Stack Developer",
  "",
  "> currently",
  "🟢 Open for Opportunities",
  "",
  "> tech_stack",
  "React.js",
  "Java",
  "Python",
  "Flask",
  "MySQL",
  "Git",
];

const Footer = () => {
  const year = new Date().getFullYear();

  const [displayed, setDisplayed] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= commands.length) return;

    const timer = setTimeout(() => {
      setDisplayed((prev) => [...prev, commands[index]]);
      setIndex(index + 1);
    }, 220);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <footer className="relative overflow-hidden bg-[#030712] text-white pt-24">

      {/* Animated Background */}

      <div className="absolute inset-0">

        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="absolute -left-20 top-0 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 70, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
          }}
          className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[120px]"
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          viewport={{ once:true }}
          transition={{ duration:.8 }}
          className="text-center mb-16"
        >

          <span className="text-cyan-400 uppercase tracking-[6px] text-sm">
            Thanks For Visiting
          </span>

          <h2 className="text-5xl font-black mt-5">
            Let's Build Something
            <span className="text-cyan-400"> Amazing.</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto leading-8">
            Whether you have an idea, an internship opportunity,
            or simply want to connect, my inbox is always open.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* TERMINAL */}

          <motion.div
            initial={{ opacity:0,x:-80 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
            className="rounded-3xl overflow-hidden border border-cyan-500/20 bg-[#0b1220] shadow-[0_0_60px_rgba(34,211,238,.08)]"
          >

            {/* Terminal Header */}

            <div className="flex items-center gap-3 bg-[#111827] px-5 py-4">

              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>

              <span className="ml-4 text-gray-400 text-sm">
                portfolio_terminal.sh
              </span>

            </div>

            <div className="p-8 font-mono text-sm leading-8 min-h-[420px]">

              {displayed.map((line, i) => (

                <motion.div
                  key={i}
                  initial={{ opacity:0 }}
                  animate={{ opacity:1 }}
                >

                  {line}

                </motion.div>

              ))}

              <motion.span

                animate={{ opacity:[1,0,1] }}

                transition={{
                  repeat:Infinity,
                  duration:1
                }}

                className="text-cyan-400"

              >

                █

              </motion.span>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity:0,x:80 }}
            whileInView={{ opacity:1,x:0 }}
            viewport={{ once:true }}
            transition={{ duration:.8 }}
          >

            <div className="grid grid-cols-2 gap-5">

              <motion.div
                whileHover={{
                  y:-8,
                  scale:1.03
                }}
                className="rounded-2xl bg-slate-900 border border-slate-700 p-6"
              >

                <FaLaptopCode
                  className="text-cyan-400 text-3xl mb-4"
                />

                <h3 className="text-4xl font-black">
                  10+
                </h3>

                <p className="text-gray-400 mt-2">
                  Projects Built
                </p>

              </motion.div>

              <motion.div
                whileHover={{
                  y:-8,
                  scale:1.03
                }}
                className="rounded-2xl bg-slate-900 border border-slate-700 p-6"
              >

                <FaCode
                  className="text-cyan-400 text-3xl mb-4"
                />

                <h3 className="text-4xl font-black">
                  15+
                </h3>

                <p className="text-gray-400 mt-2">
                  Technologies
                </p>

              </motion.div>
                            <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-2xl bg-slate-900 border border-slate-700 p-6"
              >
                <FaRocket className="text-cyan-400 text-3xl mb-4" />

                <h3 className="text-4xl font-black">∞</h3>

                <p className="text-gray-400 mt-2">
                  Cups of Coffee
                </p>
              </motion.div>

              <motion.div
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-2xl bg-slate-900 border border-slate-700 p-6"
              >
                <FaCircle className="text-green-400 text-sm mb-5 animate-pulse" />

                <h3 className="text-2xl font-bold">
                  Available
                </h3>

                <p className="text-gray-400 mt-2">
                  Open for Full-Time, Internship & Freelance
                </p>
              </motion.div>

            </div>

            {/* Quote */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: .3 }}
              viewport={{ once: true }}
              className="mt-10 rounded-3xl border border-cyan-500/20 bg-slate-900 p-8"
            >
              <h3 className="text-2xl font-bold mb-5">
                Philosophy
              </h3>

              <p className="text-gray-400 leading-8 italic text-lg">
                "I enjoy transforming ideas into fast, modern and user-friendly
                web applications. Every project is an opportunity to learn,
                improve and build something meaningful."
              </p>
            </motion.div>

            {/* Social */}

            <div className="flex gap-5 mt-10">

              <motion.a
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                href="https://github.com/mayuri-turkane"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500 transition"
              >
                <FaGithub size={28} />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.1,
                  rotate: -8,
                }}
                href="https://www.linkedin.com/in/mayuri-turkane-39954532b"
                target="_blank"
                rel="noreferrer"
                className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500 transition"
              >
                <FaLinkedin size={28} />
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.1,
                  rotate: 8,
                }}
                href="mailto:mayuri.turakane12@gmail.com"
                className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-500 transition"
              >
                <FaEnvelope size={26} />
              </motion.a>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-20 pt-10 pb-12 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">
            © {year} Designed & Developed by
            <span className="text-cyan-400 font-semibold">
              {" "}Mayuri Turkane
            </span>
          </p>

          <p className="text-gray-500 text-sm">
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>

      {/* Back To Top */}

      <Link
        to="home"
        smooth={true}
        duration={600}
        className="fixed bottom-8 right-8 z-50 cursor-pointer"
      >
        <motion.div
          whileHover={{
            scale: 1.15,
            y: -5,
          }}
          whileTap={{
            scale: .9,
          }}
          className="w-14 h-14 rounded-full bg-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(34,211,238,.5)]"
        >
          <FaArrowUp />
        </motion.div>
      </Link>

    </footer>
  );
};

export default Footer;