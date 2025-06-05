// src/components/review/TestimonialCard.tsx
import React from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface TestimonialCardProps {
  imageSrc: any; // Use 'any' or specific Next.js Image type if known, e.g., StaticImageData
  altKey: string; // Translation key for image alt text
  quoteKey: string; // Translation key for the testimonial quote
  nameKey: string; // Translation key for the student's name
  titleKey: string; // Translation key for the student's title/degree
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  altKey,
  quoteKey,
  nameKey,
  titleKey,
}) => {
  const t = useTranslations("review.TestimonialCard"); // Specific namespace
  const locale = useLocale();

  return (
    <div className="bg-white h-full rounded-xl shadow-md overflow-hidden flex flex-col">
      <div className="p-6 sm:p-8 relative flex-1 flex flex-col">
        <Quote
          className={`absolute top-4 ${
            locale === "ar" ? "left-4" : "right-4"
          } h-8 w-8 text-accent-blue opacity-20`}
        />
        <p
          className={`text-gray-600 mb-6 relative z-10 flex-1 text-sm sm:text-base ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {t(quoteKey)}
        </p>
        <div
          className={`flex items-center mt-auto ${
            locale === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <div
            className={`w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ${
              locale === "ar" ? "mr-4" : "ml-4"
            }`}
          >
            <Image
              src={imageSrc}
              alt={t(altKey)}
              className="w-full h-full object-cover"
              width={48}
              height={48}
              sizes="48px" // Optimize image loading
            />
          </div>
          <div className={`${locale === "ar" ? "text-right" : "text-left"}`}>
            <h4 className="font-bold text-primary text-base sm:text-lg">
              {t(nameKey)}
            </h4>
            <p className="text-sm text-gray-500">{t(titleKey)}</p>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-accent-green to-accent-blue absolute bottom-0 left-0 right-0"></div>
      </div>
    </div>
  );
};

export default TestimonialCard;
