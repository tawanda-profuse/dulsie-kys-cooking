"use client";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky z-50 top-0 left-0 w-full flex justify-between px-4 md:px-8 items-center bg-white border-b border-b-[#ccc]">
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="Company logo"
          width={150}
          height={100}
        />
      </Link>
      <div
        className={`text-foreground absolute flex flex-col md:flex-row gap-10 md:relative transition-all ${
          isOpen
            ? "left-0 flex text-center w-full py-8 top-[6.5rem] bg-white min-h-[50vh] justify-center"
            : "-top-[300%]"
        }`}
      >
        <Link href="/#about" className="text-[var(--primary)] hover:underline font-bold" onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link
          href="/#cooking-school"
          className="text-[var(--primary)] hover:underline font-bold" onClick={() => setIsOpen(false)}
        >
          Cooking School
        </Link>
        <Link
          href="/#specialties"
          className="text-[var(--primary)] hover:underline font-bold" onClick={() => setIsOpen(false)}
        >
          Specialties
        </Link>
        <Link href="/gallery" className="text-[var(--primary)] hover:underline font-bold" onClick={() => setIsOpen(false)}>
          Gallery
        </Link>
        <Link
          href="/#contact"
          className="text-[var(--primary)] hover:underline font-bold" onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
      <button
        className="block md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          className="text-4xl outline-none text-[var(--primary)]"
        />
      </button>
    </nav>
  );
};

export default Navbar;
