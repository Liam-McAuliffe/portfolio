'use client';

import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

export default function Projects({ projectsToDisplay }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const sectionBg = 'bg-grey-soft dark:bg-navy-deep';
  const textColor = 'text-charcoal dark:text-grey-soft';
  const headingColor = 'text-navy-deep dark:text-teal';
  const cardBg = 'bg-white/60 dark:bg-charcoal/60';
  const cardText = 'text-charcoal dark:text-grey-soft';
  const cardBorder = 'border border-black/10 dark:border-white/20';
  const cardBackdropBlur = 'backdrop-blur-lg';
  const techPillBg = 'bg-navy-deep/80 dark:bg-navy-deep/90';
  const techPillText = 'text-grey-soft dark:text-grey-soft';

  const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

  if (!projectsToDisplay || projectsToDisplay.length === 0) {
    return (
      <section
        id="projects"
        className={`py-16 px-4 md:px-8 lg:px-16 ${sectionBg} ${textColor}`}
      >
        <div className="container mx-auto text-center">
          <h2
            className={`font-montserrat text-3xl font-bold mb-12 ${headingColor}`}
          >
            Projects
          </h2>
          <p className="font-inter text-lg">
            No projects match the current filter.
          </p>
          <p className="mt-12 text-center text-sm text-teal italic">
            (Try selecting 'All' skills)
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className={`py-16 px-4 md:px-8 lg:px-16 ${sectionBg} ${textColor}`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-center font-montserrat text-3xl font-bold mb-12 ${headingColor}`}
        >
          Projects
        </h2>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid flex w-auto"
          columnClassName="my-masonry-grid_column bg-clip-padding px-4"
        >
          {projectsToDisplay.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleOpenModal(project)}
              className={`rounded-lg shadow-xl overflow-hidden mb-8 cursor-pointer
                           ${cardBg} ${cardBorder} ${cardBackdropBlur} ${cardText}
                           transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl`}
            >
              <div className="relative h-48 w-full pointer-events-none">
                <Image
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={index < 3}
                />
              </div>
              <div className="p-6 pointer-events-none">
                <h3
                  className={`font-montserrat font-bold text-xl mb-2 ${headingColor}`}
                >
                  {project.title}
                </h3>
                <p className={`font-inter text-sm mb-4 ${cardText}`}>
                  {project.description.split('\n')[0]}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full ${techPillBg} ${techPillText} px-3 py-1 text-xs font-inter`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 pointer-events-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-teal dark:text-teal hover:underline text-sm font-semibold"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-coral dark:text-coral hover:underline text-sm font-semibold"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </section>
  );
}
