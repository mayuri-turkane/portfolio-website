import { motion } from "framer-motion";

const SectionDivider = ({ className = "" }) => {
  return (
    <div className={`relative w-full overflow-hidden flex items-center justify-center py-4 px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-20px" }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl flex items-center justify-center gap-3 select-none pointer-events-none"
      >
        {/* Left Tapered Line */}
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-cyan-400/30 to-cyan-400/80" />

        {/* Center Motif / Ornaments matching user screenshot */}
        <div className="flex items-center gap-2.5 text-cyan-400">
          {/* Left Diamond */}
          <span className="text-[10px] text-cyan-400/90 transform rotate-45 inline-block drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
            ◆
          </span>

          {/* Dot */}
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />

          {/* Center Plus / Cross */}
          <span className="text-base font-light text-cyan-200 drop-shadow-[0_0_10px_rgba(34,211,238,0.9)] px-0.5">
            +
          </span>

          {/* Dot */}
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/90 shadow-[0_0_6px_rgba(34,211,238,0.8)]" />

          {/* Right Diamond */}
          <span className="text-[10px] text-cyan-400/90 transform rotate-45 inline-block drop-shadow-[0_0_6px_rgba(34,211,238,0.7)]">
            ◆
          </span>
        </div>

        {/* Right Tapered Line */}
        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-cyan-400/30 to-cyan-400/80" />
      </motion.div>
    </div>
  );
};

export default SectionDivider;
