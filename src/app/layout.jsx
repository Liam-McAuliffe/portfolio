// src/app/layout.js
import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { ThemeProvider } from '@/context/ThemeContext'; // <<< Import ThemeProvider

// ... (font configurations) ...
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['700'],
  display: 'swap',
});

export const metadata = {
  /* ... */
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      {/* No 'dark' class here initially, ThemeProvider handles it */}
      <body>
        <ThemeProvider>
          {' '}
          {/* <<< Wrap content with ThemeProvider */}
          <div className="flex flex-col min-h-screen">
            {' '}
            {/* Use div for flex structure */}
            <Navbar />
            {/* Main content area */}
            <div className="flex-grow pt-16 md:pt-0 md:pl-20">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>{' '}
        {/* <<< End ThemeProvider wrap */}
      </body>
    </html>
  );
}
