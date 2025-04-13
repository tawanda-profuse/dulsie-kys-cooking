import {
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full md:p-[2rem] bg-[var(--primary)] text-white" id="contact">
      <div className="py-[2rem] px-[0.5rem] grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 border-b border-b-white mx-auto w-[80%]">
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faLocationPin}
            className="max-w-[2.5rem] text-xl text-[var(--secondary)]"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold font-[family-name:var(--font-geist-mono)]">
              Find Us
            </h4>
            <address className="text-[var(--secondary)]">
              130 Highgate Rd, Harare
            </address>
          </div>
        </div>
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faPhone}
            className="max-w-[2.5rem] text-xl text-[var(--secondary)]"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold font-[family-name:var(--font-geist-mono)]">
              Call Us
            </h4>
            <a
              href="tel:0774510544"
              className="text-[var(--secondary)] hover:underline"
            >
              077 451 0544
            </a>
          </div>
        </div>
        <div className="flex gap-4">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="max-w-[2.5rem] text-xl text-[var(--secondary)]"
          />
          <div className="flex flex-col gap-2">
            <h4 className="text-2xl font-bold font-[family-name:var(--font-geist-mono)]">
              Mail Us
            </h4>
            <a
              href="tel:dulsieinvestments@gmail.com"
              className="text-[var(--secondary)] hover:underline"
            >
              dulsieinvestments@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[2rem] py-[2rem] font-[family-name:var(--font-geist-mono)] mx-auto w-[80%]">
        <Image
          src="/images/logo.png"
          alt="Company logo"
          className="rounded-md"
          width={150}
          height={100}
        />
        <p>
          You will be talking about our food long after the meal is over.
          Serving memories, one plate at a time.
        </p>
        <h4 className="text-2xl font-bold">Follow Us</h4>
        <div className="flex gap-4 my-4">
          <a
            href="https://www.facebook.com/dulsiefadzaim"
            target="_blank"
            className="text-3xl transition-all hover:text-[var(--secondary)]"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/dulsiefadzai/?hl=en"
            target="_blank"
            className="text-3xl transition-all hover:text-[var(--secondary)]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/dulsie-fadzai-mudekwa-635113104/"
            target="_blank"
            className="text-3xl transition-all hover:text-[var(--secondary)]"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/kys_cakes"
            target="_blank"
            className="text-3xl transition-all hover:text-[var(--secondary)]"
          >
            <FaTwitter />
          </a>
        </div>
      <a href="https://tawanda-dev.netlify.app/" target="_blank" className="font-bold underline">Contact the Web Developer</a>
      </div>
    </footer>
  );
};

export default Footer;
