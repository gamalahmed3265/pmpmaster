// src/app/[locale]/contactus/page.tsx
"use client";
import Logo from "@/img/logo.webp"; // Using .webp as per your new snippet

import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

// Assuming you have a map placeholder image
import ContactInfo from "./_components/ContactInfo";
import ContactForm from "./_components/ContactForm";

const ContactUsPage = () => {
  const t = useTranslations("contactUs");

  return (
    <div className=" py-12 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 `}>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("main_heading")}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            {t("main_description")}
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
