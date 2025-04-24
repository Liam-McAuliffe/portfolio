'use client';

import { useState } from 'react';
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

  const handleSkillFilterChange = (skill) => setActiveSkillFilter(skill);

  const filteredProjects =
    activeSkillFilter === 'All'
      ? allProjects
      : allProjects.filter((project) =>
          project.tech.includes(activeSkillFilter)
        );

  return (
    <>
      <div className="hidden md:block fixed top-6 right-8 z-50">
        <ThemeToggleButton />
      </div>
      <section id="hero" className="flex flex-col md:flex-row lg:min-h-screen">
        <div className="flex w-full md:w-1/2 flex-col justify-center bg-navy-deep dark:bg-charcoal p-6 sm:p-8 md:p-12 text-grey-soft dark:text-grey-soft">
          <h1 className="text-grey-soft dark:text-grey-soft font-montserrat text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            👋 Hi, I’m Liam McAuliffe
          </h1>
          <p className="mt-4 text-teal dark:text-teal font-inter text-lg sm:text-xl lg:text-2xl">
            Full-Stack Web Developer
          </p>
          <a
            href="#projects"
            className="mt-8 self-start rounded bg-teal dark:bg-teal px-6 py-3 font-montserrat font-bold text-navy-deep dark:text-navy-deep transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-deep dark:focus:ring-offset-charcoal focus:ring-teal"
          >
            View Projects
          </a>
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
