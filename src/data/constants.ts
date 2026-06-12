import {
  Heart, Globe, Building2, Cake, Music, Flower2,
  Award, Camera, Star, Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ─── Navigation ───
export const NAV_LINKS = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Portfolio", id: "portfolio" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Packages", id: "packages" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
] as const;

// ─── Services ───
export interface ServiceData {
  icon: LucideIcon;
  title: string;
  desc: string;
  features: string[];
}

export const SERVICES: ServiceData[] = [
  {
    icon: Heart,
    title: "Wedding Planning",
    desc: "From intimate ceremonies to grand celebrations, we craft every detail of your dream wedding with precision and love. Full-service, partial planning, or day-of coordination — we've got you covered.",
    features: ["Venue Selection", "Vendor Management", "Theme & Décor", "Day-of Coordination"],
  },
  {
    icon: Globe,
    title: "Destination Weddings",
    desc: "Say 'I do' in paradise. We specialize in destination weddings across Rajasthan's palaces, Goa's beaches, and beyond — handling logistics, travel, and local vendor coordination seamlessly.",
    features: ["Location Scouting", "Travel Logistics", "Local Vendor Network", "Guest Management"],
  },
  {
    icon: Building2,
    title: "Corporate Events",
    desc: "Conferences, product launches, team retreats, and galas. We deliver flawless corporate experiences that reflect your brand's prestige and leave lasting impressions.",
    features: ["Brand Integration", "AV & Stage Setup", "Speaker Coordination", "Post-Event Analytics"],
  },
  {
    icon: Cake,
    title: "Birthday & Celebrations",
    desc: "Milestone birthdays, anniversaries, baby showers, and more. We create personalized celebrations that capture the essence of every special moment.",
    features: ["Theme Design", "Entertainment Booking", "Custom Cakes & Catering", "Photo/Video Coverage"],
  },
  {
    icon: Music,
    title: "Entertainment & Artists",
    desc: "From live bands and DJs to celebrity performers and traditional folk artists — we curate entertainment that elevates your event from great to unforgettable.",
    features: ["Artist Booking", "Sound & Lighting", "Dance Choreography", "Live Streaming"],
  },
  {
    icon: Flower2,
    title: "Décor & Styling",
    desc: "Floral installations, luxury mandaps, themed setups, and ambient lighting. Our décor team transforms any venue into a breathtaking visual experience.",
    features: ["Floral Design", "Lighting Design", "Mandap & Stage", "Table Styling"],
  },
];

// ─── Portfolio ───
export interface PortfolioItem {
  title: string;
  category: string;
  location: string;
  guests: string;
  gradient: string;
}

export const PORTFOLIO: PortfolioItem[] = [
  { title: "Royal Palace Wedding", category: "Wedding", location: "Udaipur", guests: "800+", gradient: "linear-gradient(135deg, #8B6F47 0%, #D4A574 100%)" },
  { title: "Tech Summit 2025", category: "Corporate", location: "Jaipur", guests: "1200+", gradient: "linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%)" },
  { title: "Golden Anniversary Gala", category: "Celebration", location: "Jodhpur", guests: "300+", gradient: "linear-gradient(135deg, #8E2344 0%, #D4637A 100%)" },
  { title: "Beach Destination Wedding", category: "Wedding", location: "Goa", guests: "400+", gradient: "linear-gradient(135deg, #1B4332 0%, #52B788 100%)" },
  { title: "Product Launch Night", category: "Corporate", location: "Mumbai", guests: "500+", gradient: "linear-gradient(135deg, #1A1A2E 0%, #E94560 100%)" },
  { title: "Fairy Tale Sweet 16", category: "Celebration", location: "Delhi", guests: "200+", gradient: "linear-gradient(135deg, #614385 0%, #516395 100%)" },
];

export const PORTFOLIO_FILTERS = ["All", "Wedding", "Corporate", "Celebration"];

