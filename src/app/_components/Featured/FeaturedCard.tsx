"use client";
import { useLocale, useTranslations } from "next-intl";

import React from "react";
import {
  Eye,
  GraduationCap,
  Clock,
  Globe,
  Award,
  Building,
  BookOpenCheck,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface FeaturedCardProps {
  id: string; // Unique identifier for the card
  imageUrl: StaticImageData;
  imageAltKey: string; // Key for the image alt text in your translations
  views: number;
  categoryKey: string; // Key for the category text (e.g., "doctorate", "masters", "undergraduate")
  titleKey: string; // Key for the title text
  descriptionKey: string; // Key for the description text
  durationKey: string; // Key for the duration text (e.g., "3-5_years", "less_than_one_year")
  deliveryModeKey: string; // Key for the delivery mode text (e.g., "online_blended")
  price?: string; // Optional price, if applicable (e.g., "SAR 37,000 - 42,000")
  universityNameKey?: string; // Optional key for university name
  universityDescriptionKey?: string; // Optional key for university description
  linkHref: string; // The URL for the "Show more" link
}

const FeaturedCard: React.FC<FeaturedCardProps> = ({
  imageUrl,
  imageAltKey,
  views,
  categoryKey,
  titleKey,
  descriptionKey,
  durationKey,
  deliveryModeKey,
  price,
  universityNameKey,
  universityDescriptionKey,
  linkHref,
}) => {
  const t = useTranslations("featured.FeaturedCard"); // Namespace for translations
  const locale = useLocale();
  // Determine which icon to use based on the category (you can expand this logic)
  const CategoryIcon = () => {
    switch (categoryKey) {
      case "doctorate":
        return <GraduationCap className="h-5 w-5" />;
      case "masters":
        return <Award className="h-5 w-5" />;
      case "undergraduate":
        return <BookOpenCheck className="h-5 w-5" />;
      default:
        return null; // Or a default icon
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md transition-all">
      <div className="p-1 bg-gradient-to-r from-accent-green to-accent-blue">
        <div className="bg-white rounded-t-lg">
          <div className="grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 h-64 md:h-full">
              <div className="h-full relative">
                <Image
                  src={imageUrl}
                  alt={t(imageAltKey)} // Translated alt text
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center justify-between ">
                    <span className="flex items-center space-x-1">
                      <Eye className="h-4 w-4 text-white/80" />
                      {/* Using number formatting for views */}
                      <span className="text-sm">
                        {t("views_count", { views })}
                      </span>
                    </span>
                    {price && (
                      <span className="px-3 py-1 bg-accent-blue/90 rounded-full text-sm font-medium">
                        {price}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-8 p-6">
              <div>
                <div className="flex items-center mb-4 justify-between ">
                  <div className="flex items-center text-accent-blue mb-2 space-x-2">
                    <CategoryIcon />
                    <span className="uppercase tracking-wider text-xs font-medium">
                      {t(categoryKey)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 space-x-4">
                    <span className="flex items-center ">
                      <Clock className="h-4 w-4" />
                      <span>{t(durationKey)}</span>
                    </span>
                    <span className="flex items-center ">
                      <Globe className="h-4 w-4" />
                      <span>{t(deliveryModeKey)}</span>
                    </span>
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                  {t(titleKey)}
                </h3>
                {universityNameKey && (
                  <div className="mb-3">
                    <div className="flex items-center text-primary mb-1 space-x-1">
                      <Building className="h-4 w-4 text-accent-blue" />
                      <span className="font-medium">
                        {t(universityNameKey)}
                      </span>
                    </div>
                    {universityDescriptionKey && (
                      <p className="text-sm text-gray-500">
                        {t(universityDescriptionKey)}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="mt-4">
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {t(descriptionKey)}
                </p>
                <a
                  href={linkHref}
                  className="text-accent-blue hover:text-accent-green font-medium flex items-center space-x-1"
                >
                  <span>{t("show_more")}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
