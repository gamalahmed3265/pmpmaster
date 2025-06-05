// src/components/Certified.tsx
"use client"; // If this component uses client-side hooks like useTranslations
import React from "react";
import { Lightbulb, CreditCard, Award, ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import ImageWithOverlay from "./_components/ImageWithOverlay";
import StatBox from "./_components/StatBox";
import CertifiedCard from "./_components/CertifiedCard";

const Certified = () => {
  const t = useTranslations("certified"); // Main namespace for this component
  const locale = useLocale(); // Get current locale for RTL adjustments

  // Define features data
  const features = [
    {
      icon: Lightbulb,
      bgColorClass: "bg-accent-green",
      titleKey: "flexible_learning_title",
      descriptionKey: "flexible_learning_description",
    },
    {
      icon: CreditCard,
      bgColorClass: "bg-accent-blue",
      titleKey: "affordable_programs_title",
      descriptionKey: "affordable_programs_description",
    },
    {
      icon: Award,
      bgColorClass: "bg-primary", // Assuming primary is a dark color for the icon background
      titleKey: "accredited_recognized_title",
      descriptionKey: "accredited_recognized_description",
    },
  ];

  // Define stats data
  const stats = [
    { value: "25+", labelKey: "university_partners_label" },
    { value: "500+", labelKey: "courses_available_label" },
    { value: "15,000+", labelKey: "global_alumni_label" },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid lg:grid-cols-2 gap-12 md:gap-16 items-center ${
            locale === "ar" ? "lg:grid-flow-col-dense" : "" // Adjust column order for RTL
          }`}
        >
          {/* Left Content Section */}
          <div
            className={`order-2 lg:order-1 ${
              locale === "ar" ? "text-right" : "text-left"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
              {t("heading")}
            </h2>
            <p className="text-gray-600 mb-8 md:mb-10 text-base sm:text-lg">
              {t("description")}
            </p>
            <div className="space-y-6 md:space-y-8">
              {features.map((feature, index) => (
                <CertifiedCard
                  key={index}
                  icon={feature.icon}
                  bgColorClass={feature.bgColorClass}
                  titleKey={feature.titleKey}
                  descriptionKey={feature.descriptionKey}
                />
              ))}
            </div>
            <div className="mt-8 md:mt-10">
              <button
                className={`inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-accent-blue text-white hover:bg-accent-blue/90 shadow-md text-base px-6 py-3 sm:px-8 sm:py-4 font-semibold ${
                  locale === "ar" ? "flex-row-reverse" : "" // Reverse icon/text order for RTL
                }`}
              >
                {t("start_journey_button")}
                <ArrowRight
                  className={`h-5 w-5 ${locale === "ar" ? "mr-2" : "ml-2"}`}
                />
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <ImageWithOverlay
            imageAltKey="main_image_alt"
            overlayValue="94%"
            overlayTextKey="overlay_text"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 md:mt-20">
          {stats.map((stat, index) => (
            <StatBox key={index} value={stat.value} labelKey={stat.labelKey} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certified;
