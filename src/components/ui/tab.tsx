"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

// Define the variants
const tabsVariants = cva("", {
  variants: {
    variant: {
      default: "",
      detached: "",
      outline: "",
      neobrutalism: "",
      pill: "",
      minimal: "",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>,
    VariantProps<typeof tabsVariants> {}

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  TabsProps
>(({ className, variant, size, ...props }, ref) => {
  // Create a context to pass the variant and size to child components
  const contextValue = React.useMemo(() => ({ variant, size }), [variant, size]);
  
  return (
    <TabsContext.Provider value={contextValue}>
      <TabsPrimitive.Root
        ref={ref}
        className={cn(tabsVariants({ variant, size, className }))}
        {...props}
      />
    </TabsContext.Provider>
  );
});
Tabs.displayName = "Tabs";

// Create a context to share the variant and size
type TabsContextType = {
  variant?: "default" | "detached" | "outline" | "neobrutalism" | "pill" | "minimal" | null;
  size?: "default" | "sm" | "lg" | null;
};

const TabsContext = React.createContext<TabsContextType>({
  variant: "default",
  size: "default",
});

// Hook to use the context
const useTabsContext = () => React.useContext(TabsContext);

// TabsList component
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => {
  const { variant, size } = useTabsContext();
  
  // Styles based on variant
  const styles = {
    default: "inline-flex h-11 justify-center border bg-white text-md",
    detached: "inline-flex h-11 justify-center bg-white text-md rounded-lg shadow-sm mb-4 border border-gray-300",
    outline: "inline-flex h-11 justify-center bg-transparent text-md rounded-t-lg",
    neobrutalism: "inline-flex h-11 justify-center border-2 border-black bg-white text-md rounded-t-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    pill: "inline-flex h-11 justify-center rounded-full px-2 bg-gray-100 border-0 text-md mb-4",
    minimal: "inline-flex h-11 justify-center border-b border-gray-200 bg-white text-md",
  };
  
  // Sizes
  const sizes = {
    default: "h-11",
    sm: "h-9 text-sm",
    lg: "h-12 text-lg",
  };
  
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        variant && styles[variant],
        size && sizes[size],
        className
      )}
      {...props}
    />
  );
});
TabsList.displayName = TabsPrimitive.List.displayName;

// TabsTrigger component
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => {
  const { variant, size } = useTabsContext();
  
  // Styles based on variant
  const styles = {
    default: "text-black font-medium px-4 py-2 border transition-all data-[state=active]:bg-[#A388EE]",
    detached: "text-black font-medium px-4 py-2 transition-all rounded-md data-[state=active]:bg-gray-100 data-[state=active]:text-[#5635dc]",
    outline: "text-gray-500 font-medium px-4 py-2 border-2 border-transparent transition-all rounded-t-md data-[state=active]:border-gray-300 data-[state=active]:border-b-white data-[state=active]:text-black data-[state=active]:bg-white",
    neobrutalism: "text-black font-medium px-4 py-2 border-b-2 border-transparent transition-all data-[state=active]:border-black data-[state=active]:bg-purple-100 data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
    pill: "text-black font-medium px-4 py-2 transition-all rounded-full data-[state=active]:bg-white data-[state=active]:shadow-sm",
    minimal: "text-black font-medium px-4 py-2 border-b-2 border-transparent transition-all data-[state=active]:border-black",
  };
  
  // Sizes
  const sizes = {
    default: "text-md",
    sm: "text-sm px-3 py-1.5",
    lg: "text-lg px-5 py-2.5",
  };
  
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "transition-all",
        variant && styles[variant],
        size && sizes[size],
        className
      )}
      {...props}
    />
  );
});
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

// TabsContent component
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => {
  const { variant, size } = useTabsContext();
  
  // Styles based on variant
  const styles = {
    default: "mt-0 rounded-b-lg",
    detached: "border border-gray-300 bg-white rounded-lg p-4",
    outline: "mt-0 border-2 border-gray-300 bg-white rounded-lg p-4 pt-6",
    neobrutalism: "mt-0 border-2 border-black border-t-0 bg-white rounded-b-lg p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
    pill: "border border-gray-200 bg-white rounded-lg p-4",
    minimal: "mt-0 border-x border-b border-gray-200 bg-white rounded-b-lg p-4",
  };
  
  // Sizes with adjusted padding
  const sizes = {
    default: "p-4",
    sm: "p-2",
    lg: "p-6",
  };
  
  return (
    <TabsPrimitive.Content
      ref={ref}
      className={cn(
        "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2",
        variant && styles[variant],
        size && sizes[size],
        className
      )}
      {...props}
    />
  );
});
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };