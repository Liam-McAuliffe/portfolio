import Image from 'next/image';

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-navy-deep text-charcoal dark:text-grey-soft py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative h-64 w-64 rounded-full overflow-hidden shadow-lg border-4 border-teal dark:border-teal">
            <div className="h-full w-full bg-navy-deep flex items-center justify-center text-grey-soft">
              [Headshot Image]
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3">
          <h2 className="text-navy-deep dark:text-teal">About Me</h2>
          <p className="font-inter mb-4">
            Driven full-stack developer passionate about building efficient and
            user-friendly web applications using the MERN stack and modern
            frameworks like Next.js...
          </p>
          <p className="font-inter mb-4">
            My background includes hands-on experience from my time at SONIC,
            complemented by academic projects at USF. I thrive on solving
            complex problems and continuously learning new technologies.
          </p>
          <div className="flex gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-teal">[Icon]</span>
              <span className="font-inter">
                Engaging youth via &quot;Science 4 Kids&quot;
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-coral">[Icon]</span>
              <span className="font-inter">Tutoring & Mentoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
