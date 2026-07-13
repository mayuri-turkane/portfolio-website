const Contact = () => {
  return (
    <section id="contact" className="bg-[#050816] text-white py-20">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>

        <form className="space-y-6">

          <div>
            <label className="block mb-2">Full Name</label>

            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full p-4 rounded-lg bg-slate-900 border border-gray-700 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">Email</label>

            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-4 rounded-lg bg-slate-900 border border-gray-700 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2">Message</label>

            <textarea
              rows="6"
              placeholder="Let's connect! Share your message here."
              className="w-full p-4 rounded-lg bg-slate-900 border border-gray-700 outline-none"
            ></textarea>
          </div>

          <button
            className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
};

export default Contact;