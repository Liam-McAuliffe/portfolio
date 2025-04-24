'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() {
  const milestones = [
    {
      id: 1,
      title: 'Role at SONIC',
      type: 'Work',
      description: 'Crewmate/Carhop: customer service & teamwork.',
    },
    {
      id: 2,
      title: 'Eastside High School IB program',
      type: 'Education',
      description: 'International Baccalaureate Diploma: 3.8 GPA',
    },
    {
      id: 3,
      title: 'University of South Florida (USF)',
      type: 'Education',
      description: 'Computer Science: 3.2 GPA',
    },
  ];

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const sectionBg = 'bg-white dark:bg-navy-deep';
  const textColor = 'text-charcoal dark:text-grey-soft';
  const headingColor = 'text-navy-deep dark:text-teal';
  const cardBg = 'bg-charcoal dark:bg-navy-deep';
  const cardText = 'text-grey-soft dark:text-grey-soft';
  const lineColor = 'bg-coral dark:bg-coral';
  const dotColorWork = 'bg-coral dark:bg-coral';
  const dotColorEdu = 'bg-teal dark:bg-teal';
  const dotBorder = 'border-navy-deep dark:border-grey-soft';

  const lineScaleX = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

  return (
    <section
      ref={targetRef}
      id="experience"
      className={`relative py-16 px-4 md:px-8 lg:px-16 overflow-hidden ${sectionBg} ${textColor}`}
    >
      <div className="container mx-auto relative">
        <h2
          className={`text-center font-montserrat text-3xl font-bold mb-16 md:mb-24 ${headingColor}`}
        >
          Experience & Education
        </h2>

        <div className="hidden md:block relative w-full px-4 py-8">
          <motion.div
            className={`absolute top-1/2 left-0 h-1 w-full ${lineColor} -translate-y-1/2 origin-left`}
            style={{ scaleX: lineScaleX }}
          />

          <div className="relative flex w-full justify-between items-start">
            {milestones.map((item, index) => {
              const start = 0.1 + index * 0.1;
              const end = 0.4 + index * 0.1;
              const opacity = useTransform(
                scrollYProgress,
                [start, end],
                [0, 1]
              );
              const scale = useTransform(
                scrollYProgress,
                [start, end],
                [0.8, 1]
              );
              const y = useTransform(scrollYProgress, [start, end], [50, 0]);

              return (
                <div
                  key={item.id}
                  className="relative z-10 flex flex-col items-center px-2"
                >
                  <motion.div
                    className={`h-5 w-5 rounded-full ${item.type === 'Work' ? dotColorWork : dotColorEdu} border-4 ${dotBorder} mb-4 shadow-sm`}
                    style={{ opacity: opacity }}
                  ></motion.div>

                  <motion.div
                    className={`p-4 rounded shadow-lg w-48 text-center ${cardBg} ${cardText}`}
                    style={{ opacity, scale, y }}
                  >
                    <h3 className="font-montserrat font-bold text-md mb-1">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs italic mb-2">
                      ({item.type})
                    </p>
                    <p className="font-inter text-xs">{item.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative block md:hidden mt-10 max-w-sm mx-auto">
          <div
            className={`absolute top-2 bottom-2 left-2 w-1 ${lineColor} -translate-x-1/2`}
          ></div>

          <div className="space-y-12 relative pl-8">
            {milestones.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`absolute -left-[22px] top-1 h-5 w-5 rounded-full ${item.type === 'Work' ? dotColorWork : dotColorEdu} border-4 ${dotBorder} bg-white dark:bg-navy-deep`}
                ></div>
                <div className={`p-4 rounded shadow-lg ${cardBg} ${cardText}`}>
                  <h3 className="font-montserrat font-bold text-md mb-1">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs italic mb-2">
                    ({item.type})
                  </p>
                  <p className="font-inter text-xs">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
