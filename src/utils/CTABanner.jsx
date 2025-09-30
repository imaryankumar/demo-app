"use client";

import { Images } from "@/assets";
import Image from "next/image";

const CTABanner = () => {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24  overflow-hidden">
      <div className="mx-auto max-w-7xl bg-primary rounded">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Side - Shield Icon */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src={Images.trustedIcon}
                alt="Trusted Professionals Shield"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              TRUSTED, VERIFIED PROFESSIONALS
            </h2>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed">
              Home services booked through Right Hands are carried out by
              thoroughly vetted, experienced professionals, ensuring quality and
              reliability. Our providers are carefully selected and highly rated
              by customers like you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
