import Image from 'next/image'; // Assuming you might want an image later
import { FaLightbulb, FaUsers } from 'react-icons/fa'; // Example icons

export default function AboutMe() {
  return (
    <section
      id="about"
      className={`py-16 px-4 md:px-8 lg:px-16 bg-white dark:bg-navy-deep text-charcoal dark:text-grey-soft`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative h-64 w-64 rounded-full overflow-hidden shadow-lg border-4 border-teal dark:border-teal">
            {/* Placeholder for actual image */}
            <div className="h-full w-full bg-navy-deep dark:bg-charcoal flex items-center justify-center text-grey-soft">
              {/* Replace with <Image /> component later */}
              <span className="text-sm italic">[Headshot]</span>
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-2/3">
          <h2 className="font-montserrat text-3xl font-bold mb-4 text-navy-deep dark:text-teal">
            About Me
          </h2>
          <p className="font-inter mb-4">
            Driven full-stack developer passionate about building efficient and
            user-friendly web applications using the MERN stack and modern
            frameworks like Next.js. I enjoy bridging the gap between technical
            implementation and user experience.
          </p>
          <p className="font-inter mb-4">
            My background includes hands-on experience from my time at SONIC,
            complemented by academic projects at USF. I thrive on solving
            complex problems and continuously learning new technologies.
          </p>
          {/* Optional: Highlight key traits or activities */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="flex items-center gap-2">
              <FaLightbulb className="text-teal dark:text-teal" /> {/* Icon */}
              <span className="font-inter text-sm">
                Creative Problem Solver
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-coral dark:text-coral" /> {/* Icon */}
              <span className="font-inter text-sm">
                Collaborative Team Player
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
