"use client";

import Image from "next/image";
import Link from "next/link";
import { Images } from "@/assets";
import {
  companyLinks,
  locationLinks,
  businessLinks,
  servicesColumn1,
  servicesColumn2,
  legalLinks,
  socialLinks,
} from "@/assets/constant";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 border-gray-200">
      <div className="mx-auto max-w-7xl px-2 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and App Downloads */}
          <div className="lg:col-span-1">
            <Link href="#" className="inline-block mb-6">
              <Image
                src={Images.logo}
                alt="Right Hands Logo"
                width={140}
                height={40}
                priority
              />
            </Link>
            <div className="flex flex-col gap-3">
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={Images.appStore}
                  alt="Download on App Store"
                  width={135}
                  height={40}
                  className="hover:opacity-80 transition"
                  loading="lazy"
                />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={Images.playStore}
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                  className="hover:opacity-80 transition"
                  loading="lazy"
                />
              </Link>
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Image
                  src={Images.galleryStore}
                  alt="Explore it on AppGallery"
                  width={135}
                  height={40}
                  className="hover:opacity-80 transition"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={"#" || link.href}
                    className="text-base text-gray-700 font-semibold hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-medium text-gray-400 mb-4">
              Locations
            </h3>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={"#" || link.href}
                    className="text-base text-gray-700 font-semibold hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business */}
          <div>
            <h3 className="text-base font-medium text-gray-400 mb-4">
              Business
            </h3>
            <ul className="space-y-3">
              {businessLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={"#" || link.href}
                    className="text-base text-gray-700 font-semibold hover:text-primary transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - merged into 2 columns on mobile */}
          <div className="sm:col-span-2 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {servicesColumn1.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={"#" || link.href}
                      className="text-base text-gray-700 font-semibold hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-4 opacity-100">
                &nbsp;
              </h3>
              <ul className="space-y-3">
                {servicesColumn2.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={"#" || link.href}
                      className="text-base text-gray-700 font-semibold hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-wrap items-center gap-4 py-6 border-gray-200">
          {legalLinks.map((link) => (
            <Link
              key={link.name}
              href={"#" || link.href}
              className="text-sm font-normal text-gray-700 hover:text-primary transition underline"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            © 2025 Right Hands. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={"" || social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition"
                aria-label={social.name}
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  loading="lazy"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
