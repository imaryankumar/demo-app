import { Star, Wrench, Heart, Box, Car, Scissors } from "lucide-react";
import { Images } from ".";

export const services = [
  { name: "General Cleaning", icon: Star, href: "/services/general-cleaning" },
  { name: "Auto Care", icon: Car, href: "/services/auto-care" },
  { name: "Movers & Packers", icon: Box, href: "/services/movers-packers" },
  {
    name: "Home Maintenance",
    icon: Wrench,
    href: "/services/home-maintenance",
  },
  { name: "Mobility & Wellness", icon: Heart, href: "/services/mobility" },
  { name: "Pet Grooming", icon: Scissors, href: "/services/pet-grooming" },
  { name: "Birds & Pigeon", icon: Star, href: "/services/birds-pigeon" },
  { name: "Health Care at Home", icon: Heart, href: "/services/health-care" },
  { name: "Dry & Laundry", icon: Box, href: "/services/dry-laundry" },
  { name: "Babysitting", icon: Heart, href: "/services/babysitting" },
  { name: "Gardening", icon: Star, href: "/services/gardening" },
  { name: "Maids", icon: Star, href: "/services/maids" },
  { name: "Pest & Germ Control", icon: Star, href: "/services/pest-control" },
  { name: "Hospitality", icon: Star, href: "/services/hospitality" },
];

export const blogs = [
  {
    title: "Auto Layout explained",
    desc: "Jump right in — get an overview of the basics and fundamentals of auto-layout so you can start right away.",
    href: "/blog/auto-layout",
    image: Images.serviceLogo2,
  },
  {
    title: "Sythesize data like a pro through affinity diagramming",
    desc: "Synthesis is the mysterious rabbit hole that all data scientists have to learn eventually. What makes affinity diagramming so valuable?",
    href: "/blog/data-pro",
    image: Images.serviceLogo3,
  },
  {
    title: "How to embrace inclusivity in UX research",
    desc: "In user experience research, your main job is to consider the user — every user — regardless of their age or ability.",
    href: "/blog/inclusive-ux",
    image: Images.serviceLogo1,
  },
];

export const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "About Us", href: "/about" },
  { name: "Right Hands Club", href: "/club" },
  { name: "Become A Pro", href: "/become-pro", mobileOnly: true },
  { name: "Help", href: "/help", mobileOnly: true },
  { name: "Blog", href: "/blog" },
];


export const companyLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export const locationLinks = [
  { name: "Qatar", href: "/locations/qatar" },
  { name: "United Arab Emirates", href: "/locations/uae" },
];

export const businessLinks = [
  { name: "Become A Pro", href: "/become-pro" },
  { name: "Become A Partner", href: "/become-partner" },
];

export const servicesColumn1 = [
  { name: "General Cleaning", href: "/services/general-cleaning" },
  { name: "Movers & Packers", href: "/services/movers-packers" },
  { name: "Mobility & Wellness", href: "/services/mobility-wellness" },
  { name: "Birds & Pigeon", href: "/services/birds-pigeon" },
  { name: "Dry & Laundry", href: "/services/dry-laundry" },
  { name: "Gardening", href: "/services/gardening" },
  { name: "Maids", href: "/services/maids" },
];

export const servicesColumn2 = [
  { name: "Pest & Germ Control", href: "/services/pest-control" },
  { name: "Auto Care", href: "/services/auto-care" },
  { name: "Home Maintenance", href: "/services/home-maintenance" },
  { name: "Pet Grooming", href: "/services/pet-grooming" },
  { name: "Health Care at Home", href: "/services/health-care" },
  { name: "Babysitting", href: "/services/babysitting" },
  { name: "Hospitality", href: "/services/hospitality" },
];

export const legalLinks = [
  { name: "Terms Of Use", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Cancellation Policy", href: "/cancellation" },
];

export const socialLinks = [
  { name: "Twitter", href: "https://twitter.com", icon: "/social/twitter.svg" },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: "/social/linkedin.svg",
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: "/social/facebook.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: "/social/instagram.svg",
  },
  {
    name: "WhatsApp",
    href: "https://whatsapp.com",
    icon: "/social/whatsapp.svg",
  },
  { name: "TikTok", href: "https://tiktok.com", icon: "/social/tiktok.svg" },
];