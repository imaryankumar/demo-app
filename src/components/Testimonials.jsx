"use client";

import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Images } from "@/assets";

const testimonials = [
  {
    id: 1,
    rating: 5,
    text: "We've been using Untitled to kick start every new project and can't imagine working without it.",
    author: {
      name: "Sienna Hewitt",
      username: "@siennahewitt",
      avatar: Images.Avatar,
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
      avatar: Images.Avatar1,
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
      avatar: Images.Avatar2,
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
      avatar: Images.Avatar3,
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
      avatar: Images.Avatar4,
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
      avatar: Images.Avatar5,
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
          <div className="inline-flex items-center gap-1 px-2 py-1 bg-[#F4F3FF] border border-purple-200 rounded-full">
            <Check className="w-4 h-4 text-[#5925DC]" />
            <span className="text-lg font-medium text-[#5925DC]">
              No Hidden Fees
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
          <span className="text-gray-400">WHAT OUR </span>
          <span className="text-primary">CUSTOMERS</span>
          <span className="text-gray-400"> SAY</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-xs transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                 <Image key={i} src={Images.Star} width={15} height={15} alt="star"/>
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
                      <Image src={Images.VerifiedTick} width={15} height={15} alt="verified"/>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 underline">
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
