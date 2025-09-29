// app/components/StatsSection.tsx
"use client";

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
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-primary">TRUSTED BY THOUSANDS,</span>{" "}
            <span className="text-gray-400">EVERY DAY</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Right Hands is the go-to choice for fast, reliable home
            services—delivered with care and quality.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
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
        <div className="flex justify-center">
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;