// ─── Testimonials ───
export interface TestimonialData {
  name: string;
  event: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: TestimonialData[] = [
  {
    name: "Priya & Arjun Malhotra",
    event: "Royal Wedding, Udaipur",
    text: "JJ Events turned our dream into a reality that exceeded every expectation. Every single detail was perfect — from the floral mandap to the choreographed first dance. Our guests are still talking about it!",
    rating: 5,
  },
  {
    name: "Vikram Singhania",
    event: "Corporate Gala, Mumbai",
    text: "Impeccable professionalism. They handled our 1000+ guest corporate event with military precision while maintaining an atmosphere of warmth and elegance. Truly world-class.",
    rating: 5,
  },
  {
    name: "Meera & Karan Sharma",
    event: "Destination Wedding, Goa",
    text: "Planning a destination wedding felt overwhelming until we found JJ Events. They managed everything — flights, accommodations, local vendors — so we could just enjoy our special day.",
    rating: 5,
  },
];

// ─── Packages ───
export interface PackageData {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  popular: boolean;
}

export const PACKAGES: PackageData[] = [
  {
    name: "Silver",
    price: "₹2,50,000",
    tagline: "Essential Elegance",
    features: ["Day-of Coordination", "Basic Décor Setup", "Vendor Recommendations", "Timeline Management", "Up to 200 Guests", "8-Hour Coverage"],
    popular: false,
  },
  {
    name: "Gold",
    price: "₹6,50,000",
    tagline: "Premium Experience",
    features: ["Full Event Planning", "Premium Décor & Styling", "Complete Vendor Management", "Entertainment Booking", "Up to 500 Guests", "Unlimited Coverage", "Pre-Event Ceremonies", "Custom Invitations"],
    popular: true,
  },
  {
    name: "Platinum",
    price: "₹15,00,000",
    tagline: "Ultimate Luxury",
    features: ["End-to-End Luxury Service", "Destination Event Support", "Celebrity Entertainment", "Luxury Décor & Florals", "Unlimited Guests", "Multi-Day Coverage", "Guest Travel Management", "Dedicated Event Manager", "Post-Event Film", "Honeymoon Planning"],
    popular: false,
  },
];

// ─── Blog ───
export interface BlogPostData {
  title: string;
  category: string;
  readTime: string;
  gradient: string;
}

export const BLOG_POSTS: BlogPostData[] = [
  { title: "Top 10 Palace Wedding Venues in Rajasthan", category: "Venues", readTime: "5 min", gradient: "linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(26,15,5,0.2) 100%)" },
  { title: "2026 Wedding Décor Trends You Need to Know", category: "Trends", readTime: "4 min", gradient: "linear-gradient(135deg, rgba(142,35,68,0.2) 0%, rgba(212,99,122,0.2) 100%)" },
  { title: "How to Plan a 500-Guest Wedding on Budget", category: "Planning", readTime: "7 min", gradient: "linear-gradient(135deg, rgba(27,67,50,0.2) 0%, rgba(82,183,136,0.2) 100%)" },
];

// ─── FAQ ───
export interface FAQData {
  question: string;
  answer: string;
}

export const FAQS: FAQData[] = [
  { question: "How far in advance should I book?", answer: "We recommend booking 6-12 months in advance for weddings and 3-6 months for other events. For destination weddings or peak-season dates, 12-18 months is ideal." },
  { question: "Do you handle destination events outside Rajasthan?", answer: "Absolutely! We manage events across India and internationally. We have vendor networks in Goa, Kerala, Mumbai, Delhi, Bali, Dubai, and more." },
  { question: "Can I customize a package to fit my needs?", answer: "Every package is fully customizable. We use our tiers as starting points and tailor everything — from décor to entertainment — based on your vision and budget." },
  { question: "What is your cancellation policy?", answer: "We offer flexible rescheduling. Cancellations made 90+ days before the event receive a 70% refund. Detailed terms are shared during the booking process." },
  { question: "Do you provide catering services directly?", answer: "We partner with top caterers across cuisines — from royal Rajasthani thalis to international fine dining. We manage the entire food experience on your behalf." },
];

// ─── Stats ───
export const STATS = [
  { num: 500, suffix: "+", label: "Events Delivered" },
  { num: 50, suffix: "+", label: "Venue Partners" },
  { num: 12, suffix: "", label: "Years Experience" },
  { num: 100, suffix: "%", label: "Happy Clients" },
];

// ─── Marquee items ───
export const MARQUEE_ITEMS = [
  "Weddings", "Corporate Galas", "Destination Events", "Birthday Celebrations",
  "Sangeet & Mehendi", "Product Launches", "Luxury Décor", "Artist Management",
  "Anniversaries", "Baby Showers",
];

// ─── Contact info ───
export const CONTACT_INFO = [
  { title: "Visit Us", text: "Jodhpur, Rajasthan, India" },
  { title: "Call Us", text: "+91 98XXX XXXXX" },
  { title: "Email Us", text: "hello@jjevents.in" },
  { title: "Working Hours", text: "Mon – Sat, 10 AM – 7 PM" },
];
