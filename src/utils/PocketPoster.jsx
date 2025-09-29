// app/components/PocketPoster.tsx
"use client";

import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";

const PocketPoster = ({
  headingText,
  description,
  image,
  bgColor = "bg-primary",
  paddingTop="pt-0"
}) => {
  return (
    <section className="w-full py-12 md:py-16 lg:py-24">
      <div
        className={`mx-auto max-w-7xl px-4 md:px-8 lg:px-16 rounded-3xl lg:rounded-[40px] overflow-hidden ${bgColor}`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white py-12 md:py-16 lg:py-20">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              {headingText}
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl font-medium mb-6 md:mb-8 leading-relaxed opacity-95">
              {description}
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={Images.appleIcon}
                  alt="Download on App Store"
                  width={135}
                  height={40}
                  className="hover:opacity-80 transition"
                />
              </Link>
              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={Images.playIcon}
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="hover:opacity-80 transition"
                />
              </Link>
              <Link
                href="https://appgallery.huawei.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={Images.galleryIcon}
                  alt="Explore it on AppGallery"
                  width={135}
                  height={40}
                  className="hover:opacity-80 transition"
                />
              </Link>
            </div>
          </div>

          {/* Right Content - Mobile Mockup */}
         <div className={`relative h-[500px] flex items-center justify-center lg:justify-end ${paddingTop}`}>
            <Image
              src={image}
              alt="Right Hands App"
              width={600}
              height={700}
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PocketPoster;