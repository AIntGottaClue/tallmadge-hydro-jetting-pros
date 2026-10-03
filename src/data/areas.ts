export type Area = {
  slug: string;
  name: string;
  county: string;
  place: 'city' | 'village';
  title: string;
  intro: string;
  paragraphs: string[];
  calls: string[];
  nearby: string[];
};

export const areas: Area[] = [
  {
    slug: 'tallmadge', name: 'Tallmadge', county: 'Summit', place: 'city',
    title: 'Where we focus',
    intro: 'Tallmadge is the center of our local focus. Hydro jetting requests here start with a short description of the drain and the property.',
    paragraphs: [
      'Tallmadge was laid out in 1807 around a central square that later became Tallmadge Circle, with the rest of the city built out on a grid. A grid of older streets usually means a mix of building eras, and a mix of eras means a mix of drain lines: older material in some blocks, newer pipe in others.',
      'That is why the first questions are about the line and not the town. Which drain is slow, how long has it been happening, and is more than one fixture affected? Those answers help decide whether hydro jetting fits or whether a camera inspection should come first.',
      'Part of the city reaches into Portage County, so a Tallmadge address can sit in either county. Include the full address with your request so it is clear where the line is.',
    ],
    calls: ['Recurring slow drains on older streets', 'Kitchen and main lines that back up again after a quick fix', 'Businesses that want a line checked before buildup becomes a stoppage'],
    nearby: ['akron', 'cuyahoga-falls', 'stow', 'munroe-falls'],
  },
  {
    slug: 'akron', name: 'Akron', county: 'Summit', place: 'city',
    title: 'Akron and the Summit County seat',
    intro: 'Akron is the largest city near Tallmadge, and we take hydro jetting requests for Akron homes and businesses.',
    paragraphs: [
      'Akron grew up around the Ohio and Erie Canal, and its history includes a stoneware and sewer pipe industry. A city that old has a lot of drain line of different ages under it, so what is in the ground at one address can be very different from the next.',
      'With that range, the line matters more than the address. Pipe material, condition and access all affect whether hydro jetting is a good fit, and a camera inspection can show what the water will be working against before anyone commits to a method.',
      'Akron homes, rentals and small commercial properties are all fair requests. Tell us the drain, the symptom and the property type, and we will talk through whether jetting is the right next step.',
    ],
    calls: ['Older residential lines with repeat slowdowns', 'Commercial and food-service lines with grease buildup', 'Rental properties that need the line understood before a repair decision'],
    nearby: ['tallmadge', 'cuyahoga-falls', 'stow', 'munroe-falls'],
  },
  {
    slug: 'cuyahoga-falls', name: 'Cuyahoga Falls', county: 'Summit', place: 'city',
    title: 'Cuyahoga Falls and the river',
    intro: 'Cuyahoga Falls is directly north of Akron, and we take hydro jetting requests across the city.',
    paragraphs: [
      'The city was founded in 1812 as Manchester and later renamed for the Cuyahoga River and the falls along its southern edge. Neighborhoods here run from older streets near the river to newer development farther out, so pipe age and material vary a lot from one block to the next.',
      'Second-largest city in Summit County means a wide mix of properties too: single-family homes, multi-unit buildings and commercial space along the main corridors. Each one asks something different of its drain line.',
      'Send the address, the drain that is giving you trouble, and what you have noticed. If a camera look would help, that is a good first step before hydro jetting is considered.',
    ],
    calls: ['Older residential lines near the river', 'Multi-unit buildings sharing one drain line', 'Commercial kitchens and grease lines'],
    nearby: ['akron', 'stow', 'munroe-falls', 'tallmadge'],
  },
  {
    slug: 'stow', name: 'Stow', county: 'Summit', place: 'city',
    title: 'Stow, next door to Tallmadge',
    intro: 'Stow borders Tallmadge on the south side of town, and we take hydro jetting requests from Stow homes and businesses.',
    paragraphs: [
      'Stow is a suburb in east-central Summit County that borders Kent, Tallmadge, Munroe Falls, Hudson and Cuyahoga Falls. That puts it close to most of the communities we already look after, which keeps a Stow request simple to follow up on.',
      'Residential streets here come from different building periods, and the lines under them age differently. Roots in an older lateral, grease in a kitchen line and plain buildup over time are all common reasons a drain slows down.',
      'If your drain keeps coming back after a quick clearing, say so in your request. Recurring problems are often a sign that the pipe wall needs cleaning and not just a path through the middle.',
    ],
    calls: ['Slow drains that return soon after snaking', 'Kitchen and laundry lines with grease and debris', 'Commercial lines that need a regular cleaning plan'],
    nearby: ['tallmadge', 'kent', 'munroe-falls', 'cuyahoga-falls'],
  },
  {
    slug: 'kent', name: 'Kent', county: 'Portage', place: 'city',
    title: 'Kent and Portage County',
    intro: 'Kent sits east of Tallmadge along the Cuyahoga River, and we take hydro jetting requests from Kent homes and businesses.',
    paragraphs: [
      'Kent is the largest city in Portage County and home to Kent State University. A university town has a lot of rentals and a lot of turnover, and a slow drain in a rental often goes unnoticed until it becomes a backup.',
      'Restaurants and other food-service businesses also run steady loads through shared lines, which is where grease buildup tends to start. Hydro jetting is one way to clean the pipe interior, and a camera inspection can show whether it fits.',
      'Include the address and the type of property when you reach out. We will ask what the drain is doing and how often, then talk through the options.',
    ],
    calls: ['Rental properties with recurring backups', 'Food-service lines with grease buildup', 'Older homes with slow main drains'],
    nearby: ['stow', 'munroe-falls', 'mogadore', 'tallmadge'],
  },
  {
    slug: 'mogadore', name: 'Mogadore', county: 'Summit and Portage', place: 'village',
    title: 'Mogadore, a village on the county line',
    intro: 'Mogadore is just east of Tallmadge, and we take hydro jetting requests from village homes and businesses.',
    paragraphs: [
      'Mogadore is a village that sits in both Summit and Portage counties. It was first settled in 1807 and was known as Bradleyville until 1825. It is a small place, around 2 square miles, so many properties are close neighbors with shared history and similar pipe.',
      'Smaller communities often have a long mix of home ages on the same street. A camera look is a sensible first step when you do not know what material or condition the line is in.',
      'If you are in Mogadore and a drain keeps slowing down, send the address and what you have noticed. Mention whether more than one fixture is affected, since that helps point to the main line.',
    ],
    calls: ['Homes with several slow fixtures at once', 'Older lines where the pipe material is unknown', 'Small businesses with a drain that backs up on a schedule'],
    nearby: ['tallmadge', 'kent', 'munroe-falls', 'akron'],
  },
  {
    slug: 'munroe-falls', name: 'Munroe Falls', county: 'Summit', place: 'city',
    title: 'Munroe Falls on the river',
    intro: 'Munroe Falls is a short drive from Tallmadge, and we take hydro jetting requests from homes and businesses in the city.',
    paragraphs: [
      'Munroe Falls is a small city on the Cuyahoga River in east-central Summit County, with about 5,000 residents as of the 2020 census. Its neighbors include Tallmadge, Stow, Cuyahoga Falls and Kent, so it sits in the middle of our service area.',
      'On lots with mature trees close by, tree roots are a common reason a sewer lateral slows down. Whether roots are the cause is something a camera inspection can answer before any cleaning method is chosen.',
      'Tell us the address and what the drain has been doing. We will help you work out whether hydro jetting is the right next step.',
    ],
    calls: ['Sewer laterals near mature trees', 'Homes with a drain that slows every few months', 'Small commercial properties with a shared line'],
    nearby: ['tallmadge', 'stow', 'cuyahoga-falls', 'kent'],
  },
];

export const areaBySlug: Record<string, Area> = Object.fromEntries(areas.map((a) => [a.slug, a]));
