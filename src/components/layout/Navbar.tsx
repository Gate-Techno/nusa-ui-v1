"use client";

import * as React from "react";
import Link from "next/link";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="fixed top-0 z-50 w-full shadow-md">
      <div className="container flex items-center justify-center px-4 py-3 mx-auto">
        <div className="flex w-full max-w-4xl justify-between items-center">
          <nav className="flex space-x-8">
            <Link href="/" className="text-lg font-medium">
              Docs
            </Link>
            <Link href="/start" className="text-lg font-medium">
              Components
            </Link>
          </nav>

          <div className="text-center">
            <Link href="/">
              <img src="assets/img/white-logo.png" alt="" className="h-16 w-auto"/>
            </Link>
          </div>

          <nav className="flex space-x-8">
            <Link href="/login" className="text-lg font-medium">
              Login
            </Link>
            <Link href="/signup" className="text-lg font-medium">
              Sign Up
            </Link>
          </nav>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="p-4 shadow-md bg-background lg:hidden">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Let&#39;s Start
            </Link>
            <Link
              href="/login"
              className="text-lg font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
