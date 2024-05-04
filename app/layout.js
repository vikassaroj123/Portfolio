import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';

// Importing the Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] });

// Metadata for your website
export const metadata = {
  title: 'Vikas Saroj | Full-Stack Developer',
  description: 'Vikas Saroj is a full-stack developer who loves collaborating and learning new technologies. Discover his portfolio showcasing projects and skills.',
  keywords: 'Vikas Saroj, full-stack developer, portfolio, web development, JSS Academy of Technical Education',
  openGraph: {
    type: 'website',
    url: 'https://www.vikassaroj.site',
    title: 'Vikas Saroj | Full-Stack Developer',
    description: 'Vikas Saroj is a full-stack developer who loves collaborating and learning new technologies. Discover his portfolio showcasing projects and skills.',
    image: '/path-to-your-image.jpg',
    profile: {
      firstName: 'Vikas',
      lastName: 'Saroj',
      username: 'vikassaroj',
      gender: 'male',
      ageGroup: 'adult',
      jobTitle: 'Full-Stack Developer',
      collegeName: 'JSS Academy of Technical Education',
    },
    sameAs: [
      'https://www.linkedin.com/in/vikas-saroj-b86316229/',
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: 'https://twitter.com/MrVikasSaroj1',
    title: 'Vikas Saroj | Full-Stack Developer',
    description: 'Vikas Saroj is a full-stack developer who loves collaborating and learning new technologies. Discover his portfolio showcasing projects and skills.',
    image: '/path-to-your-image.jpg',
  },
};

// RootLayout component
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Basic meta tags */}
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Metadata from the metadata object */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />

        {/* Adding favicon */}
        <link rel="icon" href="" sizes="32x32" type="image/x-icon" />
        
        {/* Apple touch icon and manifest file */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Safari pinned tab icon */}
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

        {/* Canonical link */}
        <link rel="canonical" href={metadata.openGraph.url} />

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        
        {/* Page title */}
        <title>{metadata.title}</title>
      </head>
      <body className={inter.className}>
        {/* Toast container for notifications */}
        <ToastContainer />
        
        {/* Main content */}
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <Footer />
        </main>
      </body>
    </html>
  );
}
