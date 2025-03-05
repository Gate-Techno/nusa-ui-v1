import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { HeadMetaData } from "./HeadMetaData";
import { Navbar } from "../container/navbar";

type PageContainerProps = {
  withHeader?: boolean;
  withFooter?: boolean;
};

export const PageContainer = forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement> & PageContainerProps
>(
  (
    { className, children, withHeader = true, withFooter = true, ...props },
    ref,
  ) => {
    return (
      <div className="w-full h-full bg-gradient">
        <HeadMetaData />
        {withHeader && <Navbar />}
        <main ref={ref} className={cn("flex flex-col", className)} {...props}>
          {children}
        </main>
        {withFooter && (
          <footer className="flex p-4 border-t-2 min-h-16">
            <p className="w-full text-sm text-center text-muted-foreground">
              Copyright &copy; {new Date().getFullYear()} NusaUI.
            </p>
          </footer>
        )}
      </div>
    );
  },
);

PageContainer.displayName = "PageContainer";
