// src/components/Review.tsx
"use client"; // Required for Swiper and useTranslations

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useTranslations, useLocale } from "next-intl";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import local images for testimonials
import Img1 from "@/img/photo/pexels-photo-2379004.jpeg"; // Example image
import Img2 from "@/img/photo/pexels-photo-2379004.jpeg"; // Add more images as needed
import Img3 from "@/img/photo/pexels-photo-2379004.jpeg";
import Img4 from "@/img/photo/pexels-photo-2379004.jpeg";
import Img5 from "@/img/photo/pexels-photo-2379004.jpeg";
import TestimonialCard from "./_components/TestimonialCard";

// Data for testimonials
const testimonials = [
  {
    id: 1,
    image: Img1,
    altKey: "testimonial1_alt",
    quoteKey: "testimonial1_quote",
    nameKey: "testimonial1_name",
    titleKey: "testimonial1_title",
  },
  {
    id: 2,
    image: Img2,
    altKey: "testimonial2_alt",
    quoteKey: "testimonial2_quote",
    nameKey: "testimonial2_name",
    titleKey: "testimonial2_title",
  },
  {
    id: 3,
    image: Img3,
    altKey: "testimonial3_alt",
    quoteKey: "testimonial3_quote",
    nameKey: "testimonial3_name",
    titleKey: "testimonial3_title",
  },
  {
    id: 4,
    image: Img4,
    altKey: "testimonial4_alt",
    quoteKey: "testimonial4_quote",
    nameKey: "testimonial4_name",
    titleKey: "testimonial4_title",
  },
  {
    id: 5,
    image: Img5,
    altKey: "testimonial5_alt",
    quoteKey: "testimonial5_quote",
    nameKey: "testimonial5_name",
    titleKey: "testimonial5_title",
  },
  // Add more testimonials here as needed
];

const Review = () => {
  const t = useTranslations("review"); // Main namespace
  const locale = useLocale();

  return (
    <section className="py-12 md:py-20">
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

        {/* Swiper Carousel Section */}
        <div className="relative">
          <Swiper
            slidesPerView={1} // Default for mobile
            spaceBetween={20}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
              renderBullet: function (index, className) {
                return `<button class="${className}" aria-label="${t(
                  "pagination_bullet_label",
                  { index: index + 1 }
                )}"></button>`;
              },
            }}
            navigation={{
              nextEl: ".review-button-next",
              prevEl: ".review-button-prev",
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            // Adjust for RTL if the entire Swiper instance needs to be reversed
            // Swiper handles RTL internally for slides if dir="rtl" is set on parent,
            // but for navigation buttons, we handle manually.
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide
                key={testimonial.id}
                className="pb-10"
                style={{ height: "100%" }}
              >
                <TestimonialCard
                  imageSrc={testimonial.image}
                  altKey={testimonial.altKey}
                  quoteKey={testimonial.quoteKey}
                  nameKey={testimonial.nameKey}
                  titleKey={testimonial.titleKey}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom navigation buttons */}
          <button
            className={`review-button-prev absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 text-primary hover:text-accent-blue transition-colors
              ${
                locale === "ar"
                  ? "right-0 -mr-4 md:-mr-6"
                  : "left-0 -ml-4 md:-ml-6"
              }`}
            aria-label={t("prev_testimonial_aria_label")}
          >
            {locale === "ar" ? (
              <ChevronRight className="h-6 w-6" />
            ) : (
              <ChevronLeft className="h-6 w-6" />
            )}
          </button>
          <button
            className={`review-button-next absolute top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center z-10 text-primary hover:text-accent-blue transition-colors
              ${
                locale === "ar"
                  ? "left-0 -ml-4 md:-ml-6"
                  : "right-0 -mr-4 md:-mr-6"
              }`}
            aria-label={t("next_testimonial_aria_label")}
          >
            {locale === "ar" ? (
              <ChevronLeft className="h-6 w-6" />
            ) : (
              <ChevronRight className="h-6 w-6" />
            )}
          </button>

          {/* Custom pagination container */}
          <div
            className={`custom-pagination flex justify-center mt-8 space-x-2 ${
              locale === "ar" ? "flex-row-reverse" : ""
            }`}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Review;
