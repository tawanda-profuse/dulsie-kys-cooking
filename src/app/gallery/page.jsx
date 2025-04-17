"use client";

import React, { useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Image from "next/image";

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

  const images = [
    "/images/gallery/gallery-0.jpg",
    "/images/2025-03-04.jpg",
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
    "/images/gallery/gallery-7.jpg",
    "/images/gallery/gallery-8.jpg",
    "/images/gallery/gallery-9.jpg",
    "/images/gallery/gallery-10.jpg",
    "/images/gallery/gallery-11.jpg",
    "/images/gallery/gallery-12.jpg",
    "/images/gallery/gallery-13.jpg",
    "/images/gallery/gallery-14.jpg",
    "/images/gallery/gallery-15.jpg",
    "/images/gallery/gallery-16.jpg",
    "/images/gallery/gallery-17.jpg",
    "/images/gallery/gallery-18.jpg",
    "/images/gallery/gallery-19.jpg",
    "/images/gallery/gallery-20.jpg",
    "/images/gallery/gallery-21.jpg",
    "/images/gallery/gallery-22.jpg",
    "/images/gallery/gallery-23.jpg",
    "/images/gallery/gallery-24.jpg",
    "/images/gallery/gallery-25.jpg",
    "/images/gallery/gallery-26.jpg",
    "/images/gallery/gallery-27.jpg",
    "/images/gallery/gallery-28.jpg",
    "/images/gallery/gallery-29.jpg",
    "/images/gallery/gallery-30.jpg",
    "/images/gallery/gallery-31.jpg",
    "/images/gallery/gallery-32.jpg",
    "/images/gallery/gallery-33.jpg",
    "/images/gallery/gallery-34.jpg",
    "/images/gallery/gallery-35.jpg",
    "/images/gallery/gallery-36.jpg",
    "/images/gallery/gallery-37.jpg",
    "/images/gallery/gallery-38.jpg",
    "/images/gallery/gallery-39.jpg",
    "/images/gallery/gallery-40.jpg",
    "/images/gallery/gallery-41.jpg",
    "/images/gallery/gallery-42.jpg",
    "/images/gallery/gallery-43.jpg",
    "/images/gallery/gallery-44.jpg",
    "/images/gallery/gallery-45.jpg",
    "/images/gallery/gallery-46.jpg",
    "/images/gallery/gallery-47.jpg",
    "/images/gallery/gallery-48.jpg",
    "/images/gallery/gallery-49.jpg",
    "/images/gallery/gallery-50.jpg",
  ];

  return (
    <main>
      <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {images.map((url, index) => (
          <div key={index} className="card shadow-md rounded overflow-hidden">
            <a href={url} data-fancybox="gallery">
              <Image
                src={url}
                alt={`Image ${index + 1}`}
                width={100}
                height={100}
                className="w-full max-h-[50vh] object-contain"
              />
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

export default GalleryPage;
