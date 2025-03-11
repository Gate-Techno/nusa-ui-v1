"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-50 w-full shadow-md">
      <div className="container mx-auto flex items-center justify-between px-10 py-3 relative">

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-6">
          <Link href="/docs" className="text-white font-medium hover:underline">
            Docs
          </Link>
          <Link href="/components" className="text-white font-medium hover:underline">
            Components
          </Link>
          <Link href="/templates" className="text-white font-medium hover:underline">
            Templates
          </Link>
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/img/logo-white.png"
              alt="Logo"
              width={40}
              height={40}
            />
            <span className="text-2xl text-white font-bold">Nusa UI</span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            className="hidden md:flex justify-start items-center gap-2 px-4 py-2 w-60 hover:bg-[#261c5c]/20 hover:text-white/70">
            <Search className="h-5 w-5" />
            <span className="hover:text-white">Search</span>
          </Button>

          {/* Mobile Search Icon */}
          <button className="md:hidden text-white">
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute inset-x-0 top-full bg-[#261c5c]/30 shadow-md lg:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="/docs"
              className="text-lg font-medium text-white hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="text-lg font-medium text-white hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Components
            </Link>
            <Link
              href="/templates"
              className="text-lg font-medium text-white hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
