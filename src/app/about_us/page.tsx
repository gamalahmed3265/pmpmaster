// src/components/AboutHomePage.tsx
import React from "react";
import AboutContent from "./_components/AboutContent";
import AboutImageGallery from "./_components/AboutImageGallery";
import AboutStats from "./_components/AboutStats";
// No need for individual Lucide icons here, as they are in sub-components

const AboutHomePage = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      {" "}
      {/* Added background color and responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {" "}
          {/* Adjusted gaps */}
          <AboutContent />
          <AboutImageGallery />
        </div>
        <AboutStats />
      </div>
    </section>
  );
};

export default AboutHomePage;
