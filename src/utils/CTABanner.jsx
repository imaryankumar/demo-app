"use client";

import { Images } from "@/assets";
import Image from "next/image";

const CTABanner = () => {
  return (
    <section className="w-full py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl bg-primary p-12">
        <div className="flex items-center justify-start gap-8">
          {/* Left Side - Shield Icon */}
          <div className="flex w-fit">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-60 lg:h-60">
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
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
