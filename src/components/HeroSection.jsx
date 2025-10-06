"use client";

import Image from "next/image";
import { Images } from "@/assets";
import BookServiceButton from "@/utils/BookServiceButton";

const HeroSection = () => {
  return (
    <section className="w-full overflow-hidden mt-0 lg:mt-4 mb-16 px-2">
      <div className="mx-auto max-w-7xl pt-6 md:pt-16 rounded-3xl bg-[#F9FAFB]">
        {/* Rating Badge */}
        <div className="flex justify-center mb-2">
          <div className="inline-flex items-center">
            <Image
              src={Images.headerBadge}
              alt="header badge"
              className="w-32 lg:w-44 h-10 lg:h-12 object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center primary-text font-extrabold mb-4 leading-tight">
          <span className="text-gray-400">YOUR </span>
          <span className="text-primary">ALL-IN-ONE</span>
          <span className="text-gray-400"> SERVICE</span>{" "}
          <span className="text-gray-400">PROVIDER</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center font-medium secondary-text text-accent mb-4 max-w-7xl mx-auto">
          Book trusted cleaners, handymen, laundry, and more—right to your door,
          anytime.
        </p>

        {/* CTA Button */}
        <div className="mb-10">
          <BookServiceButton />
        </div>

        {/* Single Image */}
        <div className="relative w-full flex justify-center">
          <span className="absolute inset-0 rounded-full bg-purple-400/20 blur-2xl"></span>
          <div className="relative w-full h-[280px] md:h-[600px] lg:h-[400px] xl:h-[480px] max-w-6xl mx-auto overflow-hidden">
            <Image
              src={Images.bannerImage}
              alt="Right Hands App Screens"
              fill
              sizes="100vw"
              className="object-cover lg:object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
