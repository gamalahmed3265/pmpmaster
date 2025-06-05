// src/components/resources/ContactSupportBanner.tsx
import React from "react";
import { useTranslations, useLocale } from "next-intl";

interface ContactSupportBannerProps {
  headingKey: string;
  descriptionKey: string;
  buttonTextKey: string;
  contactLink: string;
}

const ContactSupportBanner: React.FC<ContactSupportBannerProps> = ({
  headingKey,
  descriptionKey,
  buttonTextKey,
  contactLink,
}) => {
  const t = useTranslations("resources.ContactSupportBanner"); // Specific namespace
  const locale = useLocale();

  return (
    <div className="mt-12 p-6 md:p-8 bg-primary rounded-xl text-white">
      <div
        className={`md:flex items-center justify-between ${
          locale === "ar" ? "md:flex-row-reverse" : ""
        }`}
      >
        <div
          className={`mb-6 md:mb-0 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">
            {t(headingKey)}
          </h3>
          <p className="text-accent-white/90 text-sm md:text-base">
            {t(descriptionKey)}
          </p>
        </div>
        <a
          href={contactLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 md:px-6 md:py-3 bg-white text-primary font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap text-sm md:text-base"
        >
          {t(buttonTextKey)}
        </a>
      </div>
    </div>
  );
};

export default ContactSupportBanner;
