// src/components/about/AboutImageGallery.tsx
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl"; // Although not strictly needed for image alt, good practice

// Import your images
import Img1 from "@/img/photo/pexels-photo-3153198.jpeg";
import Img2 from "@/img/photo/pexels-photo-8199562.jpeg";

const AboutImageGallery: React.FC = () => {
  const t = useTranslations("aboutHomePage.AboutImageGallery"); // Specific namespace

  return (
    <div className="order-1 lg:order-2 relative">
      <div className="grid grid-cols-2 gap-4 relative z-10">
        <Image
          src={Img1}
          alt={t("image1_alt")} // Translated alt text
          className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/5]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw" // Improved responsive image loading
          quality={80} // Optimize image quality
        />
        <Image
          src={Img2}
          alt={t("image2_alt")} // Translated alt text
          className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[4/5] mt-8"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 25vw" // Improved responsive image loading
          quality={80} // Optimize image quality
        />
      </div>
      {/* Decorative background circles */}
      <div className="absolute -top-5 -right-5 w-48 h-48 bg-accent-blue/10 rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute -bottom-5 -left-5 w-48 h-48 bg-accent-green/10 rounded-full -z-10 animate-pulse-slow delay-200"></div>
    </div>
  );
};

export default AboutImageGallery;
