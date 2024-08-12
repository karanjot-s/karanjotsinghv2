import { Button } from "@nextui-org/react";
import React from "react";

const CustomButton = ({ children }) => {
  return (
    <div className="p-[2px] bg-warning rounded-2xl">
      <button className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap font-normal subpixel-antialiased overflow-hidden tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large [&>svg]:max-w-[theme(spacing.unit-8)] data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover bg-neutral-950">
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
