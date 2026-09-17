import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaSearch,
  FaArrowLeft,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import { projects } from "../components/Projects/ProjectsData";
import Logo from "../components/Logo/Logo";
import Footer from "../components/Footer/Footer";
import SectionDivider from "../components/SectionDivider/SectionDivider";

const categories = [
  "All",
  "Full Stack",
  "AI & Computer Vision",
  "Web Application",
  "Mobile & AI",
];

const categoryColors = {
  "Full Stack": "bg-cyan-500/10 text-cyan-400 border-cyan-400/30",
  "Web Application": "bg-orange-500/10 text-orange-400 border-orange-400/30",
  "AI & Computer Vision": "bg-purple-500/10 text-purple-400 border-purple-400/30",
  "Mobile & AI": "bg-emerald-500/10 text-emerald-400 border-emerald-400/30",
};

const AllProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.subtitle.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="bg-slate-950 text-white min-h-screen flex flex-col">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#050816]/95 backdrop-blur-xl border-b border-slate-800/80 py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="cursor-pointer">
            <Logo />
          </Link>

          <Link
            to="/"
            className="group flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500 hover:text-slate-950 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
          >
            <FaArrowLeft className="text-xs transition-transform duration-300 group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative pt-16 pb-12 px-6 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 mb-4">
              Explore All Work
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-2">
              All <span className="text-cyan-400">Projects</span> & Repositories
            </h1>

            <p className="mt-5 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
              Browse through my full collection of full-stack web applications, AI & Computer Vision systems, Android apps, and interactive dashboards sourced from GitHub.
            </p>
          </motion.div>

          {/* Search & Category Filter Controls */}
          <div className="mt-10 max-w-3xl mx-auto flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by project name, tech (React, Python, Supabase), or keywords..."
                className="w-full rounded-2xl border border-slate-800 bg-slate-900/90 pl-11 pr-10 py-3.5 text-sm sm:text-base text-white placeholder-slate-500 outline-none transition duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition text-sm"
                >
                  <FaTimes />
                </button>
              )}
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                const count =
                  category === "All"
                    ? projects.length
                    : projects.filter((p) => p.category === category).length;

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

      {/* Projects Grid Section */}
      <section className="px-6 py-8 flex-1">
        <div className="max-w-7xl mx-auto">
          {/* Results Counter */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800/80 text-sm text-slate-400">
            <span>
              Showing <strong className="text-cyan-400">{filteredProjects.length}</strong> of {projects.length} projects
            </span>
            {searchQuery && (
              <span className="italic text-xs text-slate-500">
                Filtered by "{searchQuery}"
              </span>
            )}
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 rounded-3xl border border-slate-800 bg-slate-900/50 my-10">
              <p className="text-xl text-slate-300 font-semibold mb-2">No projects found</p>
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
              {filteredProjects.map((project, index) => {
                const Icon = project.icon;

                return (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    whileHover={{ y: -6 }}
                    className="flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                  >
                    {/* Image / Header Banner */}
                    <div className="relative h-48 overflow-hidden bg-slate-950 shrink-0">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-full w-full object-cover transition duration-500 hover:scale-105"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-850 to-cyan-950/30">
                          <Icon className="text-6xl text-cyan-400/25" />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                      {/* Category Badge */}
                      <span
                        className={`absolute top-4 right-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                          categoryColors[project.category] || "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
                        }`}
                      >
                        {project.category}
                      </span>

                      {/* Title & Icon Overlay */}
                      <div className="absolute bottom-4 left-5 right-5 flex items-end gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/20 text-xl text-cyan-300 border border-cyan-400/30">
                          <Icon />
                        </div>
                        <div className="overflow-hidden">
                          <h3 className="text-xl font-bold text-white truncate">
                            {project.title}
                          </h3>
                          <p className="text-cyan-300 text-xs truncate">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        {/* Description */}
                        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-5">
                          {project.description}
                        </p>

                        {/* Top Features */}
                        <div className="space-y-1.5 mb-5">
                          {project.features.slice(0, 3).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                              <FaCheck className="text-cyan-400 text-[10px] shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="rounded-lg border border-slate-700/60 bg-slate-800/80 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="rounded-lg border border-slate-700/40 bg-slate-800/40 px-2 py-1 text-[11px] text-slate-400">
                              +{project.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 px-4 py-2.5 text-xs font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                        >
                          <FaGithub className="text-sm" />
                          <span>Code</span>
                        </a>

                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400 hover:text-slate-950 px-4 py-2.5 text-xs font-semibold text-cyan-300 transition-all duration-300"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            <span>Live</span>
                          </a>
                        )}

                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="px-3 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:border-slate-600 text-xs font-medium text-slate-300 transition duration-300"
                          title="View Details"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {activeModalProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-6 right-6 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition duration-300"
              >
                <FaTimes />
              </button>

              {/* Modal Content */}
              <div>
                <span
                  className={`inline-block rounded-full border px-3.5 py-1 text-xs font-semibold mb-3 ${
                    categoryColors[activeModalProject.category] || "bg-cyan-500/10 text-cyan-400 border-cyan-400/30"
                  }`}
                >
                  {activeModalProject.category}
                </span>

                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  {activeModalProject.title}
                </h2>
                <p className="text-cyan-400 text-sm sm:text-base mt-1 mb-6">
                  {activeModalProject.subtitle}
                </p>

                {activeModalProject.image && (
                  <div className="relative h-60 rounded-2xl overflow-hidden mb-6 border border-slate-800">
                    <img
                      src={activeModalProject.image}
                      alt={activeModalProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-2">
                    About the Project
                  </h4>
                  <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                    {activeModalProject.description}
                  </p>
                </div>

                {/* Core Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                    Key Features
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {activeModalProject.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded-xl bg-slate-800/80 border border-slate-700/50 p-3 text-xs sm:text-sm text-slate-200"
                      >
                        <FaCheck className="text-cyan-400 text-xs mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
                  <a
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-600 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  >
                    <FaGithub className="text-base" />
                    <span>View GitHub Repository</span>
                  </a>

                  {activeModalProject.live && (
                    <a
                      href={activeModalProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-cyan-400 px-6 py-3 text-sm font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                      <FaExternalLinkAlt className="text-xs" />
                      <span>Live Demo</span>
                    </a>
                  )}
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

export default AllProjects;