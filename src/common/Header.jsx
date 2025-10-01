"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Globe, ChevronDown, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Images } from "@/assets";
import { blogs, services, navItems } from "@/assets/constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full relative bg-white px-3 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between">
        {/* Left - Logo + Desktop Nav */}
        <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
          <Link href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src={Images.logo}
              alt="Right Hands Logo"
              width={120}
              height={36}
              className="w-auto h-8 sm:h-9 lg:h-10"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium text-gray-700">
            {navItems.map((item) =>
              item.mobileOnly ? null : item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="transition hover:text-primary flex items-center gap-1">
                    {item.name}
                    <span
                      className={`inline-block transform transition-transform duration-300 ${servicesOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <ChevronDown size={16} className="sm:size-5" />
                    </span>
                  </button>

                  {/* Mega Dropdown */}
                  {servicesOpen && (
                    <div className="fixed left-0 right-0 top-16 w-full border-b bg-white shadow-md z-50">
                      <div className="mx-auto max-w-7xl px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {/* Services */}
                        <div className="md:col-span-2">
                          <h3 className="text-primary font-semibold mb-4">
                            All Services
                          </h3>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={"#" || service.href}
                                className="flex items-center gap-3 rounded-lg p-2 hover:bg-purple-50 transition text-sm sm:text-base"
                              >
                                <service.icon className="h-5 w-5 text-gray-600" />
                                <span className="font-medium text-gray-700">
                                  {service.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Blogs */}
                        <div className="flex flex-col gap-4">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-primary">
                              Recent Blogs
                            </span>
                            <Link
                              href="#"
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                              View All →
                            </Link>
                          </div>
                          <div className="flex flex-col gap-3">
                            {blogs.map((blog) => (
                              <Link
                                key={blog.title}
                                href={"#" || blog.href}
                                className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50 transition"
                              >
                                <Image
                                  src={blog.image}
                                  alt={blog.title}
                                  width={100}
                                  height={100}
                                  className="rounded-md object-cover w-24 h-20 sm:w-32 sm:h-24"
                                />
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">
                                    {blog.title}
                                  </p>
                                  <p className="text-xs text-gray-500 line-clamp-2">
                                    {blog.desc}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={"#" || item.href}
                  className="transition hover:text-primary"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Actions (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-xs sm:text-sm cursor-pointer"
              >
                <Globe className="h-4 w-4" />
                English
                <span className="inline-block h-4 border-r border-gray-400"></span>
                <Image
                  src={Images.countryIcon}
                  alt="UAE Flag"
                  width={20}
                  height={20}
                  className="rounded-sm"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-4 bg-white">
              {/* unchanged content */}
            </DropdownMenuContent>
          </DropdownMenu>
          <span className="hidden lg:inline-block h-8 border-r border-gray-300"></span>
          <Button
            variant="outline"
            size="sm"
            className="text-xs sm:text-sm border-gray-300"
          >
            Log in
          </Button>
          <Button
            size="sm"
            className="bg-primary text-white text-xs sm:text-sm"
          >
            Sign up
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-gray-100"
            >
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 w-72 sm:w-80">
            {/* Accessibility fix */}
            <SheetTitle className="text-lg font-semibold mb-4">
            </SheetTitle>
            <nav className="flex flex-col gap-4 text-sm sm:text-base">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className="flex items-center justify-between w-full font-medium"
                      onClick={() =>
                        setMobileServicesOpen(!mobileServicesOpen)
                      }
                    >
                      {item.name}
                      <span>
                        {mobileServicesOpen ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-3 flex flex-col gap-2 pl-3 max-h-80 overflow-y-auto">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={"#" || service.href}
                            className="flex items-center gap-2 rounded-md p-2 hover:bg-purple-50 transition"
                          >
                            <service.icon className="h-4 w-4 text-primary" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={"#" || item.href}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
            <div className="mt-6 flex flex-col gap-3">
              <Button variant="outline">Log in</Button>
              <Button className="bg-primary text-white hover:bg-primary/90">
                Sign up
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
