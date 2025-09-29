import Footer from "@/common/Footer";
import Header from "@/common/Header";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="relative w-full h-full">
      <Header />
      <div className="min-h-90">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
