"use client";

import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";
import { images } from "../utils/images";

const GalleryPage = () => {
  useEffect(() => {
    document.title = "Dulsie Kys Cooking Gallery";
  }, []);

  useEffect(() => {
    // Bind Fancybox to all gallery elements
    Fancybox.bind('[data-fancybox="gallery"]', {
      loop: false,
      protect: true,
    });

    return () => {
      // Clean up bindings when component unmounts
      Fancybox.destroy();
    };
  }, []);

  return (
    <main>
      <div className="mx-auto flex flex-wrap gap-2 md:gap-4 p-4 justify-center items-center md:bg-[var(--secondary)]">
        {images.map((url, index) => (
          <div
            key={index}
            className="card shadow-md rounded overflow-hidden transition-all hover:scale-[0.9] w-[4rem] h-[4rem] md:w-[10rem] md:h-[8rem] bg-black md:bg-none"
            title="Click to view"
          >
            <a href={url} data-fancybox="gallery">
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
                className="w-full h-full object-scale-down sm:object-cover"
              />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryPage;
