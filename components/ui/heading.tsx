import React from "react";

interface IProps {
  title?: string;
  subtitle: string;
}

export default function Heading({
  title = "title",
  subtitle = "subtitle",
}: IProps) {
  return (
    <div className="my-10 text-center md:space-y-2">
      <h4 className="clip-text uppercase">{title}</h4>
      <h1 className="font-bold text-3xl md:text-5xl">{subtitle}</h1>
    </div>
  );
}
