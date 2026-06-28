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
    'Sami Ben Chaalia — Senior Full-Stack Engineer & AI Developer | MVPs in Days',
  description:
    'Hire Sami Ben Chaalia, a Senior Full-Stack Engineer with 6+ years of experience. I build MVPs, AI products, and business software for startups and agencies — fast, fixed-price, production-ready. Book a free call today.',
  keywords:
    'hire senior full stack developer, MVP development, AI integration developer, freelance software engineer, React NestJS developer, fast MVP sprint, SaaS development, AI automation, startup engineer, Sami Ben Chaalia, TypeScript expert, full stack developer Tunisia',
  image: 'https://sami.benchaalia.com/og-image.png',
  url: 'https://sami.benchaalia.com',
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
    url: 'https://sami.benchaalia.com',
    image: 'https://sami.benchaalia.com/profile-image.jpg',
    sameAs: [
      'https://github.com/SamyBchaalia',
      'https://www.linkedin.com/in/sami-ben-chaalia-recruitement',
      'https://twitter.com/samibenchaalia',
      'https://www.upwork.com/freelancers/samibenchaalia',
      'https://www.freelancer.com/u/samibchaalia',
    ],
    jobTitle: 'Senior Full-Stack Engineer & AI Developer',
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
      'Senior Full-Stack Engineer with 6+ years of experience building MVPs, AI products, and business software for startups and agencies. Fixed-price packages starting at €1,500.',
    knowsAbout: [
      'MVP Development',
      'AI Integration',
      'SaaS Development',
      'TypeScript',
      'JavaScript',
      'React',
      'Node.js',
      'NestJS',
      'PostgreSQL',
      'MongoDB',
      'Next.js',
      'Angular',
      'Express.js',
      'REST API',
      'Docker',
      'AWS',
      'CI/CD',
      'Web Development',
      'Software Engineering',
      'AI Automation',
    ],
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Senior Software Engineer',
      experienceRequirements: '6+ years of professional experience',
      skills:
        'MVP Development, AI Integration, TypeScript, React, Node.js, NestJS, PostgreSQL, Full Stack Development',
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
