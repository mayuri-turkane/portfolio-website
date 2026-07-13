import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/images/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}

        <div>

          <p className="text-cyan-400 text-xl font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Mayuri
            <span className="text-cyan-400"> Turkane</span>
          </h1>

          <div className="text-2xl md:text-4xl font-semibold text-slate-300 mt-6 h-16">

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Java Developer",
                2000,
                "Backend Developer",
                2000,
                "Frontend Developer",
                2000,
              ]}
              speed={40}
              repeat={Infinity}
            />

          </div>

          <p className="text-slate-400 mt-8 text-lg leading-8 max-w-xl">
            Passionate Full Stack Developer focused on building scalable,
            responsive and user-friendly applications using Java,
            Python, React, Flask and MySQL.
          </p>

          {/* Buttons */}

          <div className="flex gap-5 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-600 transition px-8 py-3 rounded-xl font-semibold">
              Download Resume
            </button>

            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition px-8 py-3 rounded-xl font-semibold">
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex justify-center">

          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-2">

            <img
              src={profile}
              alt="Mayuri"
              className="w-full h-full rounded-full object-cover border-4 border-slate-900"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;