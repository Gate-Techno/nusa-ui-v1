import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  padded?: boolean;
  centerContent?: boolean;
  containerClassName?: string;
};

export const SectionContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & SectionContainerProps
>(
  (
    { className, children, padded, centerContent, containerClassName, ...props },
    ref,
  ) => {
    return (
      <div className={cn("relative h-full", containerClassName)}>
        <section
          ref={ref}
          className={cn(
            "container flex flex-col",
            className,
            centerContent ? "min-w-full" : "",
            padded ? "px-4" : "",
          )}
          {...props}
        >
          {children}
        </section>
      </div>
    );
  },
);

SectionContainer.displayName = "SectionContainer";
