import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { Button } from "../ui/button";
import Divider from "../ui/divider";
import Heading from "../ui/heading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Section from "../ui/section";

const servicesData = [
  {
    title: "Sofe Trading Platform",
    desc: "  Our trader community is built with every trader in mind. To provide knowledge, support, signals and mentorship for every day traders",
    imgSrc: "/ethereum-coin.png",
    link: "Sofe_Trading_Platform",
  },
  {
    title: "Web3 Career Internship Program",
    desc: "We provide training and practical internship experience for our members looking forward to starting up a career in web3.",
    imgSrc: "/Target.png",
    link: "#Web3_Career_Internship_Program",
  },
  {
    title: "Sofe Dev. Community",
    desc: "Our Dev. community's mission is to onboard, train, mentor and provide recruitment and partnership opportunities for developers.",
    imgSrc: "/Burger Shape.png",
    link: "Sofe_Dev._Community",
  },
];

type Props = {
  count?: number;
};

export default function Services({ count = servicesData.length }: Props) {
  return (
    <>
      <Section className="w-full px-6 md:px-0 mx-auto my-20 animate-fade-in">
        <Heading title="Services" subtitle="What we offer" />
        <div className="grid-card-container fade-in relative">
          {servicesData.slice(0, count).map((service) => (
            <div
              className="grid-card gap-4 group max-w-screen-smallScreens max-h-fit hover:animate-shake-card hover:bg-gradient-to-tr from-primary to-primary-light bg-opacity-20 hover:scale-95 duration-200 ease-out hover:rounded-3xl py-4 justify-between"
              key={service.link}
            >
              <Image
                src={service.imgSrc}
                width={100}
                height={100}
                alt="Image"
              />
              <div className="px-4">
                <h3 className="text-center font-light group-hover:font-semibold">
                  {service.title}
                </h3>
                <div className="">
                  <p className="text-muted p-4 group-hover:text-light">
                    {service.desc}
                  </p>
                </div>
                <Link href={`/services#${service.link}`} className=" w-full">
                  <Button className="btn-outline w-full rounded-full">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="my-10 flex items-center justify-center">
          <Link href="/services" className="max-w-sm w-full">
            <div className="btn btn-primary flex items-center justify-center w-full gap-6 rounded-full text-xs">
              <p className="text-sm"> Explore all our services</p>
              <ArrowRightIcon className="h-6 animate-shake-card" />
            </div>
          </Link>
        </div>
      </Section>
      <Divider />
    </>
  );
}
