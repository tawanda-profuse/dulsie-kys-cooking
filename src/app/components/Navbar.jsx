"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky z-50 top-0 left-0 w-full flex justify-between px-4 items-center bg-white border-b border-b-[#ccc]">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Company logo"
          width={150}
          height={100}
        />
      </Link>
      <div
        className={`text-foreground absolute flex flex-col md:flex-row gap-6 md:relative transition-all ${
          isOpen
            ? "left-0 flex text-center w-full p-2 top-[6.5rem] bg-white min-h-[50vh] justify-center"
            : "-top-[200%]"
        }`}
      >
        <Link href="/#about" className="text-[var(--primary)] hover:underline">
          About Us
        </Link>
        <Link
          href="/#cooking-school"
          className="text-[var(--primary)] hover:underline"
        >
          Cooking School
        </Link>
        <Link
          href="/#contact"
          className="text-[var(--primary)] hover:underline"
        >
          Contact Us
        </Link>
      </div>
      <button
        className="block md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={isOpen ? "/times.svg" : "/bars.svg"} width={40} height={40} alt="Mobile navbar toggle" />
      </button>
    </nav>
  );
};

export default Navbar;
