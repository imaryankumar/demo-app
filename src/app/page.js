import { Images } from "@/assets";
import Footer from "@/common/Footer";
import Header from "@/common/Header";
import BlogContent from "@/components/BlogContent";
import FaqSection from "@/components/FaqSection";
import FeaturedServices from "@/components/FeaturedServices";
import HeroSection from "@/components/HeroSection";
import ProfessionalsBanner from "@/components/ProfessionalsBanner";
import ScheduleService from "@/components/ScheduleService";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import AskQuestionCard from "@/utils/AskQuestionCard";
import CTABanner from "@/utils/CTABanner";
import PocketPoster from "@/utils/PocketPoster";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <HeroSection />
      <ServicesGrid />
      <CTABanner />
      <StatsSection />
      <FeaturedServices />
      <WhyChooseUs />
      <ProfessionalsBanner />
      <ScheduleService />
      <PocketPoster
        headingText={"Invite & Earn 40 AED!"}
        description={
          "Love our service? Invite your friends and get rewarded every time they book. Get 40 AED in credit for every successful referral"
        }
        image={Images.coinImg}
        bgColor={"bg-[#FDB022]"}
      />
      <Testimonials />
      <PocketPoster
        headingText={"Everything You Need, In Your Pocket"}
        description={
          "Download the Right Hands app and manage your bookings anywhere."
        }
        image={Images.mobileImg}
        paddingTop="pt-28"
        bgColor={"bg-primary"}
      />
      <FaqSection />
      <AskQuestionCard />
      <BlogContent />
      <Footer />
    </div>
  );
}
