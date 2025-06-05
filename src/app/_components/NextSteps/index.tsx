// src/components/NextStep.tsx
"use client"; // Required for useTranslations

import React from "react";
import { ArrowRight } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

interface SupportFeature {
  id: string;
  titleKey: string; // Translation key for the title
  descriptionKey: string; // Translation key for the description
}

const supportFeatures: SupportFeature[] = [
  {
    id: "academic_advising",
    titleKey: "support_features.academic_advising_title",
    descriptionKey: "support_features.academic_advising_description",
  },
  {
    id: "financial_options",
    titleKey: "support_features.financial_options_title",
    descriptionKey: "support_features.financial_options_description",
  },
  {
    id: "career_support",
    titleKey: "support_features.career_support_title",
    descriptionKey: "support_features.career_support_description",
  },
];

const NextStep = () => {
  const t = useTranslations("next_step"); // Namespace for this component's translations
  const locale = useLocale(); // Get the current locale

  const isRTL = locale === "ar";

  return (
    <section className="py-12 md:py-20 bg-primary relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-accent-green rounded-full opacity-10"></div>
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent-blue rounded-full opacity-10"></div>
      </div>

      <div
        className={`container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            {t("heading")}
          </h2>
          <p className="text-lg md:text-xl text-white mb-10 max-w-3xl mx-auto">
            {t("description")}
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
              isRTL ? "sm:flex-row-reverse" : ""
            }`}
          >
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 bg-accent-blue text-white hover:bg-accent-blue/90 shadow-md text-lg px-8 py-4">
              {t("book_consultation_button")}
              <ArrowRight className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
            </button>
            <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 border border-accent-blue text-accent-blue hover:bg-accent-blue/10 text-lg px-8 py-4">
              {t("download_prospectus_button")}
            </button>
          </div>
        </div>

        {/* Support Features Grid */}
        <div
          className={`mt-16 bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-5xl mx-auto ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {supportFeatures.map((feature) => (
              <div key={feature.id} className="text-white">
                <h3 className="text-xl font-bold mb-3">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-accent-white/90">
                  {t(feature.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStep;
