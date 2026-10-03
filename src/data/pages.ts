import { business } from '../lib/site';
const P = business.phoneDisplay;

export type InfoItem = { title: string; text: string; id?: string };
export type PageInfo = {
  path: string; name: string; title: string; description: string; headline: string; intro: string;
  sectionTitle: string; sectionText: string; items: InfoItem[]; related: { label: string; href: string };
};
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const withIds = (items: InfoItem[]) => items.map((i) => ({ ...i, id: slug(i.title) }));

export const pages: Record<string, PageInfo> = {
  home: {
    path: '/', name: 'Home',
    title: 'Hydro Jetting in Tallmadge, OH | Tallmadge Hydro Jetting Pros',
    description: 'Hydro jetting for residential and commercial drain lines in Tallmadge, Ohio. Learn how water-jet line cleaning works and request service.',
    headline: 'A clearer path through the line.',
    intro: 'When a drain keeps slowing down, the obstruction may be farther in than a household tool can reach. Hydro jetting uses directed water flow to clean the inside of a suitable drain line.',
    sectionTitle: 'One specialty. A practical next step.',
    sectionText: 'Tallmadge Hydro Jetting Pros focuses exclusively on hydro jetting applications for nearby homes and businesses. Share what is happening and where; we can discuss whether the method fits the line.',
    items: withIds([
      { title: 'Residential drain cleaning', text: 'For recurring or stubborn buildup in suitable household drain lines, hydro jetting can help clear material along the pipe interior.' },
      { title: 'Commercial and grease lines', text: 'Commercial drains and grease-line buildup call for a method suited to the line and the condition. The details matter before choosing an approach.' },
      { title: 'Sewer camera inspection', text: 'A camera inspection can help assess a line and locate concerns before deciding whether hydro jetting is appropriate.' },
    ]),
    related: { label: 'See how hydro jetting works', href: '/hydro-jetting' },
  },
  hydro: {
    path: '/hydro-jetting', name: 'Hydro Jetting',
    title: 'Hydro Jetting Service | Tallmadge Hydro Jetting Pros',
    description: 'Understand hydro jetting for drains in Tallmadge, Ohio: how water pressure clears buildup, where it may fit, and what to discuss first.',
    headline: 'Hydro jetting, made clear.',
    intro: 'Hydro jetting directs pressurized water through a drain line to loosen and carry away accumulated material. Whether it is suitable depends on the pipe, access, and what is causing the blockage.',
    sectionTitle: 'Water moves through the line to clean it.',
    sectionText: 'A jetting hose is guided into an accessible drain line. A purpose-built nozzle sends water through the pipe to address buildup on the interior surface. The setup and approach depend on the line and the situation.',
    items: withIds([
      { title: 'A line-specific approach', text: 'Pipe material, condition, diameter, access, and the type of buildup all affect whether hydro jetting is the right fit.' },
      { title: 'For more than a surface opening', text: 'Unlike a simple opening at the drain, jetting is intended to work within a suitable section of pipe and address material along its interior.' },
      { title: 'Questions come first', text: 'Describe the symptoms, the affected fixture or line, and any known history. That context helps frame the next conversation.' },
    ]),
    related: { label: 'Explore service applications', href: '/services' },
  },
  services: {
    path: '/services', name: 'Services',
    title: 'Hydro Jetting Services | Tallmadge Hydro Jetting Pros',
    description: 'Explore hydro-jetting applications for residential drains, commercial and grease lines, and sewer camera inspection in Tallmadge, OH.',
    headline: 'The right conversation starts with the line.',
    intro: 'Every drain has a different use and condition. These are hydro-jetting applications to discuss based on the line and its condition.',
    sectionTitle: 'Hydro jetting for homes and businesses.',
    sectionText: 'The work is centered on hydro jetting and related line assessment. Share the type of property, affected drain, and what you have noticed so the situation can be discussed clearly.',
    items: withIds([
      { title: 'Residential Drain Cleaning', text: 'Hydro jetting may be considered for suitable household drain lines with recurring or stubborn buildup.' },
      { title: 'Commercial and Grease Lines', text: 'Food-service and other commercial lines can collect grease and debris. Line condition and access help determine a suitable approach.' },
      { title: 'Sewer Camera Inspection', text: 'Camera inspection can provide a view inside an accessible line and help identify conditions relevant to hydro jetting.' },
    ]),
    related: { label: 'Read the process', href: '/our-process' },
  },
  process: {
    path: '/our-process', name: 'Our Process',
    title: 'Our Hydro Jetting Process | Tallmadge Hydro Jetting Pros',
    description: 'See the straightforward steps behind a hydro jetting request in Tallmadge, Ohio, from describing the drain issue to discussing line suitability.',
    headline: 'Understand the line before choosing the method.',
    intro: 'Good service begins with the details: what is backing up, where it is happening, and what is known about the line. From there, suitability can be discussed before jetting is considered.',
    sectionTitle: 'Clear steps. No assumed answers.',
    sectionText: 'A short description gives the conversation a useful starting point. Each line and obstruction is different, so the next step depends on the information available.',
    items: withIds([
      { title: 'Describe the issue', text: 'Tell us which drain or area is affected, how often it occurs, and whether more than one fixture is involved.' },
      { title: 'Discuss access and condition', text: 'Share what you know about the pipe, past concerns, and access points. An inspection may help clarify what is happening inside.' },
      { title: 'Consider hydro jetting', text: 'If line conditions make it appropriate, the hydro jetting approach can be discussed. If not, that limitation should be part of the conversation.' },
    ]),
    related: { label: 'Request a conversation', href: '/contact' },
  },
  areas: {
    path: '/service-areas', name: 'Service Areas',
    title: 'Hydro Jetting Service Areas | Tallmadge Hydro Jetting Pros',
    description: 'Tallmadge Hydro Jetting Pros focuses on hydro jetting in Tallmadge, Ohio, and nearby communities including Akron, Stow, Kent, and Mogadore.',
    headline: 'Hydro jetting close to home.',
    intro: 'Tallmadge is the center of our local focus. Nearby communities can use the request form to share a location and ask about hydro jetting for a specific line.',
    sectionTitle: 'Serving Tallmadge and surrounding towns.',
    sectionText: 'Each town below has its own page. Include your town and the affected drain when you reach out so the request can be understood in context.',
    items: [],
    related: { label: 'Ask about your location', href: '/contact' },
  },
  faq: {
    path: '/faq', name: 'FAQ',
    title: 'Hydro Jetting FAQs | Tallmadge Hydro Jetting Pros',
    description: 'Answers to common questions about drain hydro jetting, suitable pipe conditions, camera inspection, and requesting service near Tallmadge, Ohio.',
    headline: 'Hydro jetting questions, answered.',
    intro: 'A few practical answers about how the method works and what information helps when discussing a drain-line concern.',
    sectionTitle: 'Before you request hydro jetting.',
    sectionText: 'The best approach depends on the pipe and the material in it. These answers explain the basics; share your specific situation to discuss the next step.',
    items: [
      { title: 'What is hydro jetting?', text: 'Hydro jetting sends directed, pressurized water through a suitable drain line to loosen and move accumulated material from the pipe interior.' },
      { title: 'Can every drain line be hydro jetted?', text: 'No. Pipe material, condition, access, and the obstruction matter. A line should be considered on its own merits before hydro jetting is used.' },
      { title: 'When might a camera inspection help?', text: 'A camera inspection can help show the interior of an accessible line and provide useful context about a blockage or pipe condition.' },
      { title: 'What should I include in a request?', text: 'Include the affected drain or area, what you have observed, your town, and any known information about the line or prior concerns.' },
      { title: 'Do you handle general plumbing?', text: 'No. Tallmadge Hydro Jetting Pros focuses exclusively on hydro jetting and related drain-line applications described on this site.' },
      { title: 'How do I request service?', text: `Use the request form on this page or call ${P}.` },
    ],
    related: { label: 'Read about hydro jetting', href: '/hydro-jetting' },
  },
  contact: {
    path: '/contact', name: 'Contact',
    title: 'Request Hydro Jetting | Tallmadge Hydro Jetting Pros',
    description: `Contact Tallmadge Hydro Jetting Pros about hydro jetting in Tallmadge, Ohio. Call ${P} or share your drain-line details.`,
    headline: 'Start with the details that matter.',
    intro: 'A clear description helps frame a useful conversation: where the issue is, what symptoms you see, and what you already know about the line.',
    sectionTitle: 'Prefer to call?',
    sectionText: `For a direct conversation, call ${P}. Or use the request form on this page and we will follow up using the phone number or email you provide.`,
    items: [
      { title: 'Phone', text: `Call ${P} to discuss a hydro-jetting request.` },
      { title: 'Location', text: 'Tallmadge, Ohio. Nearby towns are listed on the service areas page.' },
      { title: 'Useful details', text: 'Mention the drain, symptoms, property type, and any known pipe history or access points.' },
    ],
    related: { label: 'See our service areas', href: '/service-areas' },
  },
  privacy: {
    path: '/privacy', name: 'Privacy',
    title: 'Privacy | Tallmadge Hydro Jetting Pros',
    description: 'Privacy information for visitors to the Tallmadge Hydro Jetting Pros website, including how request form details are used.',
    headline: 'Privacy, plainly stated.',
    intro: 'This page explains what to expect when browsing this site and using its request form.',
    sectionTitle: 'What happens to a request.',
    sectionText: 'When you submit the request form, the details you enter are sent so the request can be followed up by phone or email. They are used to respond to your request.',
    items: [
      { title: 'Information you enter', text: 'The request form asks for your name, phone, service address and a description of the drain issue. Email is optional. Share only what is needed to describe the request.' },
      { title: 'Calling instead', text: `If you prefer, call ${P}. Do not include sensitive information such as payment details in a website message.` },
      { title: 'Analytics', text: 'This site uses Google Analytics to count visits and see which pages are used. It collects usage information from your browser, not the contents of your request form.' },
      { title: 'Other sites', text: 'This page does not describe data practices for services outside this website. See the terms page for information about using this site.' },
    ],
    related: { label: 'Read terms of use', href: '/terms' },
  },
  terms: {
    path: '/terms', name: 'Terms',
    title: 'Terms of Use | Tallmadge Hydro Jetting Pros',
    description: 'Terms for using the Tallmadge Hydro Jetting Pros website and its informational hydro jetting content.',
    headline: 'Terms of use.',
    intro: 'The site shares general information about hydro jetting and provides a way to request service.',
    sectionTitle: 'Information is a starting point.',
    sectionText: 'Website content is general and is not a diagnosis of any particular drain line. Suitability depends on the pipe, access, and conditions at the time of assessment.',
    items: [
      { title: 'General information', text: 'Descriptions of hydro jetting and its applications are general. Whether a specific line is suitable depends on its condition and access.' },
      { title: 'Request form', text: `Submitting the form is a request to be contacted. It does not schedule work or set a price. You can also call ${P}.` },
      { title: 'Use of this site', text: 'Use the site lawfully and do not rely on general page content as a substitute for discussing a specific line condition.' },
    ],
    related: { label: 'Contact about hydro jetting', href: '/contact' },
  },
};
