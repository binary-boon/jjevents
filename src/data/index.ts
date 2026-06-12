/**
 * Single source of content for the JJ Events site.
 *
 * Each export below mirrors the shape of a Payload collection (see
 * src/payload/collections). Today, sections import these arrays directly.
 * Once you've seeded the collections, swap a section's default import for a
 * server-side `payload.find(...)` call and pass the result in as a prop —
 * the shapes match, so no component code has to change.
 */

/* ─── Navigation ─── */
export type NavLink = { label: string; href: string };
export const navLinks: NavLink[] = [
  { label: 'Atelier', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Celebrations', href: '#portfolio' },
  { label: 'Packages', href: '#packages' },
  { label: 'Journal', href: '#journal' },
];

/* ─── Site / brand ─── */
export type Social = { label: string; href: string; icon: 'instagram' | 'facebook' | 'pinterest' | 'whatsapp' };
export const site = {
  brandMark: 'JJ',
  brandWord: 'Events',
  tagline: "Udaipur's atelier for palace weddings and bespoke celebrations. Crafting timeless days since 2013.",
  established: '2013',
  phone: '+91 98290 00000',
  email: 'hello@jjevents.in',
  address: 'Udaipur, Rajasthan 342011',
  socials: [
    { label: 'Instagram', href: '#', icon: 'instagram' },
    { label: 'Facebook', href: '#', icon: 'facebook' },
    { label: 'Pinterest', href: '#', icon: 'pinterest' },
    { label: 'WhatsApp', href: '#', icon: 'whatsapp' },
  ] as Social[],
};

/* ─── Hero ─── */
export const hero = {
  eyebrow: `Udaipur · Est. ${site.established}`,
  // headline rendered with <em> on the second line in the component
  titleLead: 'The art of the',
  titleEmphasis: 'unforgettable',
  titleTail: 'celebration',
  subtitle:
    'From the first haldi to the final farewell, we stage palace weddings and bespoke events across Rajasthan — every ritual considered, every guest cared for, nothing left to chance.',
  image:
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80',
};

/* ─── Marquee ─── */
export const marqueeItems: string[] = [
  'Royal Weddings',
  'Destination Ceremonies',
  'Sangeet Nights',
  'Corporate Galas',
  'Engagements',
  'Mehndi & Haldi',
];

/* ─── Stats ─── */
export type Stat = { value: number; suffix?: string; label: string };
export const stats: Stat[] = [
  { value: 320, suffix: '+', label: 'Weddings Staged' },
  { value: 12, label: 'Years of Craft' },
  { value: 40, suffix: '+', label: 'Heritage Venues' },
  { value: 98, suffix: '%', label: 'Families Refer Us' },
];

/* ─── About ─── */
export const about = {
  eyebrow: 'The Atelier',
  image:
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=900&q=80',
  badgeNum: '12',
  badgeLabel: 'Years\nof Magic',
  paragraphs: [
    'JJ Events began in a small Jodhpur studio with a single belief — that a wedding is not an event to be managed, but a story to be told. Twelve years on, that belief still guides every mandap we raise and every guest list we shepherd.',
    'We are a **boutique team, not a factory.** We take a limited number of celebrations each season so that founders, not coordinators, are present at your every rasm — from the quiet haldi at dawn to the last dance under the stars.',
  ],
  signature: 'Jaya & Jeevan',
  signatureRole: 'Founders',
  signaturePlace: 'JJ Events, Udaipur',
};

/* ─── Services ─── */
export type Service = {
  icon: 'heart' | 'landmark' | 'music' | 'sparkles' | 'presentation' | 'home';
  title: string;
  description: string;
  tag: string;
};
export const services: Service[] = [
  {
    icon: 'heart',
    title: 'Royal Weddings',
    description:
      'Multi-day Rajasthani weddings within heritage forts and palaces — every ceremony designed, choreographed and hosted end to end.',
    tag: 'Full Planning · Décor · Hospitality',
  },
  {
    icon: 'landmark',
    title: 'Destination Events',
    description:
      'From the dunes of Jaisalmer to the lakes of Udaipur, we bring your guests somewhere unforgettable — and handle every logistic in between.',
    tag: 'Travel · Stay · Curation',
  },
  {
    icon: 'music',
    title: 'Sangeet & Mehndi',
    description:
      'Show-grade sangeet productions and intimate mehndi mornings — staging, sound, choreography and styling under one creative direction.',
    tag: 'Production · Choreography',
  },
  {
    icon: 'sparkles',
    title: 'Décor & Florals',
    description:
      "In-house design of mandaps, tablescapes and floral architecture — marigold, rose and brass rendered in your palette, not a catalogue's.",
    tag: 'Bespoke Design · Florals',
  },
  {
    icon: 'presentation',
    title: 'Corporate Galas',
    description:
      'Award nights, product launches and conferences staged with the same precision we bring to weddings — on brand, on time, on budget.',
    tag: 'Stage · Brand · AV',
  },
  {
    icon: 'home',
    title: 'Private Celebrations',
    description:
      'Engagements, anniversaries and milestone soirées — smaller in scale, no smaller in care, designed for the people who matter most.',
    tag: 'Intimate · Tailored',
  },
];

/* ─── Portfolio / Projects ─── */
export type Project = {
  category: string;
  name: string;
  location: string;
  image: string;
  size: 'tall' | 'wide' | 'half';
};
export const projects: Project[] = [
  {
    category: 'Royal Wedding',
    name: 'Aditya & Ishita',
    location: 'Mehrangarh Fort, Jodhpur · 600 guests',
    image:
      'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80',
    size: 'tall',
  },
  {
    category: 'Lakeside Wedding',
    name: 'Kabir & Naina',
    location: 'Udaipur · 3-day celebration',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1100&q=80',
    size: 'wide',
  },
  {
    category: 'Sangeet Night',
    name: 'The Mehta Sangeet',
    location: 'Umaid Bhawan Palace',
    image:
      'https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=900&q=80',
    size: 'half',
  },
  {
    category: 'Desert Wedding',
    name: 'Veer & Anaya',
    location: 'Jaisalmer Dunes · Sunset pheras',
    image:
      'https://images.unsplash.com/photo-1622467827417-bbe2237067a9?auto=format&fit=crop&w=900&q=80',
    size: 'half',
  },
];

/* ─── Testimonials ─── */
export type Testimonial = { quote: string; name: string; role: string };
export const testimonials: Testimonial[] = [
  {
    quote:
      'They did not plan our wedding — they understood it. Three days, four hundred guests, and not once did our families have to lift a worry. It felt like the celebration ran itself.',
    name: 'Ishita & Aditya Rathore',
    role: 'Palace Wedding · Jodhpur',
  },
  {
    quote:
      'We were planning from abroad and terrified. JJ became our eyes, our hands and our calm. Every detail we imagined showed up — and dozens we never thought of.',
    name: 'Naina & Kabir Malhotra',
    role: 'Destination Wedding · Udaipur',
  },
  {
    quote:
      "Our corporate gala had a thousand moving parts and not one of them slipped. Polished, on time, and somehow still warm. We've already booked them for next year.",
    name: 'Rohan Desai',
    role: 'Director, Marwar Industries',
  },
  {
    quote:
      'The sangeet they produced for us is the night our whole family still talks about. The staging, the flow, the energy — it felt like a film we got to live inside.',
    name: 'The Mehta Family',
    role: 'Sangeet · Umaid Bhawan',
  },
];

/* ─── Packages ─── */
export type PackageFeature = { label: string; included: boolean };
export type Package = {
  name: string;
  audience: string;
  price: string; // rendered as-is, e.g. "₹3.5L+" or "On Request"
  priceNote: string;
  featured?: boolean;
  ribbon?: string;
  features: PackageFeature[];
};
export const packages: Package[] = [
  {
    name: 'Mehndi',
    audience: 'Intimate Celebrations',
    price: '₹3.5L+',
    priceNote: 'For gatherings up to 150 guests',
    features: [
      { label: 'Single-day event planning', included: true },
      { label: 'Décor & floral styling', included: true },
      { label: 'Vendor coordination', included: true },
      { label: 'On-day event captain', included: true },
      { label: 'Multi-day choreography', included: false },
      { label: 'Guest travel & stay', included: false },
    ],
  },
  {
    name: 'Sangeet',
    audience: 'The Full Wedding',
    price: '₹12L+',
    priceNote: 'For celebrations of 300–600 guests',
    featured: true,
    ribbon: 'Most Loved',
    features: [
      { label: 'End-to-end multi-day planning', included: true },
      { label: 'Bespoke design & mandap', included: true },
      { label: 'Sangeet production & choreography', included: true },
      { label: 'Dedicated guest hospitality desk', included: true },
      { label: 'Founder present at every ritual', included: true },
      { label: 'Photography & film direction', included: true },
    ],
  },
  {
    name: 'Vivaah',
    audience: 'Destination & Royal',
    price: 'On Request',
    priceNote: 'Palace weddings, no ceiling on scale',
    features: [
      { label: 'Everything in Sangeet, elevated', included: true },
      { label: 'Heritage venue booking & permits', included: true },
      { label: 'Full guest travel & stay logistics', included: true },
      { label: 'Custom entertainment & artists', included: true },
      { label: 'Bespoke welcome & favour design', included: true },
      { label: 'White-glove concierge throughout', included: true },
    ],
  },
];

/* ─── Journal / Posts ─── */
export type Post = {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
};
export const posts: Post[] = [
  {
    category: 'Planning',
    date: '12 Months Out',
    title: 'The wedding timeline every Rajasthani family should keep',
    excerpt:
      'A month-by-month map of bookings, fittings and rituals — so the year before the day feels like joy, not panic.',
    image:
      'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Venues',
    date: 'Venue Guide',
    title: 'Seven palace venues in Rajasthan worth the journey',
    excerpt:
      "From Mehrangarh's ramparts to Udaipur's lakes — where to wed, what each costs, and how many guests each truly holds.",
    image:
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=800&q=80',
  },
  {
    category: 'Design',
    date: 'Décor Trends',
    title: 'Beyond marigold: the new palette of the Rajasthani mandap',
    excerpt:
      'How couples are trading the expected for the personal — heirloom textiles, brass, and florals that mean something.',
    image:
      'https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80',
  },
];

/* ─── FAQ ─── */
export type Faq = { q: string; a: string };
export const faqs: Faq[] = [
  {
    q: 'How far in advance should we book you?',
    a: "For a full palace wedding we recommend 8–12 months, chiefly because heritage venues and the best artists are reserved early. That said, we've staged beautiful celebrations in far less — tell us your date and we'll tell you honestly what's possible.",
  },
  {
    q: 'Do you only work in Jodhpur?',
    a: 'Jodhpur is home, but we plan across Rajasthan — Udaipur, Jaipur, Jaisalmer, Pushkar — and travel for destination weddings beyond the state when a family asks us to.',
  },
  {
    q: 'How many weddings do you take at once?',
    a: "Deliberately few. We cap our calendar each season so a founder is personally present at every celebration. It's the reason families trust us with the day that matters most.",
  },
  {
    q: 'Can you work with a budget we set?',
    a: "Always. We design to your number rather than around it — and we're transparent about where money is best spent and where it isn't. A clear budget early helps us protect what matters to you.",
  },
  {
    q: 'Do you handle vendors and payments too?',
    a: 'Yes — caterers, florists, artists, photographers, hospitality and transport are all coordinated and managed by us, on a single timeline, so you deal with one team rather than twenty.',
  },
];

/* ─── Contact form option lists ─── */
export const eventTypes = [
  'Wedding',
  'Destination Wedding',
  'Sangeet / Mehndi',
  'Engagement',
  'Corporate Gala',
  'Other Celebration',
];
export const guestRanges = ['Under 150', '150–300', '300–600', '600+'];
