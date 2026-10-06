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

export const serviceLinks = [
  {href:'/severe-grease-and-sludge',label:'Severe Grease and Sludge'},
  {href:'/tree-root-intrusions',label:'Tree Root Intrusions'},
  {href:'/recurring-clogs-and-slow-drains',label:'Recurring Clogs and Slow Drains'},
  {href:'/mineral-and-scale-deposits',label:'Mineral and Scale Deposits'},
  {href:'/preventative-maintenance',label:'Preventative Maintenance'},
  {href:'/how-hydro-jetting-works',label:'How Hydro Jetting Works'},
  {href:'/hydro-jetting-vs-snaking',label:'Hydro Jetting vs Snaking'},
];
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/hydro-jetting', label: 'Hydro Jetting' },
  { href: '/services', label: 'Services', children: true },
  { href: '/our-process', label: 'Our Process' },
  { href: '/service-areas', label: 'Neighborhoods', children: true },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
] as const;
export const footerServiceLinks = serviceLinks;
export const areaLinks = areas.map((a) => ({ href: `/service-areas/${a.slug}`, label: a.name }));
