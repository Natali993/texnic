import { baseMetadata } from './metadata';

// Hreflang configuration for Ukrainian localization
export const hreflangConfig = {
  'uk-UA': baseMetadata.siteUrl,
  'uk': baseMetadata.siteUrl,
  'x-default': baseMetadata.siteUrl
};

// Generate hreflang links for pages
export function generateHreflangLinks(path: string = '') {
  const fullUrl = path ? `${baseMetadata.siteUrl}${path}` : baseMetadata.siteUrl;
  
  return Object.entries(hreflangConfig).map(([lang, baseUrl]) => ({
    rel: 'alternate',
    hrefLang: lang,
    href: path ? `${baseUrl}${path}` : baseUrl
  }));
}

// Meta tags for language and region
export const languageMetaTags = {
  'http-equiv': 'content-language',
  content: 'uk-UA'
};

// Additional meta tags for Ukrainian localization
export const ukrainianMetaTags = {
  'og:locale': 'uk_UA',
  'og:locale:alternate': 'uk',
  'twitter:lang': 'uk',
  'content-language': 'uk-UA',
  'language': 'Ukrainian',
  'geo.region': 'UA-56', // Rivne region code
  'geo.placename': 'Рівне',
  'geo.position': '50.6199;26.2516',
  'ICBM': '50.6199, 26.2516'
};
