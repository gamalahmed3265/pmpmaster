// src/components/about/AboutContent.tsx
import React from "react";
import { useTranslations } from "next-intl";
import { BookOpenCheck } from "lucide-react";

interface AboutContentProps {
  // If you need locale here, pass it or use useLocale hook directly
}

const AboutContent: React.FC<AboutContentProps> = () => {
  const t = useTranslations("aboutHomePage.AboutContent"); // Specific namespace for this component

  // Define your list items using translation keys
  const listItems = [
    "accredited_degrees",
    "flexible_learning",
    "expert_faculty",
    "career_support",
  ];

  return (
    <div className="order-2 lg:order-1">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        {t("heading")}
      </h2>
      <p className="text-gray-600 mb-6">{t("description")}</p>
      <div className="space-y-4 mb-8">
        {listItems.map((itemKey) => (
          <div key={itemKey} className="flex items-start">
            <BookOpenCheck className="h-6 w-6 text-accent-green flex-shrink-0 mt-0.5 mr-3 rtl:ml-3 rtl:mr-0" />
            <p className="text-gray-600">{t(`list.${itemKey}`)}</p>
          </div>
        ))}
      </div>
      <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 px-6 py-3 text-base bg-accent-blue text-white hover:bg-accent-blue/90 shadow-md">
        {t("learn_more_button")}
      </button>
    </div>
  );
};

export default AboutContent;
