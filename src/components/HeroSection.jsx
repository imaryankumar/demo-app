// app/components/HeroSection.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Images } from "@/assets";

const HeroSection = () => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24 bg-gradient-to-b from-purple-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Rating Badge */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-green-200 rounded-full shadow-sm">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-semibold text-gray-700">
              4.9 Rated (500+)
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight">
          <span className="text-gray-400">YOUR </span>
          <span className="text-primary">ALL-IN-ONE</span>
          <span className="text-gray-400"> SERVICE</span>
          <br />
          <span className="text-gray-400">PROVIDER</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-10 max-w-4xl mx-auto">
          Book trusted cleaners, handymen, laundry, and more—right to your door,
          anytime.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-12 md:mb-16 lg:mb-20">
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Service
          </Link>
        </div>

        {/* Single Image */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-full max-w-6xl">
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