// src/components/bookstore/BookFilterSidebar.tsx
"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { Category, getCategoryTotal } from "../data/books";

interface BookFilterSidebarProps {
  categories: Category[];
  onSelectCategory: (categoryId: number) => void;
  activeCategoryId: number;
}

const BookFilterSidebar: React.FC<BookFilterSidebarProps> = ({
  categories,
  onSelectCategory,
  activeCategoryId,
}) => {
  const t = useTranslations("bookstore.Filter");
  const locale = useLocale();
  const isRTL = locale === "ar";

  return (
    <div
      className={`card bg-white rounded-xl shadow-md p-6 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="card-header border-b pb-4 mb-4">
        <h4 className="text-xl font-bold text-primary mb-0">
          {t("filter_heading")}
        </h4>
      </div>
      <div className="card-body">
        <div className="filter-widget">
          <h4 className="text-lg font-semibold text-primary mb-3">
            {t("categories_heading")}
          </h4>
          <ul className="space-y-2">
            {categories.map((category) => {
              const displayName = isRTL ? category.name_ar : category.name_en;
              const totalBooks = getCategoryTotal(category.id);
              return (
                <li
                  key={category.id}
                  className={`flex items-center justify-between py-2 px-3 rounded-md cursor-pointer transition-colors duration-200 ${
                    activeCategoryId === category.id
                      ? "bg-accent-blue text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => onSelectCategory(category.id)}
                >
                  <label className="flex-grow cursor-pointer">
                    {displayName}
                  </label>
                  <span
                    className={`ml-2 text-sm font-bold ${
                      activeCategoryId === category.id
                        ? "text-white"
                        : "text-gray-500"
                    }`}
                  >
                    ({totalBooks})
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BookFilterSidebar;
