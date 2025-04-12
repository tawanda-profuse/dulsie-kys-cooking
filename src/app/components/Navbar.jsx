"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="flex justify-between p-4 items-center">
      <Link href="/">
        <Image src="/next.svg" alt="Company logo" width={100} height={100} />
      </Link>
      <div
        className={`flex-col text-foreground absolute md:flex gap-6 md:flex-row md:relative ${
          isOpen ? "left-0 flex text-center p-2 w-full top-[4rem]" : "hidden"
        }`}
      >
        <Link href="/">Home</Link>
        <Link href="/">About Us</Link>
        <Link href="/">Menu</Link>
        <Link href="/">Courses</Link>
        <Link href="/">Contact</Link>
        <Link href="/">WhatsApp</Link>
      </div>
      <button
        className="block md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        |||
      </button>
    </nav>
  );
};

export default Navbar;
