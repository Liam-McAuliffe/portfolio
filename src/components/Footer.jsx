export default function Footer() {
  const footerBg = 'bg-charcoal';
  const textColor = 'text-grey-soft';
  const linkColor = 'text-teal';

  return (
    <footer className={`py-8 px-4 md:px-8 lg:px-16 ${footerBg} ${textColor} `}>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="https://github.com/Liam-McAuliffe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`${linkColor} hover:text-coral transition`}
          >
            [GitHub Icon]
          </a>
          <a
            href="https://www.linkedin.com/in/liam-mcauliffe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`${linkColor} hover:text-coral transition`}
          >
            [LinkedIn Icon]
          </a>
        </div>

        <div className="font-inter">
          © {new Date().getFullYear()} Liam McAuliffe
        </div>
      </div>
    </footer>
  );
}
