import {
  Cog6ToothIcon,
  HandThumbUpIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Heading from "../ui/heading";
import Image from "next/image";
import React from "react";
import Section from "../ui/section";
import ellipses from "@/public/Group 35933.png";
import phone from "@/public/man-burger.png";

const features = [
  {
    title: "Sofe Spirit",
    content:
      "Our greatest asset is the people we work with. Our tribe. At Sofe, we understand that “the people are the business.” That is why we prioritize values and always current with technology and skills.",
    icon: <Cog6ToothIcon />,
  },
  {
    title: "Integrity",
    content:
      "We continually strive to be everything we say we are. We believe that transparency and credibility is an obligation we owe to our community, clients and partners.",
    icon: <HandThumbUpIcon />,
  },
  {
    title: "Experienced",
    content:
      "We know that customer satisfaction is our top priority that is why we trust our wealth over 3 experiences to always deliver premium service.",
    icon: <UserCircleIcon />,
  },
];

function Features() {
  return (
    <Section className="mx-auto animate-fade-in px-6 max-w-screen-laptop">
      <Heading title="Features" subtitle="Why choose us" />
      <div className="flex flex-col-reverse md:flex-row justify-evenly">
        <div className="left relative object-contain group flex-[0.4]">
          <Image
            src={phone}
            width={600}
            height={700}
            alt="phone"
            className="object-contain"
          />
          {/* <div className="absolute hidden top-0 right-6 w-1/3 text-sm group-hover:block p-3 backdrop-filter rounded-2xl animate-shake-card">
            <p>Hello, We at SOFE are pretty impressive right</p>
          </div> */}
        </div>
        <div className="right flex-[0.6]">
          <h4 className="uppercase clip-text text-center hidden md:inline-block">
            Sofe Premium
          </h4>
          <div className="grid gap-6">
            {features.map(({ title, content, icon }) => (
              <div
                className="flex hover:text-xl ease-in p-4 items-center justify-center gap-4 hover:backdrop-filter rounded-md group duration-200 transition-[filter] delay-100 "
                key={content}
              >
                <div className="size-28 group-hover:size-40 transition-all place-items-center group-hover:text-primary hidden md:grid">
                  {icon}
                </div>
                <div className="">
                  <div className="flex items-center gap-4 group-hover:text-primary">
                    <span className="md:hidden h-8 w-8">{icon}</span>
                    <h4 className="my-2"> {title}</h4>
                  </div>
                  <p className="text-muted group-hover:text-light">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Features;
