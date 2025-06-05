// src/app/[locale]/books_store/page.tsx
"use client";

import React, { useState, useEffect } from "react";
import { ALL_BOOKS, ALL_CATEGORIES, Book } from "./data/books"; // Import your data
import BookFilterSidebar from "./_components/BookFilterSidebar";
import BookGrid from "./_components/BookGrid";
import { useTranslations, useLocale } from "next-intl";

const BooksStorePage: React.FC = () => {
  const t = useTranslations("bookstore"); // Main namespace for the page
  const locale = useLocale();
  const isRTL = locale === "ar";

  const [activeCategoryId, setActiveCategoryId] = useState<number>(0); // 0 for "All Books"
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (activeCategoryId === 0) {
      setFilteredBooks(ALL_BOOKS);
    } else {
      setFilteredBooks(
        ALL_BOOKS.filter((book) => book.categoryIds.includes(activeCategoryId))
      );
    }
  }, [activeCategoryId]);

  const handleCategorySelect = (categoryId: number) => {
    setActiveCategoryId(categoryId);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t("main_heading")}
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            {t("main_description")}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-4 gap-8 ${
            isRTL ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* Sidebar for filters */}
          <div className="lg:col-span-1">
            <BookFilterSidebar
              categories={ALL_CATEGORIES}
              onSelectCategory={handleCategorySelect}
              activeCategoryId={activeCategoryId}
            />
          </div>

          {/* Main content area for books */}
          <div className="lg:col-span-3">
            {filteredBooks.length > 0 ? (
              <BookGrid books={filteredBooks} />
            ) : (
              <div
                className={`bg-white p-8 rounded-lg shadow-md ${
                  isRTL ? "text-right" : "text-left"
                }`}
              >
                <p className="text-gray-600 text-lg">{t("no_books_found")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksStorePage;
