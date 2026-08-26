import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 cursor-pointer group select-none"
    >
      {/* Sleek Futuristic Emblem Icon */}
      <div className="relative flex items-center justify-center">
        {/* Glow Aura */}
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 blur-sm opacity-60 group-hover:opacity-100 transition duration-300"></div>

        {/* Glass Hexagon / Shield Badge */}
        <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-[#090d16] border border-cyan-400/40 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)] group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
          <span className="font-mono font-black text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-tr from-cyan-300 to-white group-hover:from-white group-hover:to-cyan-300 transition">
            &lt;M/&gt;
          </span>
        </div>
      </div>

      {/* Clean Brand Name */}
      <div className="flex items-center">
        <span className="text-2xl font-extrabold tracking-tight text-white group-hover:text-cyan-100 transition duration-300">
          Mayuri
        </span>
        <span className="text-2xl font-black text-cyan-400 ml-0.5 group-hover:animate-pulse">
          .
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
