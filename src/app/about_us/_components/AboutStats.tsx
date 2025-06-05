// src/components/about/AboutStats.tsx
import React from "react";
import { Globe, GraduationCap, Award } from "lucide-react";
import { useTranslations } from "next-intl";

interface StatItemProps {
  icon: React.ElementType; // Icon component (e.g., Globe, GraduationCap)
  value: string; // The number or percentage (e.g., "25+", "500+", "94%")
  labelKey: string; // Translation key for the label (e.g., "university_partners_label")
}

const StatItem: React.FC<StatItemProps> = ({ icon: Icon, value, labelKey }) => {
  const t = useTranslations("aboutHomePage.AboutStats"); // Use specific namespace for stats

  return (
    <div className="bg-primary rounded-lg p-6 sm:p-8 text-center text-white shadow-lg transition-transform hover:scale-105 duration-300">
      {" "}
      {/* Added responsive padding, shadow, and hover effect */}
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
        <Icon className="h-8 w-8 text-accent-green" />
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold mb-2">{value}</h3>{" "}
      {/* Responsive font size for value */}
      <p className="text-accent-white/80 text-sm sm:text-base">
        {t(labelKey)}
      </p>{" "}
      {/* Responsive font size for label */}
    </div>
  );
};

const AboutStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-16 md:mt-20">
      {" "}
      {/* Adjusted gaps and responsive columns */}
      <StatItem icon={Globe} value="25+" labelKey="university_partners_label" />
      <StatItem
        icon={GraduationCap} // Using GraduationCap for students
        value="500+"
        labelKey="students_enrolled_label"
      />
      <StatItem icon={Award} value="94%" labelKey="success_rate_label" />
    </div>
  );
};

export default AboutStats;
