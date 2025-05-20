import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Projects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  const projects = [
    {
      title: "Portfolio Site",
      description: "A responsive and dynamic personal portfolio built to showcase projects, skills, and experience — optimized for performance and accessibility.",
      tech: ["ReactJS", "JavaScript", "TailwindCSS"],
      color: "blue",
    },
    {
      title: "Document Indexing & Retrieval System",
      description: "A multilingual text indexing and retrieval platform using AI, NLP, and machine learning techniques to help users publish and search Arabic and English documents efficiently and accurately.",
      tech: ["Python", "NLP", "Machine Learning", "FastAPI", "Laravel"],
      color: "cyan",
    },
    {
      title: "HR Management System",
      description: "A full-stack web application for human resources management, built with React.js and Nest.js, to centralize and automate key HR processes such as employee records, leave tracking, and performance evaluations.",
      tech: ["React.js", "Nest.js", "SQLServer", "TypeScript"],
      color: "blue",
    },    
    {
      title: "Dispute & Billing Management System",
      description: "A full-stack web application designed to manage disputes, billing, and banking transactions. The system automates 100% of business processes, reducing processing time and improving data accuracy.",
      tech: ["React.js", "Node.js", "Express.js", "SQLServer"],
      color: "cyan",
    },
  ];

  // Initialize navigation after component mounts
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen py-32 bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-950 overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Light glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-[20%] w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-blue-500/20 blur-2xl rounded-full animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-6xl mx-auto px-6"
      >
        <h2 id="projects-heading" className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        {/* Navigation Buttons */}
        <div className="absolute left-4 md:left-[-2.5rem] top-[50%] -translate-y-1/2 z-10 hidden md:block">
          <button
            ref={prevRef}
            aria-label="Previous project"
            className="bg-white/20 hover:bg-white/30 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            ❮
          </button>
        </div>
        <div className="absolute right-4 md:right-[-2.5rem] top-[50%] -translate-y-1/2 z-10 hidden md:block">
          <button
            ref={nextRef}
            aria-label="Next project"
            className="bg-white/20 hover:bg-white/30 text-white text-2xl w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            ❯
          </button>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay]}
          className="py-4" // Added padding for better visibility
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                whileHover={{ y: -10 }}
                className="min-h-[400px] h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-lg 
                hover:border-blue-500/30 hover:shadow-[0_8px_24px_rgba(59,130,246,0.2)] 
                transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className={`text-xl font-semibold mb-2 text-${project.color}-300`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-200 mb-4 text-sm">{project.description}</p>
                </div>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, key) => (
                      <motion.span
                        key={key}
                        whileHover={{ scale: 1.05 }}
                        className={`bg-${project.color}-500/10 text-${project.color}-300 px-3 py-1 rounded-full text-xs hover:bg-${project.color}-500/20 transition-all`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm group"
                    aria-label={`View details of ${project.title}`}
                  >
                    View Project
                    <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};