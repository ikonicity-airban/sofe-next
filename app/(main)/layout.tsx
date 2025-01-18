import { montserrat } from "@/components/ui/fonts";
import Footer from "@/components/ui/footer";
import MobileNav from "@/components/main/mobile-nav";
import Navbar from "@/components/main/navbar";
import ScrollToTop from "@/components/ui/scroll-to-top";
import clsx from "clsx";
import { Metadata } from "next";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      className={clsx(
        montserrat.style,
        "min-h-screen gradient-background w-full relative"
      )}
    >
      <section className="mx-auto relative">
        {/* Navbar */}
        <div className="hidden md:block">
          <Navbar />
        </div>
        <MobileNav />
        <main className="mx-auto">{children}</main>
      </section>
      <ScrollToTop />
      {/* Footer */}
      <Footer />
    </main>
  );
}

export default Layout;
