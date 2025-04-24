// src/components/Projects.js
'use client';

import Image from 'next/image';
import Masonry from 'react-masonry-css';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { AnimatePresence } from 'framer-motion';

// Accept projectsToDisplay prop
export default function Projects({ projectsToDisplay }) {
  // --- State for Modal ---
  const [selectedProject, setSelectedProject] = useState(null); // null when closed, project object when open
  // --- ---

  // const projects = [ ... ]; // <<< REMOVE this local definition

  // --- Modal Handlers ---
  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // --- ---

  // ... (keep breakpointColumnsObj and color definitions) ...
  const sectionBg = 'bg-grey-soft';
  const textColor = 'text-charcoal';
  const headingColor = 'text-navy-deep';
  const cardBg = 'bg-charcoal/60';
  const cardText = 'text-grey-soft';
  const cardBorder = 'border border-white/20';
  const cardBackdropBlur = 'backdrop-blur-lg';
  const techPillBg = 'bg-navy-deep/80';
  const techPillText = 'text-grey-soft';

  const breakpointColumnsObj = { default: 3, 1100: 2, 700: 1 };

  // Handle case where no projects match filter
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
    // Add relative positioning here if needed for absolute elements inside like modal? Usually not needed for fixed modal.
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
          {/* Map over the passed-in projectsToDisplay prop */}
          {projectsToDisplay.map((project, index) => (
            <div
              key={project.id}
              // Make the card clickable to open the modal
              onClick={() => handleOpenModal(project)}
              className={`rounded-lg shadow-xl overflow-hidden mb-8 cursor-pointer {/* Add cursor-pointer */}
                           ${cardBg} ${cardBorder} ${cardBackdropBlur} ${cardText}
                           transition duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl`}
            >
              {/* Image Container */}
              <div className="relative h-48 w-full pointer-events-none">
                {' '}
                {/* Added pointer-events-none to image container */}
                <Image
                  src={project.imageUrl}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  priority={index < 3}
                />
              </div>
              {/* Text Content Area */}
              <div className="p-6 pointer-events-none">
                {' '}
                {/* Added pointer-events-none */}
                <h3
                  className={`font-montserrat font-bold text-xl mb-2 ${headingColor}`}
                >
                  {project.title}
                </h3>
                <p className={`font-inter text-sm mb-4 ${cardText}`}>
                  {project.description.split('\n')[0]}{' '}
                  {/* Show only first line? */}
                </p>
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Render actual pills */}
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-full ${techPillBg} ${techPillText} px-3 py-1 text-xs font-inter`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Links - Keep these clickable */}
                <div className="flex gap-4 pointer-events-auto">
                  {' '}
                  {/* Enable pointer events for links */}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent card click when link is clicked
                    className="text-teal hover:underline text-sm font-semibold"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()} // Prevent card click when link is clicked
                    className="text-coral hover:underline text-sm font-semibold"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        <p className="mt-12 text-center text-sm text-teal italic">
          (Project filtering added. Next: Dark Mode)
        </p>
      </div>

      {/* --- Wrap Modal in AnimatePresence --- */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
      {/* --- --- */}
    </section>
  );
}
