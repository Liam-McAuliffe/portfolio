import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const footerBg = 'bg-charcoal dark:bg-navy-deep';
  const textColor = 'text-grey-soft dark:text-grey-soft';
  const linkColor = 'text-teal dark:text-teal';
  const linkHoverColor = 'hover:text-coral dark:hover:text-coral';
  const sidebarPadding = 'md:pl-20';

  return (
    <footer className={`py-6 px-8 ${footerBg} ${textColor} ${sidebarPadding}`}>
      <div className="ml-4 flex flex-col md:flex-row justify-between items-end text-sm">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a
            href="https://github.com/Liam-McAuliffe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`${linkColor} ${linkHoverColor} transition`}
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/liam-mcauliffe/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`${linkColor} ${linkHoverColor} transition`}
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <div className="font-inter  ">
          © {new Date().getFullYear()} Liam McAuliffe
        </div>
        <Image
          src="/liam-desk.webp"
          alt="Footer Image"
          width={100}
          height={100}
        />
      </div>
    </footer>
  );
}
