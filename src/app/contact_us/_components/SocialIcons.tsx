// src/components/common/SocialIcons.tsx
"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";

// Import Font Awesome components and specific icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF, // Note: Often 'f' at the end for brands
  faLinkedinIn,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

// Define the structure for each social link using Font Awesome's IconDefinition type
interface SocialLink {
  id: string; // Unique ID for key prop
  icon: any; // Use 'any' or FontAwesomeIcon's specific type if needed: IconDefinition
  href: string; // URL for the social link
  ariaLabelKey: string; // Translation key for accessibility (aria-label)
}

const socialLinks: SocialLink[] = [
  {
    id: "facebook",
    icon: faFacebookF, // Using faFacebookF for brand icon
    href: "https://www.facebook.com/pengineerspmpmaster",
    ariaLabelKey: "social_media.facebook_aria_label",
  },
  {
    id: "linkedin",
    icon: faLinkedinIn, // Using faLinkedinIn for brand icon
    href: "https://www.linkedin.com/company/professionalengineers",
    ariaLabelKey: "social_media.linkedin_aria_label",
  },
  {
    id: "youtube",
    icon: faYoutube,
    href: "https://www.youtube.com/channel/UCPL7N4GhsOFVxm9piLn2UYg",
    ariaLabelKey: "social_media.youtube_aria_label",
  },
  {
    id: "whatsapp",
    icon: faWhatsapp,
    href: "https://api.whatsapp.com/send?phone=966541323774",
    ariaLabelKey: "social_media.whatsapp_aria_label",
  },
];

const SocialIcons = () => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div className="mt-2">
      <ul
        className={`flex 
        `}
      >
        {socialLinks.map((link) => (
          <li key={link.id}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
              className="w-10 h-10 rounded-full hover:shadow-sm flex items-center justify-center text-accent-blue hover:scale-110 hover-translate-middle-x p-2 hover:text-white hover:bg-accent-blue transition-colors hvr-buzz-out"
              aria-label={t(link.ariaLabelKey)}
            >
              <FontAwesomeIcon icon={link.icon} className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialIcons;
