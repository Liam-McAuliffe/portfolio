'use client';

import { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Community from '@/components/Community';
import ContactForm from '@/components/ContactForm';
import ThemeToggleButton from '@/components/ThemeToggleButton';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  const [activeSkillFilter, setActiveSkillFilter] = useState('All');
  const audioRef = useRef(null);

  const allProjects = [
    {
      id: 1,
      title: 'FloorMates',
      description:
        'FloorMates is a platform for dorm residents to chat, share announcements, and stay informed about campus events',
      tech: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'JavaScript',
        'Vercel',
        'Prisma',
        'PostgreSQL',
        'Websockets',
        'Git',
        'Redux',
        'Node.js',
      ],
      imageUrl: '/projects/floormates.webp',
      liveUrl: 'https://floor-mates.vercel.app/',
      repoUrl: 'https://github.com/Liam-McAuliffe/floor-mates',
    },
    {
      id: 2,
      title: 'MyHomeImpact',
      description:
        'MyHomeImpact is a website that helps users assess their home’s environmental impact by estimating electricity usage, carbon emissions, and local air quality.',
      tech: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'JavaScript',
        'Git',
        'Node.js',
      ],
      imageUrl: '/projects/myhomeimpact.webp',
      liveUrl: 'https://www.myhomeimpact.info/',
      repoUrl: 'https://github.com/Liam-McAuliffe/myhomeimpact',
    },
    {
      id: 3,
      title: 'Ashes of Time',
      description:
        'Ashes of Time is a resource management game where you survive the apocalypse by managing survivors, making choices, and facing AI challenges using dynamic survival scenarios powered by the Google Gemini API.',
      tech: [
        'React',
        'Next.js',
        'Tailwind CSS',
        'JavaScript',
        'Git',
        'Node.js',
      ],
      imageUrl: '/projects/ashes-of-time.webp',
      liveUrl: 'https://ashes-of-time.vercel.app/',
      repoUrl: 'https://github.com/Liam-McAuliffe/ashes-of-time',
    },
    {
      id: 4,
      title: 'TO-DO LIST',
      description:
        'A simple to-do list app that allows users to add, edit, and delete tasks. It uses local storage to persist data across sessions.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Git'],
      imageUrl: '/projects/to-do-list.webp',
      liveUrl: 'https://liam-mcauliffe.github.io/to-do-list/',
      repoUrl: 'https://github.com/Liam-McAuliffe/to-do-list',
    },
  ];

  const handleSkillFilterChange = (skill) => {
    setActiveSkillFilter(skill);
  };

  const filteredProjects =
    activeSkillFilter === 'All'
      ? allProjects
      : allProjects.filter((project) =>
          project.tech.includes(activeSkillFilter)
        );

  const primaryButtonBg = 'bg-teal dark:bg-teal';
  const primaryButtonText = 'text-navy-deep dark:text-navy-deep';
  const secondaryButtonBg = 'bg-transparent';
  const secondaryButtonText = 'text-teal dark:text-teal';
  const secondaryButtonBorder = 'border border-teal dark:border-teal';
  const secondaryButtonHoverBg = 'hover:bg-teal/10 dark:hover:bg-teal/10';
  const iconLinkColor = 'text-grey-soft/80 dark:text-grey-soft/80';
  const iconLinkHoverColor = 'hover:text-teal dark:hover:text-teal';
  const nameButtonBase =
    'bg-transparent border-none p-0 m-0 font-inherit text-inherit cursor-pointer focus:outline-none rounded';
  const nameButtonHover = 'hover:text-teal dark:hover:text-teal';
  const nameButtonFocus =
    'focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-deep dark:focus:ring-offset-charcoal focus:ring-teal';

  const playNamePronunciation = () => {
    if (typeof window !== 'undefined') {
      if (!audioRef.current) {
        audioRef.current = new Audio('/name-pronunciation.mp3');
      }
      audioRef.current.play().catch((error) => {
        console.error('Error playing audio:', error);
      });
    }
  };

  return (
    <>
      <div className="hidden md:block fixed top-6 right-8 z-50">
        <ThemeToggleButton />
      </div>

      <section id="hero" className="flex flex-col md:flex-row lg:min-h-screen">
        <div className="flex w-full md:w-1/2 flex-col justify-center bg-navy-deep dark:bg-charcoal p-6 sm:p-8 md:p-12 text-grey-soft dark:text-grey-soft">
          <h1 className="text-grey-soft dark:text-grey-soft font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            👋 Hi, I’m
            <button
              onClick={playNamePronunciation}
              aria-label="Play name pronunciation"
              title="Hear pronunciation"
              className={`${nameButtonBase} ${nameButtonHover} ${nameButtonFocus} inline-flex items-center m-2 p-1 gap-2`}
            >
              Liam McAuliffe 🔊
            </button>
          </h1>

          <p className="mt-2 text-teal dark:text-teal font-inter text-lg sm:text-xl lg:text-2xl">
            Full-Stack Web Developer
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className={`inline-block rounded ${primaryButtonBg} ${primaryButtonText} px-6 py-3 font-montserrat text-sm sm:text-base font-bold transition hover:scale-[1.03] ${nameButtonFocus}`}
            >
              View Projects
            </a>
            <a
              href="/Liam_McAuliffe_Resume.pdf"
              download
              className={`inline-flex items-center gap-2 rounded ${secondaryButtonBg} ${secondaryButtonText} ${secondaryButtonBorder} ${secondaryButtonHoverBg} px-5 py-2.5 font-montserrat text-sm sm:text-base font-bold transition hover:scale-[1.03] ${nameButtonFocus}`}
            >
              <FaDownload /> Resume
            </a>
          </div>

          <div className="mt-6 flex items-center gap-5">
            <a
              href="https://github.com/Liam-McAuliffe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className={`${iconLinkColor} ${iconLinkHoverColor} transition`}
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/liam-mcauliffe/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className={`${iconLinkColor} ${iconLinkHoverColor} transition`}
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-charcoal dark:bg-navy-deep flex items-center justify-center p-0 overflow-hidden">
          <div className="w-full h-64 sm:h-80 md:h-full aspect-square md:aspect-auto">
            <HeroAnimation />
          </div>
        </div>
      </section>

      <AboutMe />
      <Skills
        activeFilter={activeSkillFilter}
        onFilterChange={handleSkillFilterChange}
      />
      <Projects projectsToDisplay={filteredProjects} />
      <Experience />
      <Community />
      <ContactForm />
    </>
  );
}
