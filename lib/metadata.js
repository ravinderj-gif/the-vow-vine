import { BRAND } from './constants';

export const siteMetadata = {
  title: `${BRAND.name} | Luxury Wedding Photography & Cinematic Films`,
  description: `${BRAND.tagline}. Premium wedding photography and cinematic wedding films in Hyderabad & across India.`,
  keywords: 'Luxury Wedding Photography, Wedding Films, Cinematic Wedding Films, Hyderabad Wedding Photography, Indian Wedding Photography, Destination Wedding Shoots',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://the-vow-vine.vercel.app',
  ogImage: '/assets/logo/instagram-profile.jpg',
};

export function jsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: BRAND.name,
    description: siteMetadata.description,
    url: siteMetadata.url,
    telephone: `+91${BRAND.phone}`,
    email: BRAND.email,
    sameAs: [BRAND.instagramUrl],
    areaServed: ['Hyderabad', 'India'],
    priceRange: '₹₹₹',
  };
}
