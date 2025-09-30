// app/components/StatsSection.tsx
"use client";

import BookServiceButton from "@/utils/BookServiceButton";
import Link from "next/link";

const stats = [
  {
    id: 1,
    number: "31,500+",
    label: "Appointment Completed",
  },
  {
    id: 2,
    number: "+12,000",
    label: "Happy Customers",
  },
  {
    id: 3,
    number: "+500",
    label: "Daily Sessions",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full pb-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-4 lg:mb-14">
          <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-2 leading-tight">
            <span className="text-primary">TRUSTED BY THOUSANDS,</span>{" "}
            <span className="text-gray-400">EVERY DAY</span>
          </h2>
          <p className="text-xs sm:text-lg md:text-xl text-gray-600 max-w-7xl mx-auto">
            Right Hands is the go-to choice for fast, reliable home
            services—delivered with care and quality.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="py-2 mb-4 lg:mb-12">
          <div className="rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-0">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center bg-[#FAFAFA] py-4 lg:py-16 rounded-2xl lg:rounded-none">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-3 md:mb-4">
                  {stat.number}
                </h3>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
       <BookServiceButton/>
      </div>
    </section>
  );
};

export default StatsSection;
