// app/components/Testimonials.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "We've been using Untitled to kick start every new project and can't imagine working without it.",
    author: {
      name: "Sienna Hewitt",
      username: "@siennahewitt",
      avatar: "/testimonials/sienna.jpg",
      verified: true,
    },
  },
  {
    id: 2,
    rating: 5,
    text: "From concept to completion, Untitled helps us deliver outstanding designs faster than ever.",
    author: {
      name: "Kari Rasmussen",
      username: "@itskari",
      avatar: "/testimonials/kari.jpg",
      verified: true,
    },
  },
  {
    id: 3,
    rating: 5,
    text: "Every project starts with Untitled which has 10x'd our output. It saves us time while keeping the quality top-notch.",
    author: {
      name: "Amélie Laurent",
      username: "@alaurent_",
      avatar: "/testimonials/amelie.jpg",
      verified: true,
    },
  },
  {
    id: 4,
    rating: 5,
    text: "Untitled has quickly become our go-to resource for every design project. The results are consistently amazing.",
    author: {
      name: "Aliah Lane",
      username: "@aliah_ux",
      avatar: "/testimonials/aliah.jpg",
      verified: true,
    },
  },
  {
    id: 5,
    rating: 5,
    text: "Untitled offers exactly what we need to get started quickly. It's helped us cut down on design time significantly!",
    author: {
      name: "Eduard Franz",
      username: "@eduardfranz",
      avatar: "/testimonials/eduard.jpg",
      verified: true,
    },
  },
  {
    id: 6,
    rating: 5,
    text: "Untitled offers everything we need to get started on UI projects quickly. We go from zero to one, insanely fast.",
    author: {
      name: "Lily-Rose Chedjou",
      username: "@lilyrose",
      avatar: "/testimonials/lily.jpg",
      verified: true,
    },
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-purple-200 rounded-full">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              No Hidden Fees
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-16">
          <span className="text-gray-400">WHAT OUR </span>
          <span className="text-primary">CUSTOMERS</span>
          <span className="text-gray-400"> SAY</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.author.name}
                    </p>
                    {testimonial.author.verified && (
                      <svg
                        className="w-4 h-4 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    {testimonial.author.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/book-service"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Service
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
