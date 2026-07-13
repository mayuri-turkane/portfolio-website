const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-white">
          Mayuri Turkane
        </h2>

        <p className="mt-2">
          Full Stack Developer | Java Developer
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Email</a>
        </div>

        <hr className="my-6 border-gray-700" />

        <p>
          © 2026 Mayuri Turkane. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;