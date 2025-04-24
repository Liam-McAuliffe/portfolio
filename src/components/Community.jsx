export default function Community() {
  const activities = [
    {
      id: 1,
      title: 'Science 4 Kids',
      iconPlaceholder: '[🔬]',
      description:
        'Developed communication and presentation skills by explaining complex science concepts simply to young audiences.',
      relevance: 'Relevant for technical presentations & team communication.',
    },
    {
      id: 2,
      title: 'Tutoring',
      iconPlaceholder: '[🧑‍🏫]',
      description:
        'Enhanced problem diagnosis and teaching abilities by breaking down complex topics and identifying learning roadblocks.',
      relevance:
        'Applicable to debugging, mentoring, and explaining solutions.',
    },
  ];

  const sectionBg = 'bg-navy-deep';
  const textColor = 'text-grey-soft';
  const headingColor = 'text-teal';
  const cardBg = 'bg-charcoal';
  const iconColor = 'text-coral';

  return (
    <section
      id="community"
      className={`py-16 px-4 md:px-8 lg:px-16 ${sectionBg} ${textColor}`}
    >
      <div className="container mx-auto">
        <h2
          className={`text-center font-montserrat text-3xl font-bold mb-12 ${headingColor}`}
        >
          Community & Extracurriculars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className={`p-6 rounded-lg shadow-lg text-center ${cardBg}`}
            >
              <div className={`text-4xl mb-4 ${iconColor}`}>
                {activity.iconPlaceholder}
              </div>
              <h3 className="font-montserrat font-bold text-xl mb-2">
                {activity.title}
              </h3>
              <p className="font-inter text-sm mb-2">{activity.description}</p>
              <p className="font-inter text-xs italic text-teal">
                {activity.relevance}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-coral italic">
          (Highlighting transferable skills gained from experiences)
        </p>
      </div>
    </section>
  );
}
