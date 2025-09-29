import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  twitterHandle?: string;
  jsonLd?: Record<string, unknown>;
}

const defaultSEO = {
  title:
    'Sami Ben Chaalia - Full Stack Developer | TypeScript Expert | Tunisian Engineer',
  description:
    'Sami Ben Chaalia is a Tunisian expert full-stack developer specializing in TypeScript, React, Node.js, NestJS, PostgreSQL, and MongoDB. Professional web development services with proven expertise in modern JavaScript frameworks and database technologies.',
  keywords:
    'Sami Ben Chaalia, Tunisian developer, TypeScript expert, React developer, Node.js engineer, NestJS developer, PostgreSQL expert, MongoDB specialist, full stack developer Tunisia, web development Tunisia, JavaScript expert, frontend developer, backend developer, software engineer Tunisia',
  image: 'https://samibenchaalia.com/og-image.png',
  url: 'https://samibenchaalia.com',
  type: 'website' as const,
  twitterHandle: '@samibenchaalia',
};

export function SEO({
  title = defaultSEO.title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  twitterHandle = defaultSEO.twitterHandle,
  jsonLd,
}: SEOProps) {
  const fullTitle =
    title === defaultSEO.title ? title : `${title} | Sami Ben Chaalia`;

  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Sami Ben Chaalia',
    alternateName: 'SBC',
    url: 'https://samibenchaalia.com',
    image: 'https://samibenchaalia.com/profile-image.jpg',
    sameAs: [
      'https://github.com/samibenchaalia',
      'https://www.linkedin.com/in/samibenchaalia',
      'https://twitter.com/samibenchaalia',
      'https://www.upwork.com/freelancers/samibenchaalia',
      'https://www.freelancer.com/u/samibchaalia',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'TN',
      addressLocality: 'Tunisia',
    },
    description:
      'Expert full-stack developer from Tunisia specializing in TypeScript, React, Node.js, NestJS, PostgreSQL, and MongoDB',
    knowsAbout: [
      'TypeScript',
      'JavaScript',
      'React',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'Next.js',
      'Vue.js',
      'Angular',
      'Express.js',
      'GraphQL',
      'REST API',
      'Docker',
      'AWS',
      'Git',
      'CI/CD',
      'Agile',
      'Web Development',
      'Software Engineering',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Software Developer',
      educationRequirements:
        "Bachelor's degree in Computer Science or related field",
      experienceRequirements: '5+ years of professional experience',
      skills:
        'TypeScript, React, Node.js, NestJS, PostgreSQL, MongoDB, Full Stack Development',
    },
  };

  const finalJsonLd = jsonLd || baseJsonLd;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Sami Ben Chaalia" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Sami Ben Chaalia Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterHandle} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#10b981" />

      {/* Geo Meta Tags */}
      <meta name="geo.region" content="TN" />
      <meta name="geo.placename" content="Tunisia" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">{JSON.stringify(finalJsonLd)}</script>
    </Helmet>
  );
}
