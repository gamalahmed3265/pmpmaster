// components/Featured.tsx
"use client"; // If this component is rendered on the client

import React from "react";
import { useTranslations } from "next-intl";
import FeaturedCard from "./FeaturedCard"; // Adjust this import path as needed

// Import your images
import Img1 from "@/img/photo/pexels-photo-5940841.jpeg";
import Img2 from "@/img/photo/pexels-photo-6146970.jpeg";
import Img3 from "@/img/photo/pexels-photo-5428148.jpeg";
import Img4 from "@/img/photo/pexels-photo-3183153.jpeg";

const Featured = () => {
  const t = useTranslations("featured"); // Accesses the "featured" object in your JSON

  // Define the data for each FeaturedCard
  const featuredPrograms = [
    {
      id: "phd-management-business",
      imageUrl: Img1,
      imageAltKey: "academic_phd_management_business_alt",
      views: 3144,
      categoryKey: "academic_phd_management_business_category",
      titleKey: "academic_phd_management_business_title",
      descriptionKey: "academic_phd_management_business_description",
      durationKey: "academic_phd_management_business_duration",
      deliveryModeKey: "delivery_mode",
      linkHref: "/programs/phd-management-business", // Example link
    },
    {
      id: "mba",
      imageUrl: Img2,
      imageAltKey: "mba_alt",
      views: 8276,
      categoryKey: "mba_category",
      titleKey: "mba_title",
      descriptionKey: "mba_description",
      durationKey: "mba_duration",
      deliveryModeKey: "delivery_mode",
      universityNameKey: "anglia_ruskin_university_name",
      universityDescriptionKey: "anglia_ruskin_university_description",
      linkHref: "/programs/mba", // Example link
    },
    {
      id: "bba",
      imageUrl: Img3,
      imageAltKey: "bba_alt",
      views: 12450,
      categoryKey: "bba_category",
      titleKey: "bba_title",
      descriptionKey: "bba_description",
      durationKey: "bba_duration",
      deliveryModeKey: "delivery_mode",
      universityNameKey: "uclan_university_name",
      universityDescriptionKey: "uclan_university_name_description", // Using the updated key
      linkHref: "/programs/bba", // Example link
    },
    {
      id: "msc-project-management",
      imageUrl: Img4,
      imageAltKey: "msc_project_management_alt",
      views: 22564,
      categoryKey: "msc_project_management_category",
      titleKey: "msc_project_management_title",
      descriptionKey: "msc_project_management_description",
      durationKey: "msc_project_management_duration",
      deliveryModeKey: "delivery_mode",
      price: "SAR 37,000 - 42,000", // Price is not translated, so it's passed directly
      universityNameKey: "anglia_ruskin_university_name",
      universityDescriptionKey: "uk_university_description", // Using the updated key
      linkHref: "/programs/msc-project-management", // Example link
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("title")} {/* Translated title */}
          </h2>
          <p className="text-gray-600 text-lg">
            {t("description")} {/* Translated description */}
          </p>
        </div>
        <div className="space-y-10">
          {featuredPrograms.map((program) => (
            <FeaturedCard key={program.id} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
