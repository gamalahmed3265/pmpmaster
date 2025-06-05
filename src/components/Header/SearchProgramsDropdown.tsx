// src/components/SearchProgramsDropdown.tsx
"use client"; // Mark as a Client Component

import React, { useState } from "react";
import { X, Search } from "lucide-react";
import { useTranslations } from "next-intl"; // Import useTranslations

// Define the type for the component's props (if needed, but locale will be handled by next-intl context)

const SearchProgramsDropdown = ({
  currentLocale = "ar",
}: {
  currentLocale: string;
}) => {
  // Use the useTranslations hook with your namespace
  const t = useTranslations("header.SearchDropdown");
  const tCommon = useTranslations("header.Common"); // For common terms like MBA, PMP

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const dropdownAlignmentClass = currentLocale === "ar" ? "left-0" : "right-0";
  const searchIconLeftRightClass =
    currentLocale === "ar" ? "right-3" : "left-3";
  const inputPaddingClass = currentLocale === "ar" ? "pr-10" : "pl-10";

  return (
    <div className="relative">
      {/* Search Button: Triggers the dropdown toggle */}
      <button
        className="p-2 hover:bg-accent-blue/10 rounded-full transition-colors"
        aria-label={t("openSearch")} // Use translation key
        onClick={toggleDropdown}
      >
        <Search className="h-5 w-5 text-accent-blue" />
      </button>

      {/* Conditional Rendering: Only show the dropdown if 'isOpen' is true */}
      {isOpen && (
        <div
          className={`absolute top-full mt-2 ${dropdownAlignmentClass} w-screen max-w-md bg-white shadow-xl rounded-lg overflow-hidden z-50 border border-accent-blue/20`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-primary">{t("searchTitle")}</h3>{" "}
              {/* Use translation key */}
              {/* Close Button: Also triggers the dropdown toggle */}
              <button
                className="text-gray-500 hover:text-accent-blue transition-colors"
                aria-label={t("closeSearch")} // Use translation key
                onClick={toggleDropdown}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <form>
              <div className="relative">
                <input
                  type="text"
                  placeholder={t("placeholder")} // Use translation key
                  className={`w-full py-2 px-4 ${inputPaddingClass} border border-accent-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all`}
                  value="" // In a real app, manage this with React state
                />
                <Search
                  className={`lucide lucide-search absolute top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-blue ${searchIconLeftRightClass}`}
                />
              </div>
              <div className="mt-3">
                <p className="text-sm text-gray-500">{t("popularSearches")}</p>{" "}
                {/* Use translation key */}
                <div className="flex flex-wrap gap-2 mt-1">
                  <button
                    type="button"
                    className="px-3 py-1 text-xs bg-accent-blue/10 hover:bg-accent-blue/20 rounded-full text-accent-blue transition-colors"
                  >
                    {tCommon("mba")}
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs bg-accent-blue/10 hover:bg-accent-blue/20 rounded-full text-accent-blue transition-colors"
                  >
                    {tCommon("pmp")}
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs bg-accent-blue/10 hover:bg-accent-blue/20 rounded-full text-accent-blue transition-colors"
                  >
                    {tCommon("dba")}
                  </button>
                  <button
                    type="button"
                    className="px-3 py-1 text-xs bg-accent-blue/10 hover:bg-accent-blue/20 rounded-full text-accent-blue transition-colors"
                  >
                    {tCommon("agile")}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchProgramsDropdown;
