"use client";

import Image from "next/image";
import Link from "next/link";
import { Images } from "@/assets";

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden mb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 md:pt-16 lg:pt-20 rounded bg-[#F9FAFB]">
        {/* Rating Badge */}
        <div className="flex justify-center mb-2">
          <div className="inline-flex items-center">
            <Image
              src={Images.headerBadge}
              alt="hader badge"
              width={150}
              height={150}
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 leading-tight">
          <span className="text-gray-400">YOUR </span>
          <span className="text-primary">ALL-IN-ONE</span>
          <span className="text-gray-400"> SERVICE</span>
          <br />
          <span className="text-gray-400">PROVIDER</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-accent mb-4 max-w-7xl mx-auto">
          Book trusted cleaners, handymen, laundry, and more—right to your door,
          anytime.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-10">
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            Book Your Service
          </Link>
        </div>

        {/* Single Image */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-7xl">
            <Image
              src={Images.bannerImage}
              alt="Right Hands App Screens"
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
