// src/components/certified/ImageWithOverlay.tsx
import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

import Img1 from "@/img/photo/pexels-photo-4050315.jpeg"; // Ensure correct path

interface ImageWithOverlayProps {
  imageAltKey: string;
  overlayValue: string;
  overlayTextKey: string;
}

const ImageWithOverlay: React.FC<ImageWithOverlayProps> = ({
  imageAltKey,
  overlayValue,
  overlayTextKey,
}) => {
  const t = useTranslations("certified.ImageWithOverlay"); // Specific namespace
  const locale = useLocale();

  return (
    <div className="order-1 lg:order-2 relative">
      <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
        <Image
          src={Img1}
          width={700} // Increase width/height for better quality and responsiveness
          height={450}
          alt={t(imageAltKey)}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes for Next.js Image
          quality={85} // Optimize image quality
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent flex items-end">
          <div
            className={`p-6 sm:p-8 text-white ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-white/20">
              <p className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                {overlayValue}
              </p>
              <p className="text-xs sm:text-sm opacity-90">
                {t(overlayTextKey)}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute w-28 h-28 bg-accent-green/20 rounded-full -top-5 -right-5 -z-10 animate-pulse-slow"></div>
      <div className="absolute w-40 h-40 bg-accent-blue/10 rounded-full -bottom-8 -left-8 -z-10 animate-pulse-slow delay-200"></div>
    </div>
  );
};

export default ImageWithOverlay;
