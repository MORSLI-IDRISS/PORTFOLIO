import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
} from "react-icons/fi";
import { FaXTwitter } from 'react-icons/fa6'; // parfois c'est dans 'fa6'



export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setStatus("error");

      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.5)",
    },
  };

  return (
    <div className="flex flex-col min-h-screen justify-between bg-gradient-to-br from-blue-900 to-cyan-700">
      <section
        id="contact"
        className="flex-1 flex items-center justify-center py-20"
        aria-labelledby="contact-heading"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="px-6 w-full max-w-md"
        >
          <h2
            id="contact-heading"
            className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center"
          >
            Let's Connect!
          </h2>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-8 bg-white/10 backdrop-blur-lg rounded-xl shadow-xl border border-white/20"
          >
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <motion.div whileFocus="focus">
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <motion.input
                  variants={inputVariants}
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-3 text-white placeholder-white/70 focus:outline-none transition-all"
                  placeholder="Full Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </motion.div>

              <motion.div whileFocus="focus">
                <label htmlFor="email" className="sr-only">
                  Email Address
                </label>
                <motion.input
                  variants={inputVariants}
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-3 text-white placeholder-white/70 focus:outline-none transition-all"
                  placeholder="Your Email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </motion.div>

              <motion.div whileFocus="focus">
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <motion.textarea
                  variants={inputVariants}
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-5 py-3 text-white placeholder-white/70 focus:outline-none transition-all"
                  placeholder="Your Message"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </motion.div>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-green-500/20 text-green-300 rounded-lg"
                >
                  <FiCheck />
                  <span>Message sent successfully!</span>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 bg-red-500/20 text-red-300 rounded-lg"
                >
                  <FiAlertCircle />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: status === "sending" ? 1 : 1.05 }}
                whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  status === "sending"
                    ? "bg-cyan-700 cursor-not-allowed"
                    : "bg-cyan-600 hover:bg-cyan-500"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      <footer className="bg-gradient-to-r from-blue-950 to-cyan-900 py-8 border-t border-cyan-800/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-sm text-cyan-300/80">
                © {new Date().getFullYear()} Idriss Morsli. All rights reserved.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <motion.a
                href="https://github.com/MORSLI-IDRISS"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-cyan-300/70 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="text-xl" />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/idriss-morsli-a95815234/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-cyan-300/70 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="text-xl" />
              </motion.a>

              <motion.a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-cyan-300/70 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-xl" />
              </motion.a>

              <motion.a
                href="mailto:contact@idrissmorsli.com"
                whileHover={{ y: -3 }}
                className="text-cyan-300/70 hover:text-white transition-colors"
                aria-label="Email"
              >
                <FiMail className="text-xl" />
              </motion.a>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-cyan-400/50">
              Crafted with React, Tailwind CSS, and Framer Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
