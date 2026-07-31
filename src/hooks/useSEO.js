import { Helmet } from 'react-helmet-async';

/**
 * Hook for managing SEO meta tags on a per-page basis
 * @param {Object} config - SEO configuration
 * @param {string} config.title - Page title
 * @param {string} config.description - Meta description
 * @param {string} config.canonical - Canonical URL (defaults to current page)
 * @param {string} config.ogImage - OG image URL
 * @param {string} config.ogType - OG type (website, article, etc.)
 * @param {string} config.twitterHandle - Twitter handle (optional)
 * @param {Array<Object>} config.schema - JSON-LD schema arrays
 * @param {string} config.keywords - Keywords (optional)
 * @returns {JSX.Element} Helmet component with meta tags
 */
export const useSEO = (config) => {
  const {
    title = 'Rafal Ciesielski | Quality Engineering',
    description = 'Quality engineering specialist focused on test automation, product quality, and reliable delivery.',
    canonical = typeof window !== 'undefined' ? window.location.href : 'https://rciesielski.dev/',
    ogImage = 'https://rciesielski.dev/og-image.png',
    ogType = 'website',
    twitterHandle = '@rciesielski3',
    keywords = '',
    schema = null,
  } = config;

  // Ensure title is reasonable length (60 chars recommended for SERPs)
  const truncatedTitle = title.length > 60 ? title.substring(0, 60) + '...' : title;

  // Ensure description is reasonable length (155-160 chars recommended)
  const truncatedDescription = description.length > 160
    ? description.substring(0, 157) + '...'
    : description;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{truncatedTitle}</title>
      <meta name="description" content={truncatedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={truncatedTitle} />
      <meta property="og:description" content={truncatedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Rafal Ciesielski Portfolio" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={truncatedTitle} />
      <meta name="twitter:description" content={truncatedDescription} />
      <meta name="twitter:image" content={ogImage} />
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

/**
 * Generate BreadcrumbList schema for any page
 * @param {Array<Object>} items - Breadcrumb items [{name, url}, ...]
 * @returns {Object} BreadcrumbList schema
 */
export const generateBreadcrumbSchema = (items) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

/**
 * Generate Organization schema
 * @returns {Object} Organization schema
 */
export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Rafal Ciesielski',
    url: 'https://rciesielski.dev',
    logo: 'https://rciesielski.dev/favicon.svg',
    sameAs: [
      'https://github.com/rciesielski3',
      'https://www.linkedin.com/in/rafał-ciesielski-820309100/',
    ],
  };
};
