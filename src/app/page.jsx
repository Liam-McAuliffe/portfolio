'use client';

import { useState } from 'react';
import AboutMe from '@/components/AboutMe';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Community from '@/components/Community';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  const [activeSkillFilter, setActiveSkillFilter] = useState('All');

  // Project Data (Keep this here or move to a separate data file/API)
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
      {/* Hero Section */}
      <section id="hero" className="flex flex-col md:flex-row min-h-screen">
        {/* Text Side */}
        <div className="flex w-full md:w-1/2 flex-col justify-center bg-navy-deep dark:bg-charcoal p-8 md:p-12 text-grey-soft dark:text-grey-soft">
          <h1 className="font-montserrat text-4xl lg:text-5xl font-bold tracking-tight">
            Hi, I’m Liam McAuliffe
          </h1>
          <p className="mt-4 font-inter text-xl lg:text-2xl text-teal dark:text-teal">
            Full-Stack Developer
          </p>
          {/* Link this button to the projects section */}
          <a
            href="#projects"
            className="mt-8 self-start rounded bg-teal dark:bg-teal px-6 py-3 font-montserrat font-bold text-navy-deep dark:text-navy-deep transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-deep dark:focus:ring-offset-charcoal focus:ring-teal"
          >
            View Projects
          </a>
        </div>
        {/* Graphic Side */}
        <div className="w-full md:w-1/2 bg-charcoal dark:bg-navy-deep flex items-center justify-center p-8 md:p-12">
          {/* Replace with actual graphic/animation */}
          <div className="w-full max-w-md aspect-square bg-navy-deep dark:bg-charcoal rounded-lg flex items-center justify-center text-grey-soft text-center">
            [Animated Background / Graphic Area Placeholder]
          </div>
        </div>
      </section>

      {/* Other Sections */}
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
