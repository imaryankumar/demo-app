"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Check, Signal, Wifi, Battery } from "lucide-react";
import { Images } from "@/assets";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const intervalRef = useRef(null);

  const steps = [
    {
      title: "Choose Your Service",
      description:
        "Open the app or website and select the service you need—from cleaning to grooming.",
      image: Images.worksHome,
    },
    {
      title: "Pick Date, Time & Location",
      description: "Tell us when and where, and we'll take care of the rest.",
      image: Images.worksHome,
    },
    {
      title: "Let Us Handle It",
      description:
        "A trained professional arrives on time and gets the job done—no hassle, no stress.",
      image: Images.worksHome,
    },
  ];

  // Start auto-animation
  const startAutoAnimation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
  };

  // Handle manual step click
  const handleStepClick = (index) => {
    setActiveStep(index);
    startAutoAnimation(); // Restart animation from clicked step
  };

  // Initialize auto-animation
  useEffect(() => {
    startAutoAnimation();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <section className="w-full py-8 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center lg:justify-start mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-full">
            <Check className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Fast & Easy Booking
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-4xl md:text-5xl text-center lg:text-left font-bold mb-2 leading-tight">
          <span className="text-gray-400">HOW </span>
          <span className="text-primary">IT WORKS</span>
        </h2>

        <p className="text-xs sm:text-lg md:text-xl text-center lg:text-left text-gray-600 mb-8">
          In just a few taps, your service is scheduled.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Steps */}
          <div className="relative h-full">
            {/* Gray Background Line */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gray-200 rounded-full" />

            {/* Animated Purple Line */}
            <div
              className="absolute left-0 top-0 w-1 bg-primary rounded-full transition-all duration-1000 ease-in-out"
              style={{ height: `${((activeStep + 1) / 3) * 100}%` }}
            />

            {/* Steps */}
            <div className="pl-8 flex flex-col items-start justify-between md:pl-12 h-full">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                  className="cursor-pointer transition-all duration-500 py-8"
                  style={{
                    opacity: activeStep === idx ? 1 : 0.4,
                    transform: activeStep === idx ? "scale(1)" : "scale(0.95)",
                  }}>
                  <h3
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 transition-colors duration-500"
                    style={{
                      color: activeStep === idx ? "#7c3aed" : "#111827",
                    }}>
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="relative w-full bg-[#F9FAFB] rounded-xl px-16 pt-8 hidden lg:block">
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
              {steps.map((step, idx) => (
                <div key={idx} className="object-contain">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover object-top"
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
