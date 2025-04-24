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
      title: 'Project One Title',
      description: 'Detailed description for modal...\n\nMore details.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Firebase'],
      imageUrl: '/project-one.jpg',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 2,
      title: 'Project Two Title',
      description: 'Another description...',
      tech: ['Python', 'Node.js', 'React'],
      imageUrl: '/project-two.png',
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      id: 3,
      title: 'Project Three Title',
      description: '...',
      tech: ['React', 'Tailwind CSS'],
      imageUrl: '/placeholder-project.png',
      liveUrl: '#',
      repoUrl: '#',
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
      <section id="hero" className="flex flex-col md:flex-row min-h-screen">
        <div className="flex w-full md:w-1/2 flex-col justify-center bg-navy-deep dark:bg-charcoal p-8 md:p-12 text-grey-soft dark:text-grey-soft">
          <h1 className="text-grey-soft dark:text-grey-soft font-montserrat text-4xl lg:text-5xl font-bold tracking-tight">
            Hi, I’m Liam McAuliffe
          </h1>
          <p className="mt-4 text-teal dark:text-teal font-inter text-xl lg:text-2xl">
            Full-Stack Developer
          </p>
          <a
            href="#projects"
            className="mt-8 self-start rounded bg-teal dark:bg-teal px-6 py-3 font-montserrat font-bold text-navy-deep dark:text-navy-deep transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-deep dark:focus:ring-offset-charcoal focus:ring-teal"
          >
            View Projects
          </a>
        </div>

        <div className="w-full md:w-1/2 bg-charcoal dark:bg-navy-deep flex items-center justify-center p-0 md:p-0 overflow-hidden">
          <div className="w-full h-full aspect-square md:aspect-auto">
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
