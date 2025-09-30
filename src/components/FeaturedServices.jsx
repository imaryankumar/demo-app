// app/components/FeaturedServices.tsx
"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description: "Trusted professionals for spotless results",
    discount: "25% OFF On First Booking - Code RH32",
    image: Images.feature1,
    href: "/services/home-cleaning",
  },
  {
    id: 2,
    title: "Handyman Service",
    description: "Quick fixes and reliable repairs",
    discount: "25% OFF On First Booking - Code RH32",
    image: Images.feature2,
    href: "/services/handyman",
  },
  {
    id: 3,
    title: "Laundry & Dry Cleaning",
    description: "We pick up, clean, and deliver",
    discount: "25% OFF On First Booking - Code RH32",
    image: Images.feature3,
    href: "/services/laundry",
  },
];

const FeaturedServices = () => {
  return (
    <section className="w-full py-20 bg-[#FAFAFF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
            <span className="text-primary">YOU NAME IT.</span>{" "}
            <span className="text-gray-400">WE DO IT.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Book your service in less than a minute and enjoy a special discount
            on your first booking!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {services.map((service) => (
            <div key={service.id} className="overflow-hidden group">
              {/* Image */}
              <div className="relative h-64 md:h-72 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="py-4">
                {/* Discount Badge */}
                <p className="text-sm font-semibold text-primary mb-2">
                  {service.discount}
                </p>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600 mb-4">
                  {service.description}
                </p>

                {/* Book Now Button */}
                <Link
                  href={service.href}
                  className="block w-full text-center py-3 px-6 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
