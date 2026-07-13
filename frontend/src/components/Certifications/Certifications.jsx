const certifications = [
  {
    title: "Java Programming Certification",
    issuer: "Certification Course",
    year: "2024",
    description:
      "Completed Java programming certification covering Object-Oriented Programming, Collections, Exception Handling, JDBC, and Core Java concepts.",
  },
  {
    title: "C Programming Certification",
    issuer: "Certification Course",
    year: "2023",
    description:
      "Completed C programming certification focusing on programming fundamentals, problem-solving, functions, pointers, arrays, and memory management.",
  },
];

const Certification = () => {
  return (
    <section id="certifications" className="bg-[#0b1120] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-900 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-2xl font-bold text-cyan-400">
                {cert.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {cert.issuer}
              </p>

              <p className="text-yellow-300 mt-1">
                {cert.year}
              </p>

              <p className="text-gray-400 mt-4">
                {cert.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certification;