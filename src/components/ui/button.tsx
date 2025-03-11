import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-extrabold items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-white text-[#301a6b] relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#301a6b] hover:bg-[#cbb6e9]",
        warning:
          "bg-white text-yellow-400 relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#7a4100] hover:bg-yellow-100",
        danger:
          "bg-white text-red-600 relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#991b1b] hover:bg-red-100",
        success:
          "bg-white text-green-600 relative rounded-[5px] p-2 pl-4 pr-10 shadow-[0px_5px_0px_0px_#166534] hover:bg-green-100",
        outline:
          "bg-[#261c5c]/20 rounded-[5px] border-2 border-white/70 text-white/70 hover:bg-white/20 hover:text-white",
        secondary: "bg-[#5635dc] rounded-[5px] text-white hover:bg-[#4020c2]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        neobrutalism:
          "btn-neobrutalism transition-all duration-200 bg-white text-purple-800 relative border-2 border-black rounded-[5px] p-2 pl-4 pr-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
