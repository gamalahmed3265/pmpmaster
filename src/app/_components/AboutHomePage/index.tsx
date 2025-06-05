import React from "react";
import {
  GraduationCap,
  Globe,
  Award,
  BookOpenCheck, // This seems to be the icon you intended for the checkmark lists
} from "lucide-react";
import Img1 from "@/img/photo/pexels-photo-3153198.jpeg";
import Img2 from "@/img/photo/pexels-photo-8199562.jpeg";
import Image from "next/image";
import AboutContent from "@/app/about_us/_components/AboutContent";
import AboutImageGallery from "@/app/about_us/_components/AboutImageGallery";
import AboutStats from "@/app/about_us/_components/AboutStats";

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
