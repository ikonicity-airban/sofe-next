import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Open_Sans, Poppins } from "next/font/google";

const openSans = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const poppinsSans = localFont({
  src: "./fonts/Poppins.woff2",
  variable: "--font-poppins-sans",
  weight: "100 900",
});
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

const desc =
  "Welcome to Sofe Group Our Vision To become a leading brand in transforming the world through creative digital and innovative solutions Our Mission To pioneer creative digital and innovative solutions to individuals, businesses and finance SOFE GROUP is born out of a strong will to build 'Future Africa' through digital education in blockchain and future technologies. We are pioneering education and technological adoption with a showcase of creativity. Our brand promise is to provide the needed framework to launch Africa into leading the future global tech revolution We pioneer and facilitate new digital technology adoption and onboarding through our, webinars and campaign and have reached out to over 5,000 persons onsite and virtually across our various social media	platforms. We have launched various micro communities to meet the rising needs of our members. All our community members enjoy free education on blockchain and digital technologies, signals and	general opportunities ranging from Crypto signals, Crypto gems, fundamental and technical analysis, Crypto job training & alert, internship	and partnerships.";

export const metadata: Metadata = {
  title: {
    template: "%s | SOFE Group",
    absolute: "Home",
    default: "SOFE Group",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={openSans.className}>
      <meta name="theme-color" content="rgb(5, 13, 34)" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#008080" />
      <meta name="msapplication-navbutton-color" content="#008080" />

      <body
        // style={openSans.style}
        className="min-h-screen w-[clamp(10%,100%,100%)] antialiased"
      >
        {children}
      </body>
    </html>
  );
}
