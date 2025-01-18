import MobileNav from "@/components/main/mobile-nav";
import Navbar from "@/components/main/navbar";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[url('/Ellipse.png')] bg-fixed bg-contain bg-no-repeat bg-center">
      <Navbar />
      <main className="pt-24">{children}</main>
    </div>
  );
}

export default AuthLayout;
