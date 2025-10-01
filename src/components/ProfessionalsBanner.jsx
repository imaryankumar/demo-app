// app/components/ProfessionalsBanner.tsx
"use client";

import { Images } from "@/assets";
import BookServiceButton from "@/utils/BookServiceButton";
import Image from "next/image";
import Link from "next/link";

const ProfessionalsBanner = () => {
  return (
    <section className="w-full py-8 lg:py-12 bg-gray-50">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div className="px-2 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight text-center lg:text-left">
              <span className="text-[#17B26A]">PROFESSIONALS</span>{" "}
              <span className="text-gray-400">FOR</span>{" "}
              <span className="text-gray-400">EVERY NEED</span>
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 mb-5 lg:mb-10 leading-relaxed text-center lg:text-left">
              At Right Hands, every service is handled by a specialist—trained,
              vetted, and ready to get the job done right.
            </p>

            {/* CTA Button */}
            <div className="flex items-center justify-center lg:justify-start">
              <BookServiceButton bgColor="bg-[#17B26A]" />
            </div>
          </div>


          {/* Right Side - Image */}
          <div className="relative w-full">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={Images.profIcon}
                alt="Right Hands Professionals"
                fill
                className="object-cover lg:object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsBanner;
