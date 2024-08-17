"use client";

import Image, { StaticImageData } from "next/image";
import React, { Suspense, useEffect, useState } from "react";

import { Button } from "../button";
import PlanetCanvas from "../models/planet";
import Typewriter from "../effects/typewriter";
import arrow from "@/public/Arrow_03.svg";
import globe from "@/public/globe.svg";
import sponsor from "@/public/List.png";

// const images: StaticImageData[] = [carousel1, carousel2];
export default function HeroSection() {

  return (
    <main className="pt-10 bg-[url('/herobg.png')] bg-cover min-h-[85dvh]">
      <section className="px-6 mt-10 max-w-screen-desktop mx-auto min-h-[65vh]">
        <div className="flex flex-col md:flex-row h-full gap-6 justify-between">
          <div className=" md:flex-[0.6] laptop:flex-[0.5] flex-1 md:px-6 md:pr-0 gap-10 laptop:gap-[7dvw] flex flex-col items-center max-w-[550px] md:max-w-fit relative bg-contain bg-no-repeat bg-[url('/Ellipse.png')]">
            <div className="absolute -top-10 mobile:right-1 md:right-10 right-4 laptop:top-0 desktop:right-14 w-fit h-fit md:">
              <Image src={arrow} alt="carousel" width={100} height={100} />
            </div>

            <div className="flex flex-col gap-4 md:gap-2 laptop:mt-5">
              <h1 className="text-4xl pb-2 leading-[1.4em] font-light clip-text text-transparent bg-gradient-to-tr from-[#766] to-white md:text-5xl desktop:text-6xl">
                Building <br />
                <span className="text-light text-[3.5rem] font-medium">
                  Future Africa
                </span>{" "}
                <br />
                through Tech
              </h1>
              <p className="font-light md:text-sm text-xs text-muted leading-slug max-w-[400px]">
                A leading brand in transforming the world through creative
                digital and innovative solutions.
              </p>
              <div className="flex gap-3 mb-6 mt-10">
                <Button className="btn-outline mobile:flex-grow-0 ">
                  Get Started
                </Button>
                <div className="btn-primary btn btn-outline mobile:flex-grow-0 ">
                  <p>Explore Now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:flex-[0.5] h-auto flex justify-center desktop:flex-[0.5] object-contain mb-10">
            <Suspense fallback={<div className="grid place-item-center"><p>Loading</p></div>}>

            <PlanetCanvas />
            </Suspense>
          </div>
        </div>
      </section>
      <div className="w-full flex justify-center bg-[var(--background-color)] p-4 shadow-lg">
        <Image width={1224} height={48} src={sponsor} alt="sponsor" />
      </div>
    </main>
  );
}
