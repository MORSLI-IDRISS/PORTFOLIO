import { motion, stagger, useAnimate } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FiAward, FiCode, FiDatabase } from "react-icons/fi";

export const About = () => {
  const [scope, animate] = useAnimate();
  
  // Compétences avec dates de début
  const skillsData = {
    frontend: [
      { name: "ReactJS", startYear: 2024 },
      { name: "JavaScript", startYear: 2020 },
      { name: "TypeScript", startYear: 2024 },
      { name: "Flutter", startYear: 2023 },
      { name: "TailwindCSS", startYear: 2024 }
    ],
    backend: [
      { name: "Node.js", startYear: 2020 },
      { name: "ExpressJS", startYear: 2020 },
      { name: "Python", startYear: 2020 },
      { name: "NestJS", startYear: 2024 },
      { name: "MongoDB", startYear: 2024 },
      { name: "PostgreSQL", startYear: 2022 },
      { name: "SQLServer", startYear: 2021 }
    ]
  };

  // Calculer les années d'expérience
  const calculateExperience = (startYear) => {
    const currentYear = new Date().getFullYear();
    const years = currentYear - startYear;
    return years > 1 ? `${years}+ years` : `${years} year`;
  };

  // Animation au chargement
  const onViewportEnter = () => {
    animate([
      [".skill-item", { opacity: 1, y: 0 }, { delay: stagger(0.1), duration: 0.3 }],
      [".content-item", { opacity: 1, x: 0 }, { delay: stagger(0.2), at: "<" }]
    ]);
  };

  return (
    <section
      id="about"
      className="relative min-h-screen py-32 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-950 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Light glow (optimized for reduced motion) */}
      <div className="absolute inset-0 motion-reduce:hidden">
        <div className="absolute top-1/4 left-[20%] w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
      </div>

      <motion.div
        ref={scope}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        onViewportEnter={onViewportEnter}
        className="relative z-10 max-w-6xl mx-auto px-6 text-white"
      >
        {/* Semantic heading structure */}
        <h1 id="about-heading" className="sr-only">À propos de Idriss Morsli</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Who I Am
        </h2>

        {/* Skills Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-8 md:p-10 mb-20 shadow-xl">
          <p className="text-gray-100 text-center text-lg mb-10">
            I design and build immersive digital experiences where logic meets elegance. Code is my craft, and usability is my compass.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FiCode className="text-cyan-300 text-xl" />
                <h3 className="text-xl text-cyan-300 font-semibold">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.frontend.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-item bg-cyan-500/10 text-cyan-300 px-4 py-1 rounded-full text-sm hover:bg-cyan-400/20 hover:scale-105 transition-transform shadow-inner opacity-0"
                    initial={{ opacity: 0, y: 20 }}
                    data-tooltip={`Since ${skill.startYear} (${calculateExperience(skill.startYear)})`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <FiDatabase className="text-blue-300 text-xl" />
                <h3 className="text-xl text-blue-300 font-semibold">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skillsData.backend.map((skill, i) => (
                  <motion.span
                    key={i}
                    className="skill-item bg-blue-500/10 text-blue-300 px-4 py-1 rounded-full text-sm hover:bg-blue-400/20 hover:scale-105 transition-transform shadow-inner opacity-0"
                    initial={{ opacity: 0, y: 20 }}
                    data-tooltip={`Since ${skill.startYear} (${calculateExperience(skill.startYear)})`}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            className="content-item flex items-start gap-4 opacity-0"
            initial={{ opacity: 0, x: -20 }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full mt-1">
              <FaGraduationCap className="text-white text-base" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">Education</h3>
              <p className="text-gray-100 mb-2">
                <strong>Software Engineering</strong> – SAAD DAHLEB University (2018–2023)
              </p>
              <div className="flex items-center gap-2 text-sm text-blue-400">
                <FiAward />
                <span>Master's Degree</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="content-item flex items-start gap-4 opacity-0"
            initial={{ opacity: 0, x: 20 }}
          >
            <div className="w-10 h-10 flex items-center justify-center bg-cyan-400 rounded-full mt-1">
              <FaBriefcase className="text-white text-base" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">Work Experience</h3>
              <div className="text-gray-100 space-y-4">
                <div>
                  <p className="font-bold text-blue-300">Software Engineer – SATIM (2024–Now)</p>
                  <p className="text-gray-200">Developed and deployed scalable applications using modern tech stacks.</p>
                  <ul className="mt-2 space-y-1 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-1 h-1 bg-cyan-400 rounded-full"></span>
                      <span>Led frontend architecture redesign</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-1 h-1 bg-cyan-400 rounded-full"></span>
                      <span>Optimized database queries by 40%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Tooltip styles */}
      <style jsx>{`
        [data-tooltip] {
          position: relative;
        }
        [data-tooltip]:hover::after {
          content: attr(data-tooltip);
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0,0,0,0.8);
          color: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          margin-bottom: 5px;
        }
      `}</style>
    </section>
  );
};