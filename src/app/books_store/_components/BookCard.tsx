// src/components/bookstore/BookCard.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";
import { Book } from "../data/books";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const t = useTranslations(); // Use general translations for currency
  const locale = useLocale();
  const isRTL = locale === "ar";

  const displayTitle = isRTL ? book.title_ar : book.title_en;
  const displayCategories = isRTL ? book.category_ar : book.category_en;

  const priceDisplay =
    book.price_type === "free" ? (
      <p>{t("bookstore.free_label")}</p> // Translate "مجانى"
    ) : (
      <p
        className={`text-accent-blue font-semibold ${
          isRTL ? "flex-row-reverse" : ""
        }`}
      >
        {book.price}
        {book.originalPrice && (
          <del className="text-gray-400 text-sm mx-1">{book.originalPrice}</del>
        )}
        {book.currency_key && ` ${t(book.currency_key)}`}
      </p>
    );

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <Link
        href={book.bookLink}
        className="block relative h-48 w-full overflow-hidden group"
      >
        <Image
          src={book.imgSrc}
          alt={displayTitle}
          width={300} // Set a base width for Next.js Image
          height={200} // Set a base height for Next.js Image
          quality={80}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </Link>
      <div
        className={`p-4 flex flex-col flex-grow ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <h3 className="text-lg font-semibold text-primary mb-2 flex-grow">
          <Link
            href={book.bookLink}
            className="hover:text-accent-blue transition-colors"
          >
            {displayTitle}
          </Link>
        </h3>
        <div className="flex justify-between items-center mb-3">
          {priceDisplay}
        </div>
        <p className="text-gray-600 text-sm mt-auto">
          <span className="font-semibold">
            {t("bookstore.category_label")}:
          </span>{" "}
          {displayCategories.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default BookCard;
