// src/components/Resources.tsx
"use client"; // Required for `useTranslations` and child client components
import React from "react";
import { useTranslations, useLocale } from "next-intl";
import ResourceCategoryTabs from "./_components/ResourceCategoryTabs";
import ContactSupportBanner from "./_components/ContactSupportBanner";

const Resources = () => {
  const t = useTranslations("resources"); // Main namespace
  const locale = useLocale(); // Get current locale for global alignment

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Resource Categories and Cards */}
        <ResourceCategoryTabs />

        {/* Contact Support Banner */}
        <ContactSupportBanner
          headingKey="contact_banner_heading"
          descriptionKey="contact_banner_description"
          buttonTextKey="contact_banner_button"
          contactLink="https://deluxe-mousse-f4e584.netlify.app/#" // Replace with actual contact link
        />
      </div>
    </section>
  );
};

export default Resources;
