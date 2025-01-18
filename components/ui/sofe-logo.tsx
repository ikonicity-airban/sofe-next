import Image from "next/image";
import { openSans } from "@/components/ui/fonts";

export default function SofeLogo() {
  return (
    <div
      className={`${openSans.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-xl leading-4 md:text-[24px] clip-text -mr-2 text-white italic font-bold text-center">
        S<br />Gr
      </p>

      <div className="object-cover z-10">
        <Image
          src="/Burger Shape.png"
          width={40}
          height={40}
          alt="Logo"
          color="white"
          className="object-contain"
        />
      </div>
      <p className="text-xl md:text-[24px] leading-3 -ml-2 text-white italic font-bold">fe<br />up</p>
    </div>
  );
}
