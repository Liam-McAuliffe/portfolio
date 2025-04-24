import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si';

export default function AboutMe() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const headingColor = 'text-navy-deep dark:text-teal';
  const iconColor = 'text-coral dark:text-teal';

  return (
    <section
      id="about"
      className="bg-white dark:bg-navy-deep text-charcoal dark:text-grey-soft py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      <motion.div
        className="container mx-auto flex flex-col md:flex-row items-center gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          variants={imageVariants}
        >
          <motion.div
            className="relative h-64 w-64 rounded-full overflow-hidden shadow-lg border-4 border-teal dark:border-teal transition-transform duration-300 ease-out"
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <Image
              src="/headshot.webp"
              alt="Liam McAuliffe headshot"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div className="w-full md:w-2/3" variants={containerVariants}>
          <motion.h2
            className={`font-montserrat text-3xl font-bold mb-6 ${headingColor}`}
            variants={itemVariants}
          >
            About Me
          </motion.h2>

          <motion.p
            className="font-inter mb-4 flex items-center gap-2"
            variants={itemVariants}
          >
            📍Tampa, Florida
          </motion.p>

          <motion.p className="font-inter mb-4 text-lg" variants={itemVariants}>
            I'm a{' '}
            <span className="font-semibold text-teal dark:text-coral">
              full-stack developer
            </span>{' '}
            focused on building engaging and performant web experiences using:
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-x-4 gap-y-2 mb-6"
            variants={itemVariants}
          >
            <span className="flex items-center gap-1.5">
              <FaReact className={iconColor} /> React
            </span>
            <span className="flex items-center gap-1.5">
              <SiNextdotjs className={iconColor} /> Next.js
            </span>
            <span className="flex items-center gap-1.5">
              <SiTailwindcss className={iconColor} /> Tailwind CSS
            </span>
          </motion.div>

          <motion.p className="font-inter mb-4" variants={itemVariants}>
            My journey into tech started with{' '}
            <span className="font-medium">VEX Robotics</span> and evolved
            through platforms like Scratch. Driven by a desire to create more
            dynamic applications, I dove into{' '}
            <span className="font-medium">JavaScript</span> and web development,
            now leveraging frameworks like React to bring ideas to life.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
