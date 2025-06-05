// src/components/certified/CertifiedCard.tsx
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { LucideIcon } from "lucide-react"; // Import LucideIcon type for props

interface CertifiedCardProps {
  icon: LucideIcon; // Lucide icon component (e.g., Lightbulb, CreditCard)
  bgColorClass: string; // Tailwind class for background color (e.g., "bg-accent-green")
  titleKey: string; // Translation key for the title
  descriptionKey: string; // Translation key for the description
}

const CertifiedCard: React.FC<CertifiedCardProps> = ({
  icon: Icon,
  bgColorClass,
  titleKey,
  descriptionKey,
}) => {
  const t = useTranslations("certified.certifiedCard"); // Specific namespace
  const locale = useLocale();

  return (
    <div className={`flex ${locale === "ar" ? "flex-row-reverse" : ""}`}>
      <div className={`flex-shrink-0 ${locale === "ar" ? "ml-6" : "mr-6"}`}>
        <div
          className={`w-14 h-14 rounded-xl flex items-center justify-center text-white ${bgColorClass}`}
        >
          <Icon className="h-7 w-7" />
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold text-primary mb-2">{t(titleKey)}</h3>
        <p className="text-gray-600 text-sm sm:text-base">
          {t(descriptionKey)}
        </p>
      </div>
    </div>
  );
};

export default CertifiedCard;
