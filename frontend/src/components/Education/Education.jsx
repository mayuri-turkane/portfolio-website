const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "Pimpri Chinchwad University",
    duration: "2024 - 2026",
    description:
      "Completed MCA with a focus on Java, Full Stack Development, Database Management Systems, Software Engineering, and Web Technologies.",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    institute: "K. J. Somaiya College",
    duration: "2021 - 2024",
    description:
      "Built a strong foundation in Programming, Data Structures, Database Management Systems, Operating Systems, and Computer Networks.",
  },
];

const Education = () => {
  return (
    <section id="education" className="bg-[#050816] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Education
        </h2>

        <div className="space-y-8">

          {education.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl shadow-lg"
            >
              <p className="text-cyan-400 font-semibold">
                {item.duration}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {item.degree}
              </h3>

              <h4 className="text-gray-300 mt-1">
                {item.institute}
              </h4>

              <p className="text-gray-400 mt-4">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Education;