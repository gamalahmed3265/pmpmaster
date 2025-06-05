// src/components/Article.tsx
"use client"; // Required for useTranslations

import React from "react";
import { useTranslations, useLocale } from "next-intl";

// Import local images for articles
import Img1 from "@/img/photo/pexels-photo-3184291.jpeg";
import Img2 from "@/img/photo/pexels-photo-3183150.jpeg";
import Img3 from "@/img/photo/pexels-photo-3184296.jpeg";
import ArticleCard from "./_components/ArticleCard";

// Define the structure for an article
interface ArticleData {
  id: string;
  image: any; // StaticImageData from Next.js Image
  categoryKey: string;
  dateKey: string;
  authorKey: string;
  titleKey: string;
  descriptionKey: string;
  link: string;
}

const articles: ArticleData[] = [
  {
    id: "article1",
    image: Img1,
    categoryKey: "business_education_category",
    dateKey: "mar_15_2025_date",
    authorKey: "dr_sarah_johnson_author",
    titleKey: "future_of_business_education_title",
    descriptionKey: "future_of_business_education_desc",
    link: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "article2",
    image: Img2,
    categoryKey: "certification_category",
    dateKey: "mar_10_2025_date",
    authorKey: "prof_michael_chen_author",
    titleKey: "pmp_certification_benefits_title",
    descriptionKey: "pmp_certification_benefits_desc",
    link: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "article3",
    image: Img3,
    categoryKey: "professional_development_category",
    dateKey: "mar_05_2025_date",
    authorKey: "dr_emily_rodriguez_author",
    titleKey: "rise_of_micro_credentials_title",
    descriptionKey: "rise_of_micro_credentials_desc",
    link: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
];

const Article = () => {
  const t = useTranslations("article"); // Main namespace for Article section
  const locale = useLocale();

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center max-w-3xl mx-auto mb-12 md:mb-16 ${
            locale === "ar" ? "text-right" : "text-left"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {t("heading")}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {t("description")}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <ArticleCard
              key={article.id}
              imageSrc={article.image}
              categoryKey={article.categoryKey}
              dateKey={article.dateKey}
              authorKey={article.authorKey}
              titleKey={article.titleKey}
              descriptionKey={article.descriptionKey}
              readMoreLink={article.link}
            />
          ))}
        </div>

        {/* View All Articles Button */}
        <div className="text-center mt-12">
          <a
            href="https://deluxe-mousse-f4e584.netlify.app/#" // Replace with actual articles page link
            className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 px-6 py-3 text-base bg-accent-blue text-white hover:bg-accent-blue/90 shadow-md"
          >
            {t("view_all_articles_button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Article;
