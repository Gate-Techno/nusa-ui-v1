"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";

const components = [
  {
    title: "Mau lihat dokumentasi?",
    href: "/",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
  },
  {
    title: "Eksplore components",
    href: "/",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
  },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 lg:grid lg:grid-cols-3">
        <button
          className="block lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="!h-5 !w-5" size={24} />
          ) : (
            <Menu className="!h-5 !w-5" size={24} />
          )}
        </button>

        <div className="hidden justify-center lg:flex col-start-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-primary to-muted/50 p-6 no-underline outline-none focus:shadow-md"
                          href="/"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium">
                            NUSA UI
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/" title="Rumah">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Get Started 🚀</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* <NavigationMenuItem>
                <Link href="/questions" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Docs 🚀
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center justify-end gap-2 lg:col-start-3">
          <Link href="/login">
            <Button className="w-28 text-base" variant="secondary">
              Login
            </Button>
          </Link>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="bg-background p-4 shadow-md lg:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/questions"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started 🚀
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
