// src/components/contactus/ContactInfo.tsx
"use client";

import React from "react";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import SocialIcons from "./SocialIcons";

const ContactInfo = () => {
  const t = useTranslations("contactUs.ContactInfo");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const contactDetails = [
    {
      icon: MapPin,
      label: t("address_label"),
      value: t("address_value"),
    },
    {
      icon: Phone,
      label: t("phone_label"),
      value: (
        <>
          <a href="tel:+966542341634" className="hover:underline block">
            +966542341634
          </a>
          <a href="tel:+966541323774" className="hover:underline block">
            +966541323774
          </a>
          <a href="tel:+966562646555" className="hover:underline block">
            +966562646555
          </a>
          <a href="tel:+201211269722" className="hover:underline block">
            +201211269722
          </a>
        </>
      ),
    },
    {
      icon: Mail,
      label: t("email_label"),
      value: (
        <a href="mailto:Info@pmpmaster.com" className="hover:underline">
          Info@pmpmaster.com
        </a>
      ),
    },
    {
      icon: Globe,
      label: t("website_label"),
      value: (
        <a
          href="https://www.pmpmaster.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          www.pmpmaster.com
        </a>
      ),
    },
  ];

  return (
    <div className={` p-6 sm:p-8 h-full flex flex-col justify-between `}>
      <div>
        <h3 className="text-2xl font-bold text-primary mb-6">
          {t("info_heading")}
        </h3>
        <p className="text-gray-600 mb-8">{t("info_description")}</p>
        <ul className="space-y-6">
          {contactDetails.map((detail, index) => (
            <li key={index} className={`flex items-center `}>
              <div
                className={`flex-shrink-0 text-accent-blue ${
                  isRTL ? "ml-4" : "mr-4"
                }`}
              >
                <detail.icon className="h-6 w-6" />
              </div>
              <div>
                <strong className="block text-primary text-lg mb-1">
                  {detail.label}
                </strong>
                <span className="text-gray-600 break-words">
                  {detail.value}
                </span>
              </div>
            </li>
          ))}
        </ul>
        <SocialIcons />
      </div>
    </div>
  );
};

export default ContactInfo;
