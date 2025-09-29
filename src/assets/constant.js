import { Star, Wrench, Heart, Box, Car, Scissors } from "lucide-react";
import { Images } from "./images";

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
