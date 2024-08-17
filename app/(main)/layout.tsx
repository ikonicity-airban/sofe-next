import Footer from "../ui/footer";
import { Metadata } from "next";
import Navbar from "../ui/main/navbar";
import React from "react";
import ScrollToTop from "../ui/scroll-to-top";
import clsx from "clsx";
import { montserrat } from "../ui/fonts";

const desc =
  "Welcome to Sofe Group Our Vision To become a leading brand in transforming the world through creative digital and innovative solutions Our Mission To pioneer creative digital and innovative solutions to individuals, businesses and finance SOFE GROUP is born out of a strong will to build 'Future Africa' through digital education in blockchain and future technologies. We are pioneering education and technological adoption with a showcase of creativity. Our brand promise is to provide the needed framework to launch Africa into leading the future global tech revolution We pioneer and facilitate new digital technology adoption and onboarding through our, webinars and campaign and have reached out to over 5,000 persons onsite and virtually across our various social media	platforms. We have launched various micro communities to meet the rising needs of our members. All our community members enjoy free education on blockchain and digital technologies, signals and	general opportunities ranging from Crypto signals, Crypto gems, fundamental and technical analysis, Crypto job training & alert, internship	and partnerships.";

export const metadata: Metadata = {
  title: {
    template: "%s | SOFE Group",
    default: "Welcome to SOFE Group",
  },
  authors: [
    {
      name: "Shedrach Ekpugbe",
      url: "https://linkedin.com/Shedrach",
    },
  ],
  description: desc,
  // openGraph: {
  //   title: {
  //     template: "%s | SOFE Group",
  //     default: "Welcome to SOFE Group",
  //   },
  //   locale: "ng",
  //   tags: "web3 ",
  // },
};

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={clsx(
        montserrat.style,
        "min-h-screen gradient-background w-full relative"
      )}
    >
      <section className="mx-auto">
        {/* Navbar */}
        <Navbar />
        <main className="relative mx-auto">{children}</main>
      </section>
      <ScrollToTop />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Layout;
