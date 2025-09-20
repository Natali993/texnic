import Head from 'next/head';
import { baseMetadata } from '@/lib/metadata';
import { ukrainianMetaTags, generateHreflangLinks } from '@/lib/hreflang';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: object[];
  path?: string;
}

export function SEOHead({
  title,
  description,
  keywords = [],
  canonicalUrl,
  ogImage = '/tehnic-removebg-preview.png',
  structuredData = [],
  path = ''
}: SEOHeadProps) {
  const fullTitle = title || `${baseMetadata.siteName}`;
  const fullDescription = description || 'Професійні електромонтажні послуги в Рівному та Рівненській області';
  const fullCanonicalUrl = canonicalUrl || `${baseMetadata.siteUrl}${path}`;
  const hreflangLinks = generateHreflangLinks(path);

  return (
    <Head>
      {/* Basic meta tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Hreflang links */}
      {hreflangLinks.map((link, index) => (
        <link
          key={index}
          rel={link.rel}
          hrefLang={link.hrefLang}
          href={link.href}
        />
      ))}
      
      {/* Open Graph tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${baseMetadata.siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content={baseMetadata.siteName} />
      <meta property="og:locale" content="uk_UA" />
      
      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`${baseMetadata.siteUrl}${ogImage}`} />
      
      {/* Ukrainian localization meta tags */}
      {Object.entries(ukrainianMetaTags).map(([key, value]) => (
        <meta key={key} name={key} content={value} />
      ))}
      
      {/* Additional SEO meta tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      <meta name="author" content="Технік" />
      <meta name="publisher" content="Технік" />
      <meta name="copyright" content="© 2025 Технік. Всі права захищені." />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Contact information */}
      <meta name="contact" content={baseMetadata.email} />
      <meta name="reply-to" content={baseMetadata.email} />
      
      {/* Business information */}
      <meta name="business:contact_data:street_address" content="вул. Київська, 42" />
      <meta name="business:contact_data:locality" content="Рівне" />
      <meta name="business:contact_data:region" content="Рівненська область" />
      <meta name="business:contact_data:postal_code" content="33000" />
      <meta name="business:contact_data:country_name" content="Україна" />
      <meta name="business:contact_data:phone_number" content="+380673606483" />
      <meta name="business:contact_data:email" content={baseMetadata.email} />
      
      {/* Structured data */}
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      
      {/* Favicon and app icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* DNS prefetch for performance */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      
      {/* Preconnect for critical resources */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}
