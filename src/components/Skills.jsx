'use client';

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
    {
      name: 'HTML',
      category: 'Frontend',
      icon: FaHtml5,
      color: 'text-orange-500',
    },
    {
      name: 'CSS',
      category: 'Frontend',
      icon: FaCss3Alt,
      color: 'text-blue-500',
    },
    {
      name: 'JavaScript',
      category: 'Frontend',
      icon: FaJsSquare,
      color: 'text-yellow-400',
    },
    {
      name: 'React',
      category: 'Frontend',
      icon: FaReact,
      color: 'text-sky-400',
    },
    {
      name: 'Tailwind CSS',
      category: 'Frontend',
      icon: SiTailwindcss,
      color: 'text-cyan-500',
    },
    {
      name: 'Next.js',
      category: 'Backend',
      icon: SiNextdotjs,
      color: 'text-white',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: FaNodeJs,
      color: 'text-green-500',
    },
    {
      name: 'Firebase',
      category: 'DatabaseCloud',
      icon: SiFirebase,
      color: 'text-yellow-500',
    },
    {
      name: 'Vercel',
      category: 'DatabaseCloud',
      icon: SiVercel,
      color: 'text-white',
    },
    {
      name: 'Prisma',
      category: 'DatabaseCloud',
      icon: SiPrisma,
      color: 'text-teal-500',
    },
    {
      name: 'PostgreSQL',
      category: 'DatabaseCloud',
      icon: SiPostgresql,
      color: 'text-blue-600',
    },
    {
      name: 'Redux',
      category: 'Tools',
      icon: SiRedux,
      color: 'text-purple-500',
    },
    {
      name: 'Git',
      category: 'Tools',
      icon: FaGitAlt,
      color: 'text-orange-600',
    },
    {
      name: 'Websockets',
      category: 'Tools',
      icon: SiSocketdotio,
      color: 'text-white',
    },
  ];

  const groupedSkills = skillsData.reduce((acc, skill) => {
    const category = skill.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(skill);
    return acc;
  }, {});

  const sectionBg = 'bg-navy-deep dark:bg-charcoal';
  const baseText = 'text-grey-soft dark:text-grey-soft';
  const headingColor = 'text-teal dark:text-teal';
  const categoryColor = 'text-coral dark:text-coral';
  const cardBg = 'bg-charcoal dark:bg-navy-deep';
  const cardBorder = 'border border-grey-soft/10 dark:border-grey-soft/10';
  const cardBaseClasses = `flex flex-col items-center justify-center p-3 md:p-4 rounded-lg ${cardBg} ${cardBorder} transition-all duration-200 ease-out text-center`;
  const activeCardClasses = 'border-teal dark:border-teal scale-105 shadow-lg';
  const inactiveCardHoverClasses =
    'hover:bg-grey-soft/10 dark:hover:bg-grey-soft/5 hover:border-grey-soft/30';

  return (
    <section
      id="skills"
      className={`${sectionBg} ${baseText} py-16 px-4 md:px-8 lg:px-16`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-center ${headingColor} font-montserrat text-3xl font-bold mb-2`}
        >
          My Tech Stack
        </h2>

        <div className="text-center mb-2">
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
        </div>

        <p className="text-center text-xs text-grey-soft/70 dark:text-grey-soft/60 mb-10">
          Click a skill below to filter projects.
        </p>

        {Object.entries(groupedSkills).map(([category, items]) => (
          <div key={category} className="mb-10">
            <h3
              className={`text-center md:text-left ${categoryColor} font-montserrat text-xl font-bold mb-4`}
            >
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-2 sm:gap-3">
              {items.map((item) => {
                const isActive = activeFilter === item.name;
                return (
                  <button
                    key={item.name}
                    onClick={() => onFilterChange(item.name)}
                    className={`${cardBaseClasses}
                               ${isActive ? activeCardClasses : inactiveCardHoverClasses}
                               p-2 sm:p-3 md:p-4`} // smaller padding on mobile
                    title={`Filter by ${item.name}`}
                  >
                    <item.icon
                      className={`text-xl sm:text-2xl md:text-3xl mb-1 ${
                        isActive
                          ? 'text-teal dark:text-teal'
                          : item.color || baseText
                      }`}
                    />
                    <span
                      className={`text-[9px] sm:text-[10px] md:text-xs font-inter ${
                        isActive ? 'font-semibold' : ''
                      }`}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
