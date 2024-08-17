import "@/app/main.module.css";

import CTAForm from "../ui/main/CTA";
import Confetti from "../ui/effects/confetti";
import Divider from "../ui/divider";
import Features from "../ui/main/features";
import HeroSection from "../ui/main/hero-section";
import { Metadata } from "next";
import Services from "../ui/main/services";
import { Suspense } from "react";
import Team from "../ui/main/team";
import Testimonials from "../ui/main/testimonials";
import Welcome from "../ui/main/welcome-section";

export const metadata: Metadata = {
  title: {
    template: "Home"
  },
  keywords: ["Crypto","Blockchain", "DeFi", "Media", "Marketing", "SOFEGroup"]
}

function HomePage() {
  return (
    <section className="max-w-[90%] select-none">
      {/* <HeroSection /> */}
      {/* <Welcome /> */}
      {/* <Services count={3} /> */}
      {/* <Features /> */}
      {/* <Testimonials /> */}
      {/* <Divider /> */}
      <Team />
      {/* <div className="bg-[url('/map.png')] bg-fixed bg-contain bg-no-repeat bg-center">
        <div className="backdrop-blur-[4px] bg-[#0018]">
          <CTAForm />
        </div>
      </div> */}
    </section>
  );
}

export default HomePage;
