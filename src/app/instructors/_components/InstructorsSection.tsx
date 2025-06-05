// src/components/instructors/InstructorsSection.tsx
"use client";

import React from "react";
import InstructorCard from "./InstructorCard"; // Adjust path as needed
import { useTranslations, useLocale } from "next-intl";
import { instructorsData } from "../data/instructors";

const InstructorsSection = () => {
  const t = useTranslations("instructors");

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className={`max-w-2xl mx-auto text-center mb-12`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("section_heading")}
          </h2>
          <p className="text-gray-600 text-lg">{t("section_description")}</p>
        </div>

        {/* Instructors Grid */}
        <div className="grid gap-2 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {instructorsData.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstructorsSection;
