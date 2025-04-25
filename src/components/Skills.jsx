'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFirebase,
  SiPrisma,
  SiPostgresql,
  SiRedux,
  SiSocketdotio,
  SiVercel,
} from 'react-icons/si';

export default function Skills({ activeFilter, onFilterChange }) {
  const skillsData = [
    { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
    { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
    { name: 'JavaScript', icon: FaJsSquare, color: 'text-yellow-400' },
    { name: 'React', icon: FaReact, color: 'text-sky-400' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-500' },
    { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
    { name: 'Vercel', icon: SiVercel, color: 'text-white' },
    { name: 'Prisma', icon: SiPrisma, color: 'text-teal-500' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-600' },
    { name: 'Redux', icon: SiRedux, color: 'text-purple-500' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-600' },
    { name: 'Websockets', icon: SiSocketdotio, color: 'text-white' },
  ];

  const sectionBg = 'bg-navy-deep dark:bg-charcoal';
  const baseText = 'text-grey-soft dark:text-grey-soft';
  const headingColor = 'text-teal dark:text-teal';

  const cardBg = 'bg-charcoal dark:bg-navy-deep';
  const cardBorder = 'border border-grey-soft/10 dark:border-grey-soft/10';

  const activeCardClasses =
    'border-teal dark:border-teal bg-teal/10 dark:bg-teal/10 shadow-md scale-105';
  const inactiveCardHoverClasses =
    'hover:bg-grey-soft/10 dark:hover:bg-grey-soft/5 hover:border-grey-soft/30';

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  return (
    <section
      id="skills"
      className={`${sectionBg} ${baseText} py-16 overflow-hidden`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* ... Heading, All Skills button, hint text ... */}
        <h2
          className={`text-center ${headingColor} font-montserrat text-3xl font-bold mb-4`}
        >
          My Tech Stack
        </h2>
        <div className="text-center mb-8">
          <button
            onClick={() => onFilterChange('All')}
            className={`rounded-full px-5 py-2 text-sm font-inter shadow-md m-1 transition-all duration-200 ease-out transform hover:-translate-y-0.5
                        ${
                          activeFilter === 'All'
                            ? 'bg-teal text-navy-deep dark:bg-teal dark:text-navy-deep scale-105'
                            : `bg-charcoal text-grey-soft border border-grey-soft/40 hover:bg-grey-soft/10 dark:bg-navy-deep dark:text-grey-soft dark:border-grey-soft/30 dark:hover:bg-grey-soft/5`
                        }`}
          >
            All Skills
          </button>
          <p className="text-center text-xs text-grey-soft/70 dark:text-grey-soft/60 mt-2">
            Click a skill to filter projects.
          </p>
        </div>
      </div>

      <div className="w-full inline-flex flex-nowrap overflow-hidden py-4 group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        {/* Apply animate-marquee and adjust animation duration */}
        <motion.div
          className="flex items-center justify-center md:justify-start [&_button]:mx-2 animate-marquee group-hover:[animation-play-state:paused]" // Use animate-marquee
          style={{ animationDuration: '45s' }} // Set desired duration
        >
          {[...skillsData, ...skillsData].map((item, index) => {
            const isActive = activeFilter === item.name;
            const key = `${item.name}-${index}`;
            return (
              <motion.button
                key={key}
                onClick={() => onFilterChange(item.name)}
                className={`flex items-center space-x-3 p-3 rounded-lg ${cardBg} ${cardBorder} flex-shrink-0
                            transition-all duration-200 ease-out text-left
                            ${isActive ? activeCardClasses : inactiveCardHoverClasses}`}
                title={`Filter by ${item.name}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                <item.icon
                  className={`text-xl sm:text-2xl flex-shrink-0 transition-colors duration-200 ${
                    isActive
                      ? 'text-teal dark:text-teal'
                      : item.color || baseText
                  }`}
                />
                <span
                  className={`text-xs sm:text-sm font-inter transition-colors duration-200 ${
                    isActive
                      ? 'font-semibold text-teal dark:text-teal'
                      : baseText
                  }`}
                >
                  {item.name}
                </span>
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
