"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const AskQuestionCard = () => {
  return (
    <section className="w-full bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="bg-white rounded-3xl py-10 text-center shadow-lg ">
          {/* Logo */}
          <div className="flex justify-center mb-12">
            <div className="relative w-48 h-12">
              <Image
                src={Images.logo}
                alt="Right Hands Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Still have questions?
          </h2>

          {/* Description */}
          <p className="text-lg font-medium text-[#667085] mb-8 max-w-2xl mx-auto">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-4 bg-primary text-white text-lg font-semibold rounded-xl"
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