// src/components/contactus/ContactForm.tsx
"use client";

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";

const ContactForm = () => {
  const t = useTranslations("contactUs.ContactForm");
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend or an API
    console.log("Form submitted:", formData);
    alert(t("submission_success_message")); // Use translated alert
    setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
  };

  return (
    <div className={` p-6 sm:p-8  ${isRTL ? "text-right" : "text-left"}`}>
      <h3 className="text-2xl font-bold text-primary mb-6">
        {t("form_heading")}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            {t("name_label")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("name_placeholder")}
            className={`w-full p-3 border border-gray-300 rounded-md focus:ring-accent-blue focus:border-accent-blue ${
              isRTL ? "text-right" : "text-left"
            }`}
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            {t("email_label")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("email_placeholder")}
            className={`w-full p-3 border border-gray-300 rounded-md focus:ring-accent-blue focus:border-accent-blue ${
              isRTL ? "text-right" : "text-left"
            }`}
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            {t("subject_label")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("subject_placeholder")}
            className={`w-full p-3 border border-gray-300 rounded-md focus:ring-accent-blue focus:border-accent-blue ${
              isRTL ? "text-right" : "text-left"
            }`}
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-medium mb-1"
          >
            {t("message_label")}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder={t("message_placeholder")}
            className={`w-full p-3 border border-gray-300 rounded-md focus:ring-accent-blue focus:border-accent-blue ${
              isRTL ? "text-right" : "text-left"
            }`}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-accent-blue text-white py-3 px-6 rounded-md hover:bg-accent-blue/90 transition-colors font-semibold"
        >
          {t("submit_button")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
