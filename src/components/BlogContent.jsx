"use client";

import Image from "next/image";
import Link from "next/link";
import { Images } from "@/assets";

const blogPosts = [
  {
    id: 1,
    image: Images.blogImg1,
    author: {
      name: "Alec Whitten",
      date: "17 Jan 2025",
    },
    title: "Bill Walsh leadership lessons",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tag 1", "Tag 2"],
    slug: "bill-walsh-leadership-lessons",
  },
  {
    id: 2,
    image: Images.blogImg2,
    author: {
      name: "Demi Wilkinson",
      date: "16 Jan 2025",
    },
    title: "PM mental models",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tag 1", "Tag 2"],
    slug: "pm-mental-models",
  },
  {
    id: 3,
    image:Images.blogImg3,
    author: {
      name: "Candice Wu",
      date: "15 Jan 2025",
    },
    title: "What is wireframing?",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Tag 1", "Tag 2"],
    slug: "what-is-wireframing",
  },
];

const BlogContent = () => {
  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">
            Recent Blogs
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group flex flex-col bg-white overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative w-full h-64 overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="flex flex-col gap-1 py-4">
                {/* Author & Date */}
                <div className="flex items-center gap-1 text-sm font-semibold">
                  <span className="text-primary">
                    {post.author.name}
                  </span>
                  <span className="text-primary">•</span>
                  <span className="text-primary">{post.author.date}</span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-3 flex-grow line-clamp-2">
                  {post.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-2 py-0.5 bg-purple-50 text-primary text-xs font-medium rounded-full border border-purple-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContent;