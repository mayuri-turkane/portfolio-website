import { motion } from "framer-motion";

const Logo = ({ size = "normal" }) => {
  const isSmall = size === "small";

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex flex-col items-center justify-center cursor-pointer group select-none relative px-1 py-0.5"
    >
      {/* Background Soft Glow on Hover */}
      <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/0 via-cyan-400/15 to-cyan-500/0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Signature Name */}
      <div className="relative flex items-center">
        <span
          className={`font-signature tracking-wide whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 drop-shadow-[0_2px_10px_rgba(34,211,238,0.35)] group-hover:drop-shadow-[0_2px_16px_rgba(34,211,238,0.7)] transition-all duration-300 ${
            isSmall
              ? "text-xl sm:text-2xl leading-none"
              : "text-2xl sm:text-[1.75rem] leading-none"
          }`}
          style={{
            fontFamily: "'Great Vibes', 'Alex Brush', 'Sacramento', cursive",
          }}
        >
          Mayuri Turkane
        </span>
      </div>

      {/* Signature Flourish Swash / Underline */}
      <div className={`w-[92%] relative ${isSmall ? "-mt-2" : "-mt-2.5"}`}>
        <svg
          viewBox="0 0 240 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto overflow-visible"
        >
          <defs>
            <linearGradient id="cyan-signature-swash" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
              <stop offset="30%" stopColor="#A5F3FC" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#22D3EE" stopOpacity="1" />
              <stop offset="100%" stopColor="#0891B2" stopOpacity="0.2" />
            </linearGradient>
            <filter id="cyan-swash-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="0.8" result="glow" />
              <feComposite in="SourceGraphic" in2="glow" operator="over" />
            </filter>
          </defs>

          {/* Underline Flourish Path */}
          <path
            d="M 6 4.5 C 38 8.5, 95 10, 155 7 C 182 5.5, 208 4, 222 5.5 C 225 6, 220 7.2, 206 8.5 C 164 11.5, 90 12, 10 7 C 6.5 6.5, 5.5 5.2, 6 4.5 Z"
            fill="url(#cyan-signature-swash)"
            filter="url(#cyan-swash-glow)"
            className="transition-all duration-300 group-hover:brightness-125"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default Logo;
