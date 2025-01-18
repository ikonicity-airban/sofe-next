"use client";
import Image from "next/image";
import { Suspense } from "react";

import { Button, buttonVariants } from "../ui/button";
import PlanetCanvas from "../models/planet";
import arrow from "@/public/Arrow_03.svg";
import sponsor from "@/public/List.png";
import Link from "next/link";

// const images: StaticImageData[] = [carousel1, carousel2];
export default function HeroSection() {
  return (
    <main className="pt-10 bg-[url('/herobg.png')] bg-fixed bg-cover bg-no-repeat min-h-[85dvh]">
      <section className="px-6 mt-10 max-w-screen-desktop mx-auto min-h-[65vh]">
        <div className="flex flex-col md:flex-row h-full gap-6 justify-between">
          <div className=" md:flex-[0.6] laptop:flex-[0.5] flex-1 md:px-6 md:pr-0 gap-10 laptop:gap-[7dvw] flex flex-col items-center max-w-[550px] md:max-w-fit relative bg-contain bg-no-repeat bg-[url('/Ellipse.png')]">
            <div className="absolute -top-10 mobile:right-1 md:right-10 right-4 animate-in fade-in-20 animate-bounce delay-150 animation-duration-300 laptop:top-0 desktop:right-14 w-fit h-fit md:">
              <Image src={arrow} alt="carousel" width={100} height={100} />
            </div>
            <div className="flex flex-col gap-4 md:gap-2 laptop:mt-5">
              <h1 className="text-3xl  pb-2 leading-[1.3em] font-semibold  text-white md:text-5xl desktop:text-5xl">
                Building <br />
                <span className=" text-[clamp(2rem,12vw,3.5rem)] clip-text leading-snug font-extrabold animate-in slide-in-from-top-10 repeat-infinite">
                  Future Africa
                </span>{" "}
                <br />
                through Tech
              </h1>
              <p className="font-thin md:text-base text-xs text-muted leading-slug max-w-[400px]">
                A leading brand in transforming the world through creative
                digital and innovative solutions.
              </p>
              <div className="flex gap-3 mb-6 mt-10">
                <Link
                  href={"/login"}
                  className={buttonVariants({
                    variant: "outline",
                    className: "text-white text-xs",
                  })}
                >
                  Get Started
                </Link>
                <Button className="min-w-[10rem]">
                  <p>Explore Now</p>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 md:flex-[0.5] h-auto flex justify-center desktop:flex-[0.5] object-contain mb-10">
            <Suspense fallback="Loading...">
              <PlanetCanvas />
            </Suspense>
          </div>
        </div>
      </section>
      <div className="w-full h-[12vh] flex bg-[var(--background-color)] gap-4 p-4 shadow-lg overflow-clip">
        <Image
          width={1224}
          height={30}
          src={sponsor}
          alt="sponsor"
          className="scroll-left-offset"
        />
        <Image
          width={1224}
          height={30}
          src={sponsor}
          alt="sponsor"
          className="scroll-left"
        />
      </div>
    </main>
  );
}
