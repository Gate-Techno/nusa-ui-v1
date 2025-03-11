import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Info } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff33_1px,transparent_1px),linear-gradient(to_bottom,#ffffff33_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      <div className="relative flex text-white flex-col items-center justify-center w-full min-h-screen px-10 py-16 md:flex-row md:items-center md:justify-between">

        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold !leading-[1.2] tracking-tight sm:text-5xl md:text-7xl">
            Nusa UI
          </h1>
          <p className="mt-6 text-[17px] md:text-lg">
            Nusa UI is a free and open-source library of Tailwind CSS components
            that are designed to be simple, accessible, and easy to use.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 md:justify-start">
            <Link href="/docs">
              <Button variant={"neobrutalism"}>
                <Info className="mr-1 size-5" fill="none" strokeWidth={3} /> Dashboard
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
