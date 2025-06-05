// src/components/instructors/InstructorCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl"; // useLocale to pick correct name/role
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Correct type for Font Awesome icons

// Define the shape of a social link within an instructor
interface InstructorSocialLink {
  type: string; // e.g., 'facebook', 'twitter'
  icon: IconDefinition; // Font Awesome icon definition
  href: string;
}

// Define the shape of an instructor's data
interface Instructor {
  id: number;
  name_en: string;
  name_ar: string;
  role_en: string;
  role_ar: string;
  profile_link: string;
  image_src: string;
  image_alt_en: string;
  image_alt_ar: string;
  social_links: InstructorSocialLink[];
}

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  const locale = useLocale();
  const isRTL = locale === "ar";

  const displayName = isRTL ? instructor.name_ar : instructor.name_en;
  const displayRole = isRTL ? instructor.role_ar : instructor.role_en;
  const displayImageAlt = isRTL
    ? instructor.image_alt_ar
    : instructor.image_alt_en;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
      <div className="relative w-full h-48 overflow-hidden">
        <Link href={instructor.profile_link} className="block w-full h-full">
          <Image
            src={instructor.image_src}
            alt={displayImageAlt}
            width={300} // Approximate dimensions for consistency
            height={200}
            quality={80}
            loading="lazy" // Optimize image loading
          />
        </Link>
      </div>
      <div className={`p-4 flex flex-col flex-grow `}>
        <h3 className="text-xl font-semibold text-gray-800 mb-1">
          <Link
            href={instructor.profile_link}
            className="hover:text-accent-blue transition-colors"
          >
            {displayName}
          </Link>
        </h3>
        <div className="text-gray-600 text-sm mb-3">{displayRole}</div>

        {instructor.social_links.length > 0 && (
          <div
            className={`mt-auto pt-3 border-t border-gray-200 ${
              isRTL ? "border-r-0 border-l-0" : ""
            }`}
          >
            <ul className={`flex ${isRTL ? "flex-row-reverse" : "space-x-2"}`}>
              {instructor.social_links.map((socialLink, index) => (
                <li key={index}>
                  <a
                    href={socialLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent-blue hover:text-white transition-all duration-200"
                    aria-label={`${socialLink.type} profile of ${displayName}`} // Good for accessibility
                  >
                    <FontAwesomeIcon
                      icon={socialLink.icon}
                      className="h-4 w-4"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstructorCard;
