// src/components/article/ArticleCard.tsx
import React from "react";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface ArticleCardProps {
  imageSrc: any; // Use 'any' or specific Next.js Image type if known, e.g., StaticImageData
  categoryKey: string; // Translation key for the category (e.g., "business_education")
  dateKey: string; // Translation key for the date (e.g., "mar_15_2025")
  authorKey: string; // Translation key for the author (e.g., "dr_sarah_johnson")
  titleKey: string; // Translation key for the article title
  descriptionKey: string; // Translation key for the article description
  readMoreLink: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  imageSrc,
  categoryKey,
  dateKey,
  authorKey,
  titleKey,
  descriptionKey,
  readMoreLink,
}) => {
  const t = useTranslations("article.ArticleCard"); // Specific namespace for article cards
  const locale = useLocale();

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={t(titleKey)}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          width={400} // Example width, adjust as needed
          height={200} // Example height, adjust as needed
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`absolute top-4 ${
            locale === "ar" ? "right-4" : "left-4"
          } bg-accent-blue text-white px-3 py-1 rounded-full text-xs font-medium`}
        >
          {t(categoryKey)}
        </div>
      </div>
      <div className="p-6">
        <div
          className={`flex items-center text-sm text-gray-500 mb-3 ${
            locale === "ar" ? "flex-row-reverse space-x-reverse" : "space-x-6"
          }`}
        >
          <span
            className={`flex items-center ${locale === "ar" ? "ml-6" : ""}`}
          >
            <Calendar
              className={`h-4 w-4 ${
                locale === "ar" ? "ml-1" : "mr-1"
              } text-gray-400`}
            />
            {t(dateKey)}
          </span>
          <span className="flex items-center">
            <User
              className={`h-4 w-4 ${
                locale === "ar" ? "ml-1" : "mr-1"
              } text-gray-400`}
            />
            {t(authorKey)}
          </span>
        </div>
        <h3
          className={`text-xl font-bold text-primary mb-2 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {t(titleKey)}
        </h3>
        <p
          className={`text-gray-600 mb-4 line-clamp-3 text-sm ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          {t(descriptionKey)}
        </p>
        <a
          href={readMoreLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center text-accent-blue font-medium hover:text-accent-green transition-colors duration-200 ${
            locale === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          {t("read_more")}
          <ArrowRight
            className={`h-4 w-4 ${locale === "ar" ? "mr-1" : "ml-1"}`}
          />
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
