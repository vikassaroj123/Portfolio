import { GoogleTagManager } from '@next/third-parties/google';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './css/card.scss';
import './css/globals.scss';
import Head from 'next/head';

// Importing the Inter font from Google Fonts
const inter = Inter({ subsets: ['latin'] });

// Metadata for your website
export const metadata = {
  title: 'Vikas Saroj | Full-Stack Developer',
  description: 'Vikas Saroj is a full-stack developer specializing in MERN stack technologies. Explore his portfolio to see his skills, projects, and achievements in web development.',
  keywords: 'Vikas Saroj, full-stack developer, MERN stack, web development, portfolio, React, Node.js, Express, MongoDB, JSS Academy of Technical Education',
  openGraph: {
    type: 'website',
    url: 'https://www.vikassaroj.site',
    title: 'Vikas Saroj | Full-Stack Developer',
    description: 'Vikas Saroj is a full-stack developer with expertise in MERN stack technologies. View his portfolio to discover his skills and projects.',
    image: '/profile.png',
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
      'https://twitter.com/MrVikasSaroj1',
      'https://github.com/vikassaroj'
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MrVikasSaroj1',
    title: 'Vikas Saroj | Full-Stack Developer',
    description: 'Discover Vikas Saroj, a skilled full-stack developer specializing in MERN stack technologies. Explore his portfolio to learn more about his work and projects.',
    image: '/images/twitter-image.jpg',
  },
};

// RootLayout component
export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://www.vikassaroj.site",
    "name": "Vikas Saroj | Full-Stack Developer",
    "description": "Vikas Saroj is a full-stack developer specializing in MERN stack technologies.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.vikassaroj.site/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "sameAs": [
      "https://www.linkedin.com/in/vikas-saroj-b86316229/",
      "https://twitter.com/MrVikasSaroj1",
      "https://github.com/vikassaroj"
    ]
  };

  return (
    <html lang="en" dir="ltr">
      <head>
        <Head>
          {/* Basic meta tags */}
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="robots" content="index, follow" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="author" content="Vikas Saroj" />
          <meta name="language" content="English" />
          <meta name="publisher" content="Vikas Saroj" />

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
          <meta name="twitter:creator" content="@MrVikasSaroj1" />

          {/* Favicon links */}
          <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
          <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
          <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
          <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
          <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />

          {/* Canonical link */}
          <link rel="canonical" href={metadata.openGraph.url} />
          
          {/* Google Tag Manager */}
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
          
          {/* Page title */}
          <title>{metadata.title}</title>

          {/* Structured Data */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
        </Head>
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
