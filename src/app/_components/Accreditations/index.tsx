// src/components/Accreditations.tsx
"use client"; // If this component uses client-side hooks like useTranslations
import React from "react";
import Image from "next/image";
import { Award, Check } from "lucide-react"; // Import Check for the list items
import { useTranslations, useLocale } from "next-intl"; // Import useLocale for RTL

// Import your image
import Img1 from "@/img/photo/pexels-photo-8199561.jpeg";
import AccreditationItem from "../AboutHomePage/_components/AccreditationItem";

const Accreditations = () => {
  const t = useTranslations("accreditations"); // Main namespace for this component
  const locale = useLocale(); // Get current locale for RTL adjustments

  // Define your accreditation data using translation keys
  const accreditationsData = [
    { nameKey: "international_management_association" },
    { nameKey: "global_business_academy" },
    { nameKey: "european_higher_education_authority" },
    { nameKey: "international_distance_education_council" },
    { nameKey: "international_council_open_education" },
    { nameKey: "accreditation_council_business_schools" },
  ];

  // Define quality assurance list items using translation keys
  const qualityAssuranceList = [
    "quality_assured_curriculum",
    "internationally_recognized_qualifications",
    "rigorous_academic_standards",
    "industry_aligned_learning_outcomes",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      {" "}
      {/* Responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {" "}
          {/* Responsive margin-bottom */}
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent-blue/10 mb-4 sm:mb-6">
            {" "}
            {/* Responsive size */}
            <Award className="h-7 w-7 sm:h-8 sm:w-8 text-accent-blue" />{" "}
            {/* Responsive icon size */}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {" "}
            {/* Responsive text size */}
            {t("description")}
          </p>
        </div>

        {/* Accreditations Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-stretch ${
            // Use items-stretch for equal height
            locale === "ar" ? "rtl" : "" // Apply RTL class for consistency, though flex/grid handle it mostly
          }`}
        >
          {accreditationsData.map((accreditation) => (
            <AccreditationItem
              key={accreditation.nameKey} // Unique key for each item
              nameKey={accreditation.nameKey} // Full path to the translation key
            />
          ))}
        </div>

        {/* International Quality Assurance Section */}
        <div
          className={`mt-12 md:mt-16 lg:mt-20 bg-primary text-white p-6 md:p-8 rounded-xl shadow-lg ${
            locale === "ar" ? "text-right" : "text-left" // Apply text alignment based on locale
          }`}
        >
          {" "}
          {/* Responsive padding */}
          <div
            className={`grid md:grid-cols-2 gap-8 items-center ${
              locale === "ar" ? "md:grid-flow-col-dense-row" : "" // Adjust grid flow for RTL if needed, typically handled by column order
            }`}
          >
            {/* Text Content */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                {t("quality_assurance.heading")}
              </h3>
              <p className="text-accent-white/90 text-sm sm:text-base mb-4">
                {t("quality_assurance.description")}
              </p>
              <ul className="space-y-2">
                {qualityAssuranceList.map((itemKey) => (
                  <li
                    key={itemKey}
                    className={`flex items-start ${
                      locale === "ar" ? "flex-row-reverse" : "" // Reverse icon/text order for RTL
                    }`}
                  >
                    <Check
                      className={`h-5 w-5 text-accent-green flex-shrink-0 mt-1 ${
                        locale === "ar" ? "mr-0 ml-2" : "mr-2 ml-0" // Adjust icon margin for RTL
                      }`}
                    />
                    <span className="text-sm sm:text-base">
                      {t(`quality_assurance.list.${itemKey}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image Content */}
            <div className="relative">
              <Image
                src={Img1}
                width={500}
                height={300}
                alt={t("quality_assurance.image_alt")} // Translated alt text
                className="rounded-lg shadow-lg w-full h-auto" // Ensure image is responsive within its container
                sizes="(max-width: 768px) 100vw, 50vw" // Add responsive sizes for Next.js Image optimization
                quality={85} // Optimize image quality
              />
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-blue rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent-green rounded-full opacity-20 animate-pulse-slow delay-200"></div>{" "}
              {/* Added a second circle for symmetry/design */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accreditations;
