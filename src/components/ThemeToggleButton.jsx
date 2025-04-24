'use client';

import { useTheme } from '@/context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  const buttonBg = 'bg-charcoal dark:bg-grey-soft';
  const buttonText = 'text-teal dark:text-coral';
  const buttonHoverBg = 'hover:bg-grey-soft/20 dark:hover:bg-navy-deep/30';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className={`p-2 rounded-full ${buttonBg} ${buttonText} ${buttonHoverBg} transition-colors duration-200`}
    >
      {theme === 'light' ? <FaMoon size={18} /> : <FaSun size={18} />}
    </button>
  );
}
