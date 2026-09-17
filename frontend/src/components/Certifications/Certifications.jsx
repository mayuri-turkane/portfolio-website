import { motion } from "framer-motion";
import { FaCalendarAlt, FaBuilding, FaCheck } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { certifications } from "./CertificationsData";

const categoryColors = {
  "Python & Automation": "bg-cyan-500/10 text-cyan-400 border-cyan-400/30",
  "Data Science & AI": "bg-purple-500/10 text-purple-400 border-purple-400/30",
  "UI / UX Design": "bg-pink-500/10 text-pink-400 border-pink-400/30",
  "Web & Security": "bg-emerald-500/10 text-emerald-400 border-emerald-400/30",
  "Core Programming": "bg-amber-500/10 text-amber-400 border-amber-400/30",
};

const Certifications = () => {
  // Show first 2 featured certifications on home page
  const featuredCertifications = certifications.slice(0, 2);

  return (
    <section
      id="certifications"
      className="relative bg-[#050816] text-white pt-12 pb-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm font-semibold">
            Continuous Learning
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Featured <span className="text-cyan-400">Certifications</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg leading-8">
            Continuous learning is an essential part of my journey. These
            certifications showcase my commitment to expanding my skills in
            Python automation, Full Stack Development, UI/UX Design, Data Science, and
            Computer Science fundamentals.
          </p>
        </motion.div>

        {/* Featured Cards (2 items) */}
        <div className="grid gap-10 lg:grid-cols-2">
          {featuredCertifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col justify-between bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-3xl p-8 overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)]"
              >
                <div>
                  {/* Top Bar: Icon + Category Badge */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-3xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)]">
                      <Icon />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${
                          categoryColors[cert.category] || "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
                        }`}
                      >
                        {cert.category}
                      </span>

                      <span className="flex items-center gap-1.5 text-xs text-slate-400">
                        <FaCalendarAlt className="text-cyan-400 text-xs" />
                        {cert.year}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium mb-4">
                    <FaBuilding className="text-cyan-400" />
                    <span>{cert.issuer}</span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 leading-7 mb-6">
                    {cert.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {cert.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <FaCheck className="text-cyan-400 text-xs shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Explore More Certifications CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 text-center"
        >
          <Link
            to="/certifications"
            aria-label={`Explore all ${certifications.length} certifications and verified credentials`}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-teal-500 to-blue-600 font-bold text-white text-base shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_45px_rgba(34,211,238,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Explore More Certifications ({certifications.length}+)</span>
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:translate-x-1.5 transition-transform duration-300">
              <HiArrowRight className="text-white text-base" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
