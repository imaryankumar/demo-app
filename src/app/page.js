"use client";

import dynamic from "next/dynamic";
import { Images } from "@/assets";
import Header from "@/common/Header";
import HeroSection from "@/components/HeroSection";

// ✅ Lazy load non-critical components
const Footer = dynamic(() => import("@/common/Footer"), { ssr: false });
const BlogContent = dynamic(() => import("@/components/BlogContent"), {
  ssr: false,
});
const FaqSection = dynamic(() => import("@/components/FaqSection"), {
  ssr: false,
});
const FeaturedServices = dynamic(
  () => import("@/components/FeaturedServices"),
  { ssr: false }
);
const ProfessionalsBanner = dynamic(
  () => import("@/components/ProfessionalsBanner"),
  { ssr: false }
);
const ScheduleService = dynamic(() => import("@/components/ScheduleService"), {
  ssr: false,
});
const ServicesGrid = dynamic(() => import("@/components/ServicesGrid"), {
  ssr: false,
});
const StatsSection = dynamic(() => import("@/components/StatsSection"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  ssr: false,
});
const AskQuestionCard = dynamic(() => import("@/utils/AskQuestionCard"), {
  ssr: false,
});
const CTABanner = dynamic(() => import("@/utils/CTABanner"), { ssr: false });
const PocketPoster = dynamic(() => import("@/utils/PocketPoster"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="relative w-full h-full">
      {/* 🚀 Critical for LCP/SEO */}
      <Header />
      <HeroSection />

      {/* 📦 Lazy-loaded below the fold */}
      <ServicesGrid />
      <CTABanner />
      <StatsSection />
      <FeaturedServices />
      <WhyChooseUs />
      <ScheduleService />
      <ProfessionalsBanner />

      <PocketPoster
        headingText="Invite & Earn 40 AED!"
        description="Love our service? Invite your friends and get rewarded every time they book. Get 40 AED in credit for every successful referral"
        image={Images.coinImg}
        bgColor="bg-[#FDB022]"
      />

      <Testimonials />

      <PocketPoster
        headingText="Everything You Need, In Your Pocket"
        description="Download the Right Hands app and manage your bookings anywhere."
        image={Images.mobileImg}
        paddingTop="pt-28"
        bgColor="bg-primary"
      />

      <FaqSection />
      <AskQuestionCard />
      <BlogContent />
      <Footer />
    </div>
  );
}
