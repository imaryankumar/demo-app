"use client";

import { Images } from "@/assets";
import Image from "next/image";

const CTABanner = () => {
  return (
<section className="w-full py-16 overflow-hidden">
  <div className="mx-auto max-w-7xl bg-primary px-3 py-14 sm:p-14">
    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

      {/* Left Side - Shield Icon */}
      <div className="w-full lg:w-auto flex justify-center">
        <div className="relative w-40 h-40 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-60 lg:h-60">
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
      <div className="text-white text-center lg:text-left w-full lg:w-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          TRUSTED, VERIFIED PROFESSIONALS
        </h2>
        <p className="text-xs sm:text-lg md:text-xl leading-relaxed">
          Home services booked through Right Hands are carried out by thoroughly vetted, experienced professionals, ensuring quality and reliability. Our providers are carefully selected and highly rated by customers like you.
        </p>
      </div>

    </div>
  </div>
</section>

  );
};

export default CTABanner;
