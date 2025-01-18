import {
  AtSymbolIcon,
  ChevronDoubleRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import { Button } from "../ui/button";
import Heading from "../ui/heading";
import Image from "next/image";
import React from "react";
import Section from "../ui/section";
import TextInput from "../ui/text-input";
import chatImage from "@/public/Chat.png";

function CTAForm() {
  return (
    <Section className="mb-0 py-10" id="Contact me">
      <div className="">
        <Heading title="Contact Form" subtitle="Reach out to us" />
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-full justify-evenly p-6">
        <div className="flex-1 ">
          <div className="md:flex-[0.4] grid place-items-center mb-10">
            <Image
              src={chatImage}
              alt="chat image"
              height={200}
              width={200}
              className="object-contain"
            />
          </div>
          <div className="p-4">
            <h4>Contact Info</h4>
            <div className="py-4 flex items-center text-muted border-b border-[var(--translucent)]">
              <EnvelopeIcon className="h-6 w-6 mx-2" />
              <h5 className="text-sm">Email</h5>
              <p className="pl-3 text-light font-normal hover:underline">
                info@sofe.com
              </p>
            </div>
            <div className="py-4 flex items-center text-muted border-b border-[var(--translucent)]">
              <PhoneIcon className="h-6 w-6 mx-2" />
              <h5 className="text-sm">Phone</h5>
              <p className="pl-3 text-light font-normal hover:underline">
                +234 000 0000 000
              </p>
            </div>
            <div className="py-4 flex items-center text-muted border-b border-[var(--translucent)]">
              <MapPinIcon className="h-6 w-6 mx-2" />
              <h5 className="text-sm">Address</h5>
              <p className="pl-3 text-light font-normal hover:underline">
                Nsukka, Enugu Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 flex-1 grid">
          <div className="mb-6">
            <h4 className="font-light">Fill the form</h4>
          </div>
          <form action="" className="grid w-full gap-6">
            <TextInput
              name="name"
              required
              icon={<UserIcon />}
              className="capitalize"
            />
            <TextInput name="email" required icon={<AtSymbolIcon />} />
            <div className="btn-outline rounded-3xl flex items-center relative pl-4">
              <EnvelopeIcon className="h-6 w-6 text-muted" />
              <textarea
                placeholder="What will you like to tell us?"
                className="p-4 h-32 bg-transparent hover:border-0 outline-none border-0 w-full focus:ring-0 text-sm font-light capitalize"
              />
            </div>
            <div className="flex gap-4 items-center">
              <input
                type="checkbox"
                name="subscribe"
                id="subscribe"
                className="bg-transparent outline-none hover:ring-1 hover:border-none rounded-sm ring-1 ring-muted p-3 border-none"
              />
              <p className="text-muted text-xs">
                Subscribe to our Newsletter for updates in news and notification
              </p>
            </div>
            <Button className="btn-primary rounded-full relative">
              <p>Send Message</p>
              <ChevronDoubleRightIcon className="h-6 absolute right-10"/>
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default CTAForm;
