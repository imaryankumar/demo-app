// app/components/WhyChooseUs.tsx
"use client";

import Link from "next/link";
import { Settings, Clock, Sparkles, Zap, Shield, Wallet } from "lucide-react";
import { Images } from "@/assets";
import Image from "next/image";
import BookServiceButton from "@/utils/BookServiceButton";

const features = [
  {
    id: 1,
    icon: Images.chooseIcon1,
    title: "Vetted Professionals",
    description:
      "Every service provider is background-checked and quality-tested before joining our platform.",
    bgColor: "bg-[#EBE9FE]",
    iconColor: "text-purple-600 bg-[#7F56D9]",
    titleColor: "text-purple-600",
    textColor: "text-purple-700 bg-[#FFFFFF4D]",
  },
  {
    id: 2,
    icon: Images.chooseIcon2,
    title: "On-Time, Every Time",
    description:
      "We value your time—our pros arrive exactly when you need them, no delays.",
    bgColor: "bg-[#DCFAE6]",
    iconColor: "text-green-600 bg-[#079455]",
    titleColor: "text-green-600",
    textColor: "text-green-700 bg-[#FFFFFF4D]",
  },
  {
    id: 3,
    icon: Images.chooseIcon3,
    title: "Wide Range of Services",
    description:
      "From cleaning to pet grooming, book all your home needs in one place.",
    bgColor: "bg-[#ECFDFF]",
    iconColor: "text-cyan-600 bg-[#06AED4]",
    titleColor: "text-cyan-600",
    textColor: "text-cyan-700 bg-[#FFFFFF4D]",
  },
  {
    id: 4,
    icon: Images.chooseIcon4,
    title: "Same-Day Availability",
    description: "Need help today? Get services on-demand, often within hours.",
    bgColor: "bg-orange-100 bg-[#FFFAEB]",
    iconColor: "text-orange-600 bg-[#FF9C66]",
    titleColor: "text-orange-600",
    textColor: "text-orange-700 bg-[#FFFFFF4D]",
  },
  {
    id: 5,
    icon: Images.chooseIcon5,
    title: "Safe & Secure",
    description:
      "From background-checked professionals to services delivered with care in your home.",
    bgColor: "bg-pink-100 bg-[#FDF2FA]",
    iconColor: "text-pink-600 bg-[#F670C7]",
    titleColor: "text-pink-600",
    textColor: "text-pink-700 bg-[#FFFFFF4D]",
  },
  {
    id: 6,
    icon: Images.chooseIcon6,
    title: "No Hidden Fees",
    description:
      "What you see is what you pay—clear, upfront pricing every time.",
    bgColor: "bg-indigo-100 bg-[#EEF4FF]",
    iconColor: "text-indigo-600 bg-[#8098F9]",
    titleColor: "text-indigo-600",
    textColor: "text-indigo-700 bg-[#FFFFFF4D]",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full py-8 md:py-24 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row text-center lg:text-left lg:items-center lg:justify-between mb-12 md:mb-16 gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
              <span className="text-gray-400">WHY </span>
              <span className="text-primary">RIGHT HANDS?</span>
            </h2>
            <p className="text-xs sm:text-base md:text-lg lg:text-xl text-gray-600">
              Trusted by hundreds across the city—for a reason.
            </p>
          </div>

          {/* CTA Button - Desktop */}
          <BookServiceButton />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8 lg:mb-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={`${feature.bgColor} rounded-2xl lg:rounded-3xl p-4 md:p-8`}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 ${feature.iconColor} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Image
                    src={feature.icon}
                    width={20}
                    height={20}
                    alt={`icon representing ${feature.title}`}
                    loading="lazy"
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg sm:text-xl md:text-2xl font-bold mb-4 ${feature.titleColor}`}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <div className="flex flex-col">
                  <p
                    className={`text-xs sm:text-sm md:text-base leading-relaxed rounded-xl text-start lg:text-center py-6 lg:py-3 px-2 lg:px-4 ${feature.textColor} min-h-[96px]`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
