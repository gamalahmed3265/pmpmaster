// src/components/certified/StatBox.tsx
import React from "react";
import { useTranslations } from "next-intl";

interface StatBoxProps {
  value: string; // The numerical value (e.g., "25+", "500+")
  labelKey: string; // Translation key for the label
}

const StatBox: React.FC<StatBoxProps> = ({ value, labelKey }) => {
  const t = useTranslations("certified.StatBox"); // Specific namespace

  return (
    <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-md border-t-4 border-accent-blue text-center hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-3xl sm:text-4xl font-bold text-primary mb-2">
        {value}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base">{t(labelKey)}</p>
    </div>
  );
};

export default StatBox;
