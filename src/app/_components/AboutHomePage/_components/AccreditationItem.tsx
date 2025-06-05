// src/components/accreditations/AccreditationItem.tsx
import React from "react";
import { Award } from "lucide-react";
import { useTranslations } from "next-intl";

interface AccreditationItemProps {
  nameKey: string; // Translation key for the accreditation name
  icon?: React.ElementType; // Optional: Pass a specific Lucide icon if needed, default to Award
}

const AccreditationItem: React.FC<AccreditationItemProps> = ({
  nameKey,
  icon: Icon = Award,
}) => {
  const t = useTranslations("accreditations.accreditation_item"); // Specific namespace

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm flex flex-col items-center justify-center h-32 text-center transform transition-transform duration-300 hover:scale-105">
      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-green to-accent-blue flex items-center justify-center mb-2">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <p className="text-sm font-medium text-primary leading-tight px-1">
        {" "}
        {/* Added px-1 for tight text */}
        {t(nameKey)}
      </p>
    </div>
  );
};

export default AccreditationItem;
