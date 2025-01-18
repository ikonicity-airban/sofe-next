import React, { ReactNode } from "react";

import clsx from "clsx";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
  ...rest
}: SectionProps) {
  return (
    <div
      className={clsx("mt-10 mb-15 md:px-10 w-full", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
