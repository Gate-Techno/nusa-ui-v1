"use client";

import { Menu, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import { VisuallyHidden } from "../ui/visually-hidden";

export default function NavbarDocs() {
  const pathName = usePathname();

  const navItems = [
    "Docs",
    "Components",
    "Blocks",
    "Charts",
    "Themes",
    "Colors",
  ];

  return (
    <header
      className="px-5 border-grid sticky top-0 z-50 w-full border-b bg-transparent backdrop-blur-md"
      aria-hidden="true"
    >
      <div className="container-wrapper">
        <div className="container flex h-14 items-center gap-2 md:gap-4">
          {/* Logo & Desktop Navigation */}
          <div className="mr-4 hidden md:flex">
            <a className="mr-4 flex items-center gap-2 lg:mr-6" href="/">
              <Image
                src="/assets/img/logo-white.png"
                alt="Logo"
                width={40}
                height={40}
              />
              <span className="hidden font-bold lg:inline-block">nusa/ui</span>
            </a>
            <nav className="flex items-center gap-4 text-sm xl:gap-6">
              {navItems.map((item) => {
                const href = `/${item.toLowerCase()}`;
                const isActive = pathName.includes(href);

                return (
                  <Link
                    key={item}
                    href={href}
                    className={`transition-colors hover:text-foreground/90 ${
                      isActive ? "text-white" : "text-foreground"
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Mobile Menu & Search */}
          <div className="flex items-center gap-2 md:hidden flex-row-reverse w-full">
            {/* Search Button */}
            <button className="flex justify-start items-center gap-2 px-4 py-2 w-full border rounded-md hover:bg-[#261c5c]/20 hover:text-white/70">
              <Search className="h-5 w-5" />
              <span className="text-xs text-muted-foreground">
                Search documentation...
              </span>
            </button>

            {/* Drawer Menu Button */}
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="default" size={"sm"}>
                  <Menu className="!h-5 !w-5" strokeWidth={4} />
                </Button>
              </DrawerTrigger>

              <DrawerContent className="p-4">
                {/* USING VISUALLY HIDDEN COMPONENT FOR REQUIRED COMPONENT AND HIDDEN BY DEFAULT */}
                <VisuallyHidden>
                  <DrawerHeader className="text-center">
                    <DrawerTitle className="text-lg font-semibold">
                      Navigation
                    </DrawerTitle>
                  </DrawerHeader>
                </VisuallyHidden>

                <div className="max-h-[75vh] overflow-y-auto">
                  <DrawerDescription className="space-y-2">
                    {navItems.map((item) => {
                      const href = `/${item.toLowerCase()}`;
                      const isActive = pathName.includes(href);

                      return (
                        <Link
                          key={item}
                          href={href}
                          className={`block py-2 text-lg font-medium transition-colors rounded-md ${
                            isActive
                              ? "text-foreground font-bold"
                              : "text-muted-foreground hover:text-foreground/80"
                          }`}
                        >
                          {item}
                        </Link>
                      );
                    })}
                  </DrawerDescription>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          {/* Desktop Search & Icons */}
          <div className="ml-auto hidden md:flex items-center gap-2 md:flex-1 md:justify-end">
            <div className="w-full flex-1 md:flex md:w-auto md:flex-none">
              <button className="hidden md:flex justify-start items-center gap-2 px-4 py-2 w-60 border rounded-md hover:bg-[#261c5c]/20 hover:text-white/70">
                <Search className="h-5 w-5" />
                <span className="text-xs text-muted-foreground">
                  Search documentation...
                </span>
              </button>
            </div>
            <nav className="flex items-center gap-0.5">
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground h-8 w-8 px-0"
                href="https://github.com/shadcn-ui/ui"
              >
                <svg viewBox="0 0 438.549 438.549" className="h-4 w-4">
                  <path
                    fill="currentColor"
                    d="M409.132 114.573c-19.608-33.596..."
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
