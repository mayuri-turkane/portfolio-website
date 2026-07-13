const About = () => {
  return (
    <section id="about" className="bg-[#050816] text-white py-20">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-14">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <img
              src="/profile.png"
              alt="Profile"
              className="w-80 rounded-3xl mx-auto shadow-xl"
            />
          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-bold mb-5">
              Hi, I'm Mayuri 👋
            </h3>

            <p className="text-gray-300 leading-8">
              I am an MCA graduate and Full Stack Developer with
              experience in Java, Spring Boot, React.js,
              Python, Flask and MySQL.
              I enjoy building responsive web applications,
              REST APIs and solving real-world problems.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">

              <div className="bg-slate-900 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">
                  10+
                </h4>
                <p>Projects</p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">
                  MCA
                </h4>
                <p>Graduate</p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">
                  Java
                </h4>
                <p>Backend</p>
              </div>

              <div className="bg-slate-900 p-5 rounded-xl">
                <h4 className="text-cyan-400 font-bold">
                  React
                </h4>
                <p>Frontend</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;