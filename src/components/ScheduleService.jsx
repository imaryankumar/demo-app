// app/components/HowItWorks.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { Signal, Wifi, Battery } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Choose Your Service",
    description:
      "Open the app or website and select the service you need—from cleaning to grooming.",
    image: "/step-1.png",
  },
  {
    id: 2,
    title: "Pick Date, Time & Location",
    description: "Tell us when and where, and we'll take care of the rest.",
    image: "/step-2.png",
  },
  {
    id: 3,
    title: "Let Us Handle It",
    description:
      "A trained professional arrives on time and gets the job done—no hassle, no stress.",
    image: "/step-3.png",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepClick = (index) => {
    console.log("Clicked step:", index);
    setActiveStep(index);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
          {/* Left Side - Steps */}
          <div className="relative order-2 lg:order-1">
            {/* Vertical Line Background */}
            <div className="absolute left-0 top-0 w-1 h-full bg-gray-200 rounded-full"></div>

            {/* Animated Blue Line */}
            <div
              className="absolute left-0 top-0 w-1 bg-primary rounded-full transition-all duration-700 ease-in-out"
              style={{
                height: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
            ></div>

            {/* Steps List */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 pl-6 sm:pl-8 md:pl-10 lg:pl-12">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`cursor-pointer transition-all duration-300 ${
                    activeStep === index
                      ? "opacity-100"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  <h3
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 leading-tight transition-colors ${
                      activeStep === index ? "text-primary" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 lg:sticky lg:top-24">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="bg-gray-900 rounded-[40px] sm:rounded-[50px] shadow-2xl p-2 sm:p-3">
                <div className="bg-white rounded-[32px] sm:rounded-[42px] overflow-hidden relative aspect-[9/19.5]">
                  {/* Status Bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 pt-2 sm:pt-3 pb-1 sm:pb-2 flex items-center justify-between text-xs font-semibold bg-white">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <Signal className="w-3 h-3 sm:w-4 sm:h-4" />
                      <Wifi className="w-3 h-3 sm:w-4 sm:h-4" />
                      <Battery className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </div>

                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 sm:h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                  {/* App Screen */}
                  <div className="relative h-full w-full bg-gray-50">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-6xl mb-4">
                          {activeStep === 0 && "🎯"}
                          {activeStep === 1 && "📅"}
                          {activeStep === 2 && "✅"}
                        </div>
                        <p className="text-lg font-bold text-primary">
                          Step {activeStep + 1}
                        </p>
                        <p className="text-sm text-gray-600 mt-2">
                          {steps[activeStep].title}
                        </p>
                      </div>
                    </div>
                    <Image
                      key={activeStep}
                      src={steps[activeStep].image}
                      alt={steps[activeStep].title}
                      fill
                      className="object-cover object-top"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;