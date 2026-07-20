import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    emailjs
      .sendForm(
        "service_1h9w2rv",
        "template_k7f4e8j",
        form.current,
        "gn91FkpxQoIh3N6Vz"
      )
      .then(
        () => {
          setSuccess("🎉 Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        () => {
          setError("❌ Failed to send message. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-[#050816] text-white py-24 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
            Have an opportunity, project, or just want to connect?
            Feel free to send me a message. I'd love to hear from you.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity:0,x:-50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
          >

            <h3 className="text-3xl font-bold mb-8">
              Let's Build Something Amazing 🚀
            </h3>

            <p className="text-gray-400 leading-8 mb-10">
              I'm actively looking for Full Stack Developer opportunities,
              internships, freelance projects, and collaborations.
              Whether you have a project idea or simply want to connect,
              my inbox is always open.
            </p>

            <div className="space-y-6">

              <div className="flex items-center gap-5 bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-5 hover:border-cyan-400 transition">

                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <FaEnvelope className="text-2xl"/>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-400">
                    mayuri.turakane12@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-5 hover:border-cyan-400 transition">

                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <FaPhoneAlt className="text-xl"/>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">
                    +91 8010388611
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-5 bg-slate-900/70 backdrop-blur-md border border-slate-700 rounded-2xl p-5 hover:border-cyan-400 transition">

                <div className="w-14 h-14 rounded-xl bg-cyan-500 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-2xl"/>
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-400">
                    Pune, Maharashtra, India
                  </p>
                </div>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/mayuri-turkane"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaGithub className="text-2xl"/>
              </a>

              <a
                href="https://www.linkedin.com/in/mayuri-turkane-39954532b"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
              >
                <FaLinkedin className="text-2xl"/>
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity:0,x:50 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{ duration:.6 }}
            viewport={{ once:true }}
            className="bg-slate-900/80 backdrop-blur-lg border border-slate-700 rounded-3xl p-8"
          >

                      <h3 className="text-3xl font-bold mb-8">
              Send Me a Message
            </h3>

            <div className="space-y-6">

              <div>
                <label className="block mb-2 text-gray-300">
                  Full Name
                </label>

                <input
                  type="text"
                  name="from_name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-4 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-cyan-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Email Address
                </label>

                <input
                  type="email"
                  name="from_email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-4 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-cyan-400 outline-none transition"
                />
              </div>

              <div>
                <label className="block mb-2 text-gray-300">
                  Message
                </label>

                <textarea
                  rows="6"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full p-4 rounded-xl bg-[#0f172a] border border-slate-700 focus:border-cyan-400 outline-none transition resize-none"
                ></textarea>
              </div>

            </div>

            {success && (
              <p className="text-green-400 mt-6 font-medium">
                {success}
              </p>
            )}

            {error && (
              <p className="text-red-400 mt-6 font-medium">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-8 w-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 rounded-xl py-4 font-semibold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)]"
            >
              <FaPaperPlane />

              {loading ? "Sending..." : "Send Message"}
            </button>

          </motion.form>

        </div>

      </div>

    </section>
  );
};

export default Contact;