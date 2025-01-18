import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Divider from "../ui/divider";
import Heading from "../ui/heading";
import Image from "next/image";
import React from "react";
import Section from "../ui/section";
import { TeamMembers } from "@/lib/mock-data";

const TeamCard = ({ teamMember }: { teamMember: (typeof TeamMembers)[0] }) => {
  return (
    <div
      className="grid-card backdrop-filter p-4 rounded justify-between items-start group hover:scale-[1.02] transition-all"
      key={teamMember.name}
    >
      <div className="object-cover h-54">
        <Image
          src={teamMember.img}
          alt="Testimonials"
          width={450}
          height={500}
          className="object-cover bg-top aspect-[1.2/1.05] w-full h-auto rounded-xl ring-2 ring-light"
        />
      </div>
      <div className="p-4 text-left">
        <h3 className="font-light">{teamMember.name}</h3>
        <p className="uppercase text-muted">{teamMember.role}</p>
      </div>
    </div>
  );
};

export default function Team() {
  return (
    <Section className="relative mx-auto">
      <Heading subtitle="Meet our Incredulous Team Members" title="SOFE TEAM" />
      <div className="grid-card-container p-6">
        {TeamMembers.map((mem) => (
          <TeamCard teamMember={mem} key={mem.name}/>
        ))}
      </div>
      <div className="hidden absolute right-0 top-[50%] size-10 md:grid place-items-center">
        <span>See More</span>
        <ChevronRightIcon />
      </div>
      <Divider />
    </Section>
  );
}
