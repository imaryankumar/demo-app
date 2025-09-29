import { Images } from "@/assets";
import Footer from "@/common/Footer";
import Header from "@/common/Header";
import BlogContent from "@/components/BlogContent";
import FaqSection from "@/components/FaqSection";
import HeroSection from "@/components/HeroSection";
import ScheduleService from "@/components/ScheduleService";
import ServicesGrid from "@/components/ServicesGrid";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import AskQuestionCard from "@/utils/AskQuestionCard";
import PocketPoster from "@/utils/PocketPoster";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <div className="min-h-90">
        <HeroSection/>
        <ServicesGrid/>
        <StatsSection/>
        <ScheduleService/>
        <PocketPoster headingText={"Invite & Earn 40 AED!"} description={"Love our service? Invite your friends and get rewarded every time they book. Get 40 AED in credit for every successful referral"} image={Images.coinImg} bgColor={"bg-[#FDB022]"} />
        <Testimonials />
        <PocketPoster headingText={"Everything You Need, In Your Pocket"} description={"Download the Right Hands app and manage your bookings anywhere."} image={Images.mobileImg} paddingTop="pt-28" bgColor={"bg-primary"} />
        <FaqSection />
        <AskQuestionCard />
        <BlogContent />
      </div>
      <Footer />
    </div>
  );
}
