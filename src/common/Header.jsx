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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Images } from "@/assets";
import { blogs, services, navItems } from "@/assets/constant";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="w-full relative bg-white">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={Images.logo}
              alt="Right Hands Logo"
              width={140}
              height={40}
              priority
            />
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-base font-medium text-gray-700">
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
                      className={`inline-block transform transition-transform duration-400 ${
                        servicesOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </button>

                  {/* Mega Dropdown */}
                  {servicesOpen && (
                    <div className="fixed left-0 right-0 top-16 w-fit mx-auto border-b bg-white shadow-md h-auto z-50">
                      <div className="mx-auto max-w-7xl px-4 py-4 grid grid-cols-3 gap-8">
                        {/* Services */}
                        <div className="col-span-2">
                          <h3 className="text-primary font-semibold mb-4">
                            All Services
                          </h3>
                          <div className="grid grid-cols-2">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="flex items-center gap-3 rounded-lg p-3 hover:bg-purple-50 transition"
                              >
                                <service.icon className="h-5 w-5 text-gray-600" />
                                <span className="text-sm font-medium text-gray-700">
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
                              href="/blog"
                              className="text-sm text-primary hover:underline flex items-center gap-1"
                            >
                              View All →
                            </Link>
                          </div>
                          <div className="flex flex-col justify-between h-full">
                            {blogs.map((blog) => (
                              <Link
                                key={blog.title}
                                href={blog.href}
                                className="flex items-start gap-3 rounded-lg p-2 hover:bg-gray-50 transition"
                              >
                                <Image
                                  src={blog.image}
                                  alt={blog.title}
                                  width={130}
                                  height={130}
                                  className="rounded-md object-cover"
                                />
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-gray-900 mb-1">
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
                  href={item.href}
                  className="transition hover:text-primary"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 text-sm border-gray-300"
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
            <DropdownMenuContent align="end" className="w-64 p-4">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-3">Country</p>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/qatar-flag.png"
                          alt="Qatar"
                          width={24}
                          height={24}
                          className="rounded-sm"
                        />
                        <span className="text-sm">Qatar</span>
                      </div>
                      <input
                        type="radio"
                        name="country"
                        className="w-4 h-4 text-primary"
                      />
                    </label>
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Image
                          src="/uae-flag.png"
                          alt="UAE"
                          width={24}
                          height={24}
                          className="rounded-sm"
                        />
                        <span className="text-sm">United Arab Emirates</span>
                      </div>
                      <input
                        type="radio"
                        name="country"
                        defaultChecked
                        className="w-4 h-4 text-primary"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-3">Language</p>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <span className="text-sm">English</span>
                      <input
                        type="radio"
                        name="language"
                        defaultChecked
                        className="w-4 h-4 text-primary"
                      />
                    </label>
                    <label className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <span className="text-sm">Arabic</span>
                      <input
                        type="radio"
                        name="language"
                        className="w-4 h-4 text-primary"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
           <span className="inline-block h-8 border-r border-gray-400"></span>
          <Button variant="outline" className="border-gray-300">
            Log in
          </Button>
          <Button className="bg-primary text-white">Sign up</Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-6 w-72">
            <nav className="flex flex-col gap-4 text-sm">
              {navItems.map((item) =>
                item.hasDropdown ? (
                  <div key={item.name}>
                    <button
                      className="flex items-center justify-between w-full font-medium"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {item.name}
                      <span>
                        {mobileServicesOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </span>
                    </button>
                    {mobileServicesOpen && (
                      <div className="mt-3 flex flex-col gap-2 pl-3 max-h-96 overflow-y-auto">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
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
                    href={item.href}
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
