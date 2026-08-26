import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Logo from "../Logo/Logo";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Experience", to: "experience" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/95 shadow-lg backdrop-blur-xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500}>
          <Logo />
        </Link>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={600}
              offset={-80}
              spy={true}
              activeClass="!text-cyan-400 font-semibold"
              className="cursor-pointer text-gray-300 hover:text-cyan-400 transition relative group text-sm"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:block bg-cyan-500 hover:bg-cyan-600 hover:shadow-[0_0_20px_#22d3ee] px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300"
        >
          ⬇ Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#050816] border-t border-slate-800"
          >
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 text-gray-300 hover:text-cyan-400 cursor-pointer"
              >
                {item.name}
              </Link>
            ))}

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-3.5 text-cyan-400 font-semibold"
            >
              Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;