"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const AskQuestionCard = () => {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        <div className="bg-white rounded-3xl py-8 md:py-10 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-4 md:mb-6 lg:mb-12">
            <div className="relative w-32 sm:w-36 md:w-40 lg:w-48 h-10 sm:h-11 md:h-12">
              <Image
                src={Images.logo}
                alt="Right Hands Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h2>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#667085] mb-4 md:mb-6 lg:mb-8 max-w-xl sm:max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex text-sm sm:text-lg md:text-xl items-center justify-center px-4 lg:px-5 py-3 text-white font-semibold rounded-lg lg:rounded-xl transition-colors shadow-lg bg-primary hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestionCard;
