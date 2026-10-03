import { siteConfig } from '../data/siteConfig';
import { areas } from '../data/areas';

export const SITE_URL = siteConfig.origin;

export const business = {
  name: siteConfig.brand,
  description: 'Hydro jetting for residential and commercial drain lines in Tallmadge, Ohio and nearby communities.',
  phoneDisplay: siteConfig.phoneDisplay,
  phoneHref: `tel:${siteConfig.phoneHref}`,
  phoneE164: siteConfig.phoneHref,
  city: 'Tallmadge',
  region: 'OH',
  regionName: 'Ohio',
  country: 'US',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hydro-jetting', label: 'Hydro Jetting' },
  { href: '/services', label: 'Services' },
  { href: '/our-process', label: 'Our Process' },
  { href: '/service-areas', label: 'Service Areas', children: true },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;

export const footerServiceLinks = [
  { href: '/hydro-jetting', label: 'Hydro Jetting' },
  { href: '/services#residential-drain-cleaning', label: 'Residential Drain Cleaning' },
  { href: '/services#commercial-and-grease-lines', label: 'Commercial and Grease Lines' },
  { href: '/services#sewer-camera-inspection', label: 'Sewer Camera Inspection' },
  { href: '/our-process', label: 'Our Process' },
] as const;

export const serviceOptions = [
  'Residential drain cleaning',
  'Commercial and grease lines',
  'Sewer camera inspection',
  'Not sure, I will describe it below',
] as const;

export const areaLinks = areas.map((a) => ({ href: `/service-areas/${a.slug}`, label: a.name }));
