import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaArrowLeft,
  FaCheck,
  FaTimes,
  FaBuilding,
  FaCalendarAlt,
  FaExternalLinkAlt,
  FaIdBadge,
  FaAward,
} from "react-icons/fa";
import { certifications } from "../components/Certifications/CertificationsData";
import Logo from "../components/Logo/Logo";
import Footer from "../components/Footer/Footer";
import SectionDivider from "../components/SectionDivider/SectionDivider";

const categories = [
  "All",
  "Python & Automation",
  "Data Science & AI",
  "UI / UX Design",
  "Web & Security",
  "Core Programming",
];

const categoryColors = {
  "Python & Automation": "bg-cyan-500/10 text-cyan-400 border-cyan-400/30",
  "Data Science & AI": "bg-purple-500/10 text-purple-400 border-purple-400/30",
  "UI / UX Design": "bg-pink-500/10 text-pink-400 border-pink-400/30",
  "Web & Security": "bg-emerald-500/10 text-emerald-400 border-emerald-400/30",
  "Core Programming": "bg-amber-500/10 text-amber-400 border-amber-400/30",
};

const AllCertifications = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalCert, setActiveModalCert] = useState(null);

  // Filter certifications by category and search query
  const filteredCertifications = useMemo(() => {
    return certifications.filter((cert) => {
      const matchesCategory =
        selectedCategory === "All" || cert.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.year.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        cert.skills.some((skill) => skill.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-950 text-white min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#050816]/95 backdrop-blur-xl border-b border-slate-800/80 py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" aria-label="Mayuri Turkane - Home" className="cursor-pointer">
            <Logo />
          </Link>

          <Link
            to="/"
            aria-label="Back to Home page"
            className="group flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative pt-16 pb-12 px-6 overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-4">
              <FaAward className="text-sm text-cyan-400" />
              Verified Credentials
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              All <span className="text-cyan-400">Certifications</span> & Courses
            </h1>

            <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Explore my verified professional certifications and academic courses across Python automation, Full Stack development, UI/UX design, Data Science, and Computer Science fundamentals.
            </p>
          </motion.div>

          {/* Search & Filters */}
          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-6">
            {/* Search Input */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search certifications by name, issuer, or skill"
                placeholder="Search by certificate name, issuer (Red Hat, IBM, Microsoft), or skill..."
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 pl-11 pr-10 py-3.5 text-sm sm:text-base text-white placeholder-slate-500 outline-none transition duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search query"
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition text-sm"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? certifications.length
                    : certifications.filter((c) => c.category === category).length;

                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105"
                        : "bg-slate-900 border border-slate-800 text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300"
                    }`}
                  >
                    {category} <span className="opacity-70 text-xs">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="px-6 py-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Results Counter */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80 text-sm text-slate-400">
            <span>
              Showing <strong className="text-cyan-400">{filteredCertifications.length}</strong> of {certifications.length} certifications
            </span>
            {searchQuery && (
              <span className="italic text-xs text-slate-500">
                Filtered by "{searchQuery}"
              </span>
            )}
          </div>

          {filteredCertifications.length === 0 ? (
            <div className="text-center py-20 rounded-3xl border border-slate-800 bg-slate-900/50 my-10">
              <p className="text-xl text-slate-300 font-semibold mb-2">No certifications found</p>
              <p className="text-slate-500 text-sm">Try searching for a different keyword or select "All" categories.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 px-6 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 hover:bg-cyan-500 hover:text-slate-950 text-sm font-semibold transition duration-300"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredCertifications.map((cert, index) => {
                const Icon = cert.icon;

                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm p-7 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                  >
                    <div>
                      {/* Top Bar: Icon + Category Badge */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-400/30 text-2xl text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                          <Icon />
                        </div>

                        <div className="flex flex-col items-end gap-2">
                          <span
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                              categoryColors[cert.category] || "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
                            }`}
                          >
                            {cert.category}
                          </span>

                          <span className="flex items-center gap-1.5 text-xs text-slate-400">
                            <FaCalendarAlt className="text-cyan-400 text-[11px]" />
                            {cert.year}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white leading-snug mb-2">
                        {cert.title}
                      </h3>

                      {/* Issuer */}
                      <div className="flex items-center gap-2 text-sm text-cyan-300 font-medium mb-4">
                        <FaBuilding className="text-cyan-400 text-xs shrink-0" />
                        <span>{cert.issuer}</span>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                        {cert.description}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-1.5 mb-5">
                        {cert.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                            <FaCheck className="text-cyan-400 text-[10px] shrink-0" />
                            <span className="truncate">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {cert.skills.slice(0, 4).map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-slate-700/60 bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                        {cert.skills.length > 4 && (
                          <span className="rounded-lg border border-slate-700/40 bg-slate-800/40 px-2 py-1 text-[11px] text-slate-400">
                            +{cert.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveModalCert(cert)}
                        aria-label={`View full credential details for ${cert.title}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                      >
                        <FaIdBadge className="text-sm" />
                        <span>View Details</span>
                      </button>

                      {cert.verifyUrl && (
                        <a
                          href={cert.verifyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Verify ${cert.title} on official portal (opens in new tab)`}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800 hover:border-cyan-400/50 hover:text-cyan-300 px-3.5 py-2.5 text-xs font-medium text-slate-300 transition duration-300"
                          title="Verify Credential"
                        >
                          <FaExternalLinkAlt className="text-[11px]" />
                          <span>Verify</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Details Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalCert(null)}
                aria-label="Close certification details modal"
                className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition duration-300"
              >
                <FaTimes />
              </button>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`inline-block rounded-full border px-3.5 py-1 text-xs font-semibold ${
                      categoryColors[activeModalCert.category] || "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
                    }`}
                  >
                    {activeModalCert.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <FaCalendarAlt className="text-cyan-400" />
                    {activeModalCert.year}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {activeModalCert.title}
                </h2>

                <div className="flex items-center gap-2 text-cyan-400 text-base font-semibold mt-2 mb-6">
                  <FaBuilding />
                  <span>{activeModalCert.issuer}</span>
                </div>

                {/* Credential ID badge */}
                {activeModalCert.credentialId && (
                  <div className="mb-6 inline-flex items-center gap-2 rounded-xl bg-slate-800/80 border border-slate-700/60 px-3.5 py-2 text-xs text-slate-300">
                    <span className="text-slate-400 font-semibold">Credential Code:</span>
                    <span className="font-mono text-cyan-300 font-bold">{activeModalCert.credentialId}</span>
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                    Course & Curriculum Overview
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {activeModalCert.description}
                  </p>
                </div>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                    Competencies & Highlights
                  </h4>
                  <div className="space-y-2">
                    {activeModalCert.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 p-3 text-xs sm:text-sm text-slate-200"
                      >
                        <FaCheck className="text-cyan-400 text-xs shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Verified */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                    Skills Verified
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
                  {activeModalCert.verifyUrl && (
                    <a
                      href={activeModalCert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Verify ${activeModalCert.title} on official portal (opens in new tab)`}
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Verify on Official Portal</span>
                    </a>
                  )}

                  <button
                    onClick={() => setActiveModalCert(null)}
                    aria-label="Close modal"
                    className="px-6 py-3 rounded-xl border border-slate-700 bg-slate-800 hover:border-slate-600 text-sm font-semibold text-slate-300 transition"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Section Divider & Footer */}
      <SectionDivider />
      <Footer />
    </div>
  );
};

export default AllCertifications;
