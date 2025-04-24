'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2, ease: 'easeIn' },
    },
  };
  const overlayBg = 'bg-black/70 dark:bg-black/80';
  const modalBg = 'bg-white dark:bg-charcoal';
  const textColor = 'text-charcoal dark:text-grey-soft';
  const closeButtonHover = 'hover:text-coral';
  const headingColor = 'text-navy-deep dark:text-teal';

  return (
    <motion.div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${overlayBg} backdrop-blur-sm`}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.2 }}
    >
      <motion.div
        onClick={handleContentClick}
        className={`relative w-full max-w-3xl rounded-lg shadow-xl overflow-y-auto max-h-[90vh] ${modalBg} ${textColor} p-6 md:p-8`}
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-2xl ${textColor} ${closeButtonHover} transition-colors z-10`} // Added z-10
          aria-label="Close project details"
        >
          &times;
        </button>

        <h2
          className={`font-montserrat text-3xl font-bold mb-4 ${headingColor}`}
        >
          {project.title}
        </h2>
        <div className="relative h-64 w-full mb-4 bg-navy-deep rounded overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={`Detail view of ${project.title}`}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <h3 className="font-montserrat font-bold text-xl mb-2 mt-6">
          Description
        </h3>
        <p className="font-inter text-sm mb-4 whitespace-pre-line">
          {project.description}
        </p>

        <h3 className="font-montserrat font-bold text-xl mb-2 mt-6">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className={`rounded-full bg-navy-deep/80 dark:bg-navy-deep text-grey-soft dark:text-grey-soft px-3 py-1 text-xs font-inter`}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-6">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal dark:text-teal hover:underline text-sm font-semibold"
          >
            Live Demo
          </a>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-coral dark:text-coral hover:underline text-sm font-semibold"
          >
            GitHub Repo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
