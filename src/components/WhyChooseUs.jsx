// app/components/WhyChooseUs.tsx
"use client";

import Link from "next/link";
import { Settings, Clock, Sparkles, Zap, Shield, Wallet } from "lucide-react";
import { Images } from "@/assets";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: Images.chooseIcon1,
    title: "Vetted Professionals",
    description:
      "Every service provider is background-checked and quality-tested before joining our platform.",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-600",
    titleColor: "text-purple-600",
    textColor: "text-purple-700",
  },
  {
    id: 2,
    icon: Images.chooseIcon2,
    title: "On-Time, Every Time",
    description:
      "We value your time—our pros arrive exactly when you need them, no delays.",
    bgColor: "bg-green-100",
    iconColor: "text-green-600",
    titleColor: "text-green-600",
    textColor: "text-green-700",
  },
  {
    id: 3,
    icon: Images.chooseIcon3,
    title: "Wide Range of Services",
    description:
      "From cleaning to pet grooming, book all your home needs in one place.",
    bgColor: "bg-cyan-100",
    iconColor: "text-cyan-600",
    titleColor: "text-cyan-600",
    textColor: "text-cyan-700",
  },
  {
    id: 4,
    icon: Images.chooseIcon4,
    title: "Same-Day Availability",
    description: "Need help today? Get services on-demand, often within hours.",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    titleColor: "text-orange-600",
    textColor: "text-orange-700",
  },
  {
    id: 5,
    icon: Images.chooseIcon5,
    title: "Safe & Secure",
    description:
      "From background-checked professionals to services delivered with care in your home.",
    bgColor: "bg-pink-100",
    iconColor: "text-pink-600",
    titleColor: "text-pink-600",
    textColor: "text-pink-700",
  },
  {
    id: 6,
    icon: Images.chooseIcon6,
    title: "No Hidden Fees",
    description:
      "What you see is what you pay—clear, upfront pricing every time.",
    bgColor: "bg-indigo-100",
    iconColor: "text-indigo-600",
    titleColor: "text-indigo-600",
    textColor: "text-indigo-700",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight">
              <span className="text-gray-400">WHY </span>
              <span className="text-primary">RIGHT HANDS?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Trusted by hundreds across the city—for a reason.
            </p>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/book-service"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl whitespace-nowrap">
              Book Your Service
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 lg:mb-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`${feature.bgColor} rounded-3xl p-6 md:p-8 transition-all duration-300 hover:shadow-lg`}>
                {/* Icon */}
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 md:mb-6 shadow-sm`}>
                  <Image
                    src={feature.icon}
                    width={20}
                    height={20}
                    alt="icons"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${feature.titleColor}`}>
                  {feature.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm md:text-base leading-relaxed ${feature.textColor}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button - Mobile */}
        <div className="flex justify-center lg:hidden mt-8">
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl">
            Book Your Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
