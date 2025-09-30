// app/components/ProfessionalsBanner.tsx
"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const ProfessionalsBanner = () => {
  return (
    <section className="w-full py-4 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Content */}
          <div>
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
              <span className="text-[#17B26A]">PROFESSIONALS</span>{" "}
              <span className="text-gray-400">FOR</span>
              <br />
              <span className="text-gray-400">EVERY NEED</span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              At Right Hands, every service is handled by a specialist—trained,
              vetted, and ready to get the job done right.
            </p>

            {/* CTA Button */}
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#17B26A] text-white font-semibold text-lg rounded-xl hover:bg-[#17B26A] transition-colors shadow-lg hover:shadow-xl">
              Book Your Service
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              <Image
                src={Images.profIcon}
                alt="Right Hands Professionals"
                fill
                className="object-contain"
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
