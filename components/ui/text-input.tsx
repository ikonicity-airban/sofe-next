import React, { HTMLAttributes, InputHTMLAttributes } from "react";

import { Input } from "./input";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  className?: HTMLAttributes<HTMLInputElement>["className"];
  icon?: React.ReactNode;
}

export default function TextInput({
  name,
  className,
  icon,
  ...rest
}: InputProps) {
  return (
    <div className="border h-14 px-4 rounded-full gap-2 flex items-center relative">
      <div className="h-6 w-6 text-muted">{icon}</div>
      <Input
        id={name}
        type="text"
        className={cn(
          "p-3 bg-transparent hover:border-0 focus-within:border-0 outline-none border-0 w-full focus:ring-0 text-sm font-light",
          className
        )}
        placeholder={name}
        {...rest}
      />
    </div>
  );
}
