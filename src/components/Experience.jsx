'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  const milestones = [
    {
      id: 1,
      title: 'Role at SONIC',
      type: 'Work',
    },
    {
      id: 2,
      title: 'University of South Florida (USF)',
      type: 'Education',
    },
    {
      id: 3,
      title: 'Eastside High School (HS)',
      type: 'Education',
    },
  ];

  const sectionBg = 'bg-white';
  const textColor = 'text-charcoal';
  const headingColor = 'text-navy-deep';
  const cardBg = 'bg-charcoal';
  const cardText = 'text-grey-soft';
  const lineColor = 'bg-coral';
  const dotColorWork = 'bg-coral';
  const dotColorEdu = 'bg-teal';
  const dotBorder = 'border-navy-deep';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="experience"
      className={`py-16 px-4 md:px-8 lg:px-16 overflow-x-auto ${sectionBg} ${textColor}`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-center font-montserrat text-3xl font-bold mb-16 ${headingColor}`}
        >
          Experience & Education
        </h2>

        <motion.div
          className="relative flex items-center w-full min-w-[600px] md:min-w-full px-4 py-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className={`absolute top-1/2 left-0 h-1 w-full ${lineColor} -translate-y-1/2`}
          ></div>

          <div className="relative flex w-full justify-between">
            {milestones.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative z-10 flex flex-col items-center"
                variants={itemVariants}
              >
                <div
                  className={`h-5 w-5 rounded-full ${item.type === 'Work' ? dotColorWork : dotColorEdu} border-4 ${dotBorder} mb-2`} // Added margin-bottom
                ></div>

                <div
                  className={`p-4 rounded shadow-md w-48 text-center ${cardBg} ${cardText}`}
                >
                  <h3 className="font-montserrat font-bold text-md mb-1">
                    {item.title}
                  </h3>
                  <p className="font-inter text-xs italic">({item.type})</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <p className="mt-12 text-center text-sm text-teal italic">
          (Timeline animation started - further refinement possible)
        </p>
      </div>
    </section>
  );
}
