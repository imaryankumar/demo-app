// app/components/ServicesGrid.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Images } from "@/assets";

const services = [
  {
    id: 1,
    name: "General Cleaning",
    icon: Images.frame1,
    href: "/services/general-cleaning",
  },
  {
    id: 2,
    name: "Movers & Packers",
    icon: Images.frame2,
    href: "/services/movers-packers",
  },
  {
    id: 3,
    name: "Mobility & Wellness",
    icon: Images.frame3,
    href: "/services/mobility-wellness",
  },
  {
    id: 4,
    name: "Birds & Pigeon",
    icon: Images.frame4,
    href: "/services/birds-pigeon",
  },
  {
    id: 5,
    name: "Dry & Laundry",
    icon: Images.frame5,
    href: "/services/dry-laundry",
  },
  {
    id: 6,
    name: "Gardening",
    icon: Images.frame6,
    href: "/services/gardening",
  },
  {
    id: 7,
    name: "Pest & Germ Control",
    icon: Images.frame7,
    href: "/services/pest-control",
  },
  {
    id: 8,
    name: "Auto Care",
    icon: Images.frame8,
    href: "/services/auto-care",
  },
  {
    id: 9,
    name: "Home Maintenance",
    icon: Images.frame9,
    href: "/services/home-maintenance",
  },
  {
    id: 10,
    name: "Pet Grooming",
    icon: Images.frame10,
    href: "/services/pet-grooming",
  },
  {
    id: 11,
    name: "Health Care at Home",
    icon: Images.frame11,
    href: "/services/health-care",
  },
  {
    id: 12,
    name: "Babysitting",
    icon: Images.frame12,
    href: "/services/babysitting",
  },
  {
    id: 13,
    name: "Maids",
    icon: Images.frame13,
    href: "/services/maids",
  },
  {
    id: 14,
    name: "Hospitality",
    icon: Images.frame14,
    href: "/services/hospitality",
  },
];

const ServicesGrid = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-start">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full mb-2 w-fit">
              <Check className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Vetted Professionals
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 leading-tight">
              <span className="text-primary">SERVICES</span>{" "}
              <span className="text-gray-400">WE OFFER</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              One app. All the services you need—from daily cleaning to expert
              fixes.
            </p>
          </div>

          {/* Right Side - Services Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="flex flex-col items-center gap-3 p-4 bg-gray-50 rounded-2xl group">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src={service.icon}
                    alt={service.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 text-center leading-tight">
                  {service.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
