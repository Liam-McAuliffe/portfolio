'use client';

import { motion } from 'framer-motion';

export default function Community() {
  const activities = [
    {
      id: 1,
      title: 'Science 4 Kids',
      icon: '[🔬]',
      description:
        'Developed communication and presentation skills explaining complex science concepts simply to young audiences.',
      relevance: 'Relevant for technical presentations & team communication.',
    },
    {
      id: 2,
      title: 'Tutoring',
      icon: '[🧑‍🏫]',
      description:
        'Enhanced problem diagnosis and teaching abilities breaking down complex topics and identifying learning roadblocks.',
      relevance:
        'Applicable to debugging, mentoring, and explaining solutions.',
    },
    {
      id: 3,
      title: 'Hackathon Winner (Ashes of Time)',
      icon: '[🏆]',
      description:
        'Worked solo to rapidly prototype and build a functional application under pressure, winning "Best Beginner Hack".',
      relevance:
        'Demonstrates quick learning and delivering results under deadlines.',
      link: 'https://devpost.com/software/ashes-of-time',
    },
  ];

  const sectionBg = 'bg-navy-deep dark:bg-charcoal';
  const baseText = 'text-grey-soft dark:text-grey-soft';
  const headingColor = 'text-teal dark:text-teal';
  const cardBg = 'bg-charcoal dark:bg-navy-deep';
  const cardHoverBg = 'hover:bg-grey-soft/10 dark:hover:bg-grey-soft/5';
  const cardBorder = 'border border-grey-soft/10 dark:border-grey-soft/10';
  const iconColor = 'text-coral dark:text-coral';
  const linkColor = 'text-teal dark:text-teal';
  const linkHoverColor = 'hover:underline';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="community"
      className={`${sectionBg} ${baseText} py-16 px-4 md:px-8 lg:px-16`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-center ${headingColor} font-montserrat text-3xl font-bold mb-12`}
        >
          Community & Extracurriculars
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              className={`flex flex-col p-6 rounded-lg shadow-lg text-center ${cardBg} ${cardBorder} ${cardHoverBg} transition-colors duration-200`}
              variants={itemVariants}
            >
              <div className={`text-4xl mb-4 ${iconColor} mx-auto`}>
                {activity.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">
                {activity.title}
              </h3>
              <p className="font-inter text-sm mb-2 flex-grow">
                {activity.description}
              </p>
              <p className="font-inter text-xs italic text-teal mt-auto">
                {activity.relevance}
              </p>
              {activity.link && (
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-4 text-sm ${linkColor} ${linkHoverColor} self-center`}
                >
                  View Project/Details
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
