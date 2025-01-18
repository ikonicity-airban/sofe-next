// import "@/app/main.module.css";

import Divider from "@/components/ui/divider";
import Features from "@/components/main/features";
import HeroSection from "@/components/main/hero-section";
import { Metadata } from "next";
import Services from "@/components/main/services";
import { Suspense } from "react";
import Team from "@/components/main/team";
import Testimonials from "@/components/main/testimonials";
import CTAForm from "@/components/main/CTA";

export const metadata: Metadata = {
  title: "Home",
  keywords: ["Crypto", "Blockchain", "DeFi", "Media", "Marketing", "SOFEGroup"],
};

function HomePage() {
  return (
    <section className="relative w-full select-none">
      <HeroSection />
      <Suspense fallback={<h4>Loading...</h4>}>
        <Services count={3} />
      </Suspense>
      <Features />
      <Testimonials />
      <Divider />
      <Team />
      <div className="bg-[url('/map.png')] bg-fixed bg-contain bg-no-repeat bg-center">
        <div className="backdrop-blur-[4px] bg-[#0018]">
          <CTAForm />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
