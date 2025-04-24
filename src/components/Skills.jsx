'use client';

export default function Skills({ activeFilter, onFilterChange }) {
  const skills = {
    Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    Backend: ['Python', 'Node.js'],
    DatabaseCloud: ['Firebase'],
    Tools: ['Git', 'GitHub'],
  };

  return (
    <section
      id="skills"
      className="bg-navy-deep dark:bg-charcoal text-grey-soft dark:text-grey-soft py-16 px-4 md:px-8 lg:px-16"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-teal dark:text-teal font-montserrat text-3xl font-bold mb-12">
          My Tech Stack
        </h2>

        <button
          onClick={() => onFilterChange('All')}
          className={`rounded-full px-4 py-2 text-sm font-inter shadow-md m-2 transition-colors duration-200
                        ${
                          activeFilter === 'All'
                            ? 'bg-teal text-navy-deep dark:bg-teal dark:text-navy-deep' // Active
                            : 'bg-charcoal text-grey-soft hover:bg-grey-soft/20 dark:bg-navy-deep dark:text-grey-soft dark:hover:bg-grey-soft/10' // Inactive
                        }`}
        >
          All
        </button>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="mb-2">
              <h3 className="text-coral dark:text-coral font-montserrat text-xl font-bold mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill) => {
                  const isActive = activeFilter === skill;
                  return (
                    <button
                      key={skill}
                      onClick={() => onFilterChange(skill)}
                      className={`rounded-full px-4 py-2 text-sm font-inter shadow-md transition-colors duration-200
                                  ${
                                    isActive
                                      ? 'bg-teal text-navy-deep dark:bg-teal dark:text-navy-deep' // Active
                                      : 'bg-charcoal text-grey-soft hover:bg-grey-soft/20 dark:bg-navy-deep dark:text-grey-soft dark:hover:bg-grey-soft/10' // Inactive
                                  }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-sm text-teal dark:text-teal italic">
          (Click skills to filter projects below)
        </p>
      </div>
    </section>
  );
}
