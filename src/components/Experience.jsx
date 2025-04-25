'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const milestones = [
    {
      id: 1,
      title: 'Role at SONIC',
      type: 'Work',
      description:
        'Crewmate/Carhop: Customer service experience and teamwork in a fast-paced environment.',
      date: '2022',
    },
    {
      id: 2,
      title: 'Eastside High School',
      type: 'Education',
      description:
        'Graduated with from the International Baccalaureate (IB) program (3.8 GPA).',
      date: '2020-2024',
    },
    {
      id: 3,
      title: 'University of South Florida',
      type: 'Education',
      description: 'Pursuing B.S. in Computer Science. (Current GPA: 3.2)',
      date: '2024-Present',
    },
  ];

  const sectionBg = 'bg-white dark:bg-navy-deep';
  const textColor = 'text-charcoal dark:text-grey-soft';
  const headingColor = 'text-navy-deep dark:text-teal';
  const cardBg = 'bg-grey-soft dark:bg-charcoal';
  const cardText = 'text-charcoal dark:text-grey-soft';
  const cardBorder = 'border-l-4 md:border-l-0 md:border-r-4';
  const cardBorderWork = 'border-coral dark:border-coral';
  const cardBorderEdu = 'border-teal dark:border-teal';
  const lineColor = 'bg-grey-soft/50 dark:bg-grey-soft/30';
  const dotBg = 'bg-white dark:bg-navy-deep';
  const dotRingWork = 'ring-coral dark:ring-coral';
  const dotRingEdu = 'ring-teal dark:ring-teal';
  const dotColorWork = 'bg-coral dark:bg-coral';
  const dotColorEdu = 'bg-teal dark:bg-teal';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    left: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    },
    right: {
      hidden: { opacity: 0, x: 50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    },
  };

  return (
    <section
      id="experience"
      className={`relative ${sectionBg} ${textColor} py-20 px-4 md:px-8 lg:px-16 overflow-hidden`}
    >
      <div className="container mx-auto max-w-3xl relative">
        <h2
          className={`text-center font-montserrat text-3xl md:text-4xl font-bold mb-16 md:mb-20 ${headingColor}`}
        >
          My Journey
        </h2>
        <div
          className={`absolute top-12 bottom-0 left-1/2 w-1 ${lineColor} -translate-x-1/2 hidden md:block`}
        ></div>
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {milestones.map((item, index) => {
            const isLeft = index % 2 === 0;
            const borderColorClass =
              item.type === 'Work' ? cardBorderWork : cardBorderEdu;

            return (
              <motion.div
                key={item.id}
                className="relative flex md:items-center flex-col md:flex-row"
                variants={isLeft ? itemVariants.left : itemVariants.right}
              >
                <div
                  className={`absolute top-0 left-1/2 w-6 h-6 rounded-full ${dotBg} ring-4 ${
                    item.type === 'Work' ? dotRingWork : dotRingEdu
                  } -translate-x-1/2 md:translate-y-1/2 hidden md:block`}
                ></div>
                <div
                  className={`absolute top-1 left-0 w-3 h-3 rounded-full ${
                    item.type === 'Work' ? dotColorWork : dotColorEdu
                  } block md:hidden`}
                ></div>

                <div
                  className={`w-full md:w-[calc(50%-2rem)] p-5 rounded-lg shadow-xl ${cardBg} ${cardText} ${
                    isLeft ? 'md:mr-auto' : 'md:ml-auto'
                  } ${
                    isLeft
                      ? `md:${cardBorder} ${borderColorClass}`
                      : `md:border-l-4 ${borderColorClass}`
                  } ml-6 md:ml-0 border-l-4 md:border-l-0 ${borderColorClass}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                    {item.date || item.type}
                  </p>
                  <h3 className="font-montserrat font-bold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
