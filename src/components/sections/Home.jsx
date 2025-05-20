import { motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  // Variantes d'animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 overflow-hidden"
      aria-labelledby="home-heading"
    >
      {/* Effets d'arrière-plan optimisés */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-cyan-400/10 to-transparent pointer-events-none" />
      
      {/* Particules animées (optionnel) */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-cyan-400 rounded-full"
            style={{
              width: `${Math.random() * 5 + 1}px`,
              height: `${Math.random() * 5 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center z-10 px-4 max-w-3xl"
      >
        <h1 id="home-heading" className="sr-only">Accueil - Idriss Morsli</h1>
        
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-xl mb-6"
        >
          Hello, I'm Idriss MORSLI
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-gray-100 text-lg md:text-xl mt-6 mb-10 max-w-2xl mx-auto"
        >
          Full-stack developer with a creative edge — I build digital experiences that are as intuitive as they are powerful.
          Blending clean code with thoughtful design, I turn ideas into fast, scalable, and elegant solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl shadow-lg hover:shadow-cyan-500/40 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="View my projects"
          >
            View Projects
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>

          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-blue-300 hover:text-white rounded-xl hover:bg-blue-500/20 transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
            aria-label="Contact me"
          >
            Contact Me
            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Réseaux sociaux (optionnel) */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-4 mt-12"
        >
          <a 
            href="https://github.com/MORSLI-IDRISS" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors p-2"
            aria-label="My GitHub profile"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a 
            href="https://www.linkedin.com/in/idriss-morsli-a95815234/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors p-2"
            aria-label="My LinkedIn profile"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </motion.div>
      </motion.div>

      {/* Styles pour les animations de particules */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </section>
  );
};