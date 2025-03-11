import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="border-b border-neutral-900 pb-12">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-8 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <div className="grid gap-12 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 mb-6"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded w-full h-auto max-w-[150px] mx-auto"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4 text-center"
            >
              <h6 className="mb-4 font-semibold text-lg">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap justify-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Demo Link */}
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block rounded bg-purple-600 px-4 py-2 text-white font-medium hover:bg-purple-700"
                >
                  Live Demo
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
