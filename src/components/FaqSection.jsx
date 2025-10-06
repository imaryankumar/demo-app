"use client";

import { useState } from "react";
import { Images } from "@/assets";
import Image from "next/image";

const faqData = [
  {
    id: 1,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    id: 2,
    question: "Can I change my plan later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle, and we'll prorate any differences.",
  },
  {
    id: 3,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Your account will remain active until the end of your current billing period, and you won't be charged again.",
  },
  {
    id: 4,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information to your invoices such as PO numbers, tax IDs, or custom notes. This can be configured in your account settings under billing preferences.",
  },
  {
    id: 5,
    question: "How does billing work?",
    answer:
      "We bill on a monthly or annual basis depending on your chosen plan. Payments are automatically processed through your selected payment method at the start of each billing cycle.",
  },
  {
    id: 6,
    question: "How do I change my account email?",
    answer:
      "You can update your account email in your profile settings. We'll send a verification email to your new address to confirm the change before it takes effect.",
  },
];

const FAQSection = () => {
  const [openItems, setOpenItems] = useState([1]); // First item open by default

  const toggleItem = (id) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="w-full bg-gray-50 pt-8 md:pt-12 lg:pt-20">
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
        {/* Section Header */}
        <div className="mb-6 md:mb-8 lg:mb-12 text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2">
            <span className="text-gray-400">FREQUENTLY ASKED </span>
            <span className="text-primary">QUESTIONS</span>
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq) => {
            const isOpen = openItems.includes(faq.id);

            return (
              <div key={faq.id} className="border-b last:border-b-0">
                {/* Question Button */}
                <button
                  aria-label="faq-question"
                  onClick={() => toggleItem(faq.id)}
                  className={`w-full flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 ${
                    isOpen ? "pb-0" : "pb-4 sm:pb-6"
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base lg:text-md font-semibold text-[#181D27] pr-8">
                    {faq.question}
                  </span>

                  {/* Toggle Icon */}
                  <span className="flex-shrink-0 flex items-center justify-center transition-transform duration-300">
                    <Image
                      src={isOpen ? Images.faqMinus : Images.faqPlus}
                      width={20}
                      height={20}
                      alt={isOpen ? "minus" : "plus"}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                      loading="lazy"
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pt-0 pb-4 sm:pb-6 pr-4 sm:pr-6 lg:pr-16">
                    <p className="text-[#181D27] text-xs sm:text-sm lg:text-base font-normal leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
