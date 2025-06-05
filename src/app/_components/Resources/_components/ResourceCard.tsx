// src/components/resources/ResourceCard.tsx
import React from "react";
import { LucideIcon, Download } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface ResourceCardProps {
  icon: LucideIcon;
  titleKey: string; // Key for the resource title (e.g., "mba_brochure_title")
  size: string; // e.g., "3.2 MB"
  fileType: string; // e.g., "PDF"
  downloadLink: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  icon: Icon,
  titleKey,
  size,
  fileType,
  downloadLink,
}) => {
  const t = useTranslations("resources.ResourceCard"); // Specific namespace for resource cards
  const locale = useLocale();

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
      <div
        className={`flex items-start ${
          locale === "ar" ? "flex-row-reverse" : ""
        }`}
      >
        <div
          className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 ${
            locale === "ar" ? "ml-4" : "mr-4"
          }`}
        >
          <Icon className="h-6 w-6" />
        </div>
        <div
          className={`flex-1 ${locale === "ar" ? "text-right" : "text-left"}`}
        >
          <h3 className="font-bold text-primary mb-1 text-lg">{t(titleKey)}</h3>
          <p className="text-sm text-gray-500 mb-3">
            {size} • {fileType}
          </p>
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center text-sm font-medium text-accent-blue hover:text-accent-green transition-colors ${
              locale === "ar" ? "flex-row-reverse" : ""
            }`}
          >
            <Download
              className={`h-4 w-4 flex-shrink-0 ${
                locale === "ar" ? "ml-1" : "mr-1"
              }`}
            />
            {t("download_button")}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
