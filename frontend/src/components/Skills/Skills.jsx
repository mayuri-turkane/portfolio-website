const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"],
  Backend: ["Java", "Python", "Flask"],
  Database: ["MySQL","SQLite"],
  Tools: ["Git", "GitHub", "VS Code", "Postman"],
};

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0b1120] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-slate-900 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-cyan-400 mb-4">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;