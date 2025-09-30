"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const AskQuestionCard = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-2">
        <div className="bg-white rounded-3xl py-10 text-center shadow-lg">
          {/* Logo */}
          <div className="flex justify-center mb-6 lg:mb-12">
            <div className="relative w-40 lg:w-48 h-12">
              <Image
                src={Images.logo}
                alt="Right Hands Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-xl lg:text-3xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h2>

          {/* Description */}
          <p className="text-xs lg:text-lg font-medium text-[#667085] mb-4 lg:mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex text-sm sm:text-lg md:text-xl items-center justify-center px-4 lg:px-5 py-3 bg-primary text-white font-semibold rounded-lg lg:rounded-xl hover:bg-primary/90 transition-colors shadow-lg"
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