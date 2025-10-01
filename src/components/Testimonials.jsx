"use client";

import Image from "next/image";
import { Images } from "@/assets";
import BookServiceButton from "@/utils/BookServiceButton";

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
    <section className="w-full">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center  mb-6">
          <div className="inline-flex items-center">
            <Image
              src={Images.testimonialBadge}
              alt="header badge"
              className="w-32 lg:w-44 h-10 lg:h-12 object-contain"
              priority
            />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-center text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">
          <span className="text-gray-400">WHAT OUR </span>
          <span className="text-primary">CUSTOMERS</span>
          <span className="text-gray-400"> SAY</span>
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mb-8 md:mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl p-4 sm:p-6 transition-shadow bg-[#FAFAFF]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Image
                    key={i}
                    src={Images.Star}
                    width={15}
                    height={15}
                    alt="star"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 sm:gap-3">
                <Image
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <div className="flex items-center gap-1">
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      {testimonial.author.name}
                    </p>
                    {testimonial.author.verified && (
                      <Image
                        src={Images.VerifiedTick}
                        width={15}
                        height={15}
                        alt="verified"
                      />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-500 underline">
                    {testimonial.author.username}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <BookServiceButton />
      </div>
    </section>

  );
};

export default Testimonials;
