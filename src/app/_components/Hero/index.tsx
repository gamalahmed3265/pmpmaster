"use client"; // Required for client-side rendering in Next.js App Router

import React from "react";
import { useTranslations } from "next-intl";
import { GraduationCap, CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Img1 from "@/img/photo/pexels-photo-5212338.jpeg";

const Hero = () => {
  const t = useTranslations("hero");

  return (
    <section className="relative bg-primary pt-16 pb-24 lg:py-0 lg:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-accent-blue/20 to-accent-green/20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-l from-accent-blue/15 to-accent-green/15 blur-3xl"></div>
        <div className="absolute inset-0">
          <div className="floating-dots"></div>
        </div>
      </div>{" "}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-7 max-w-2xl md:col-start-1">
            <div className="flex items-center space-x-2">
              <GraduationCap className="h-6 w-6 text-accent-green" />
              <span className="uppercase tracking-wider text-sm font-medium text-accent-green">
                {t("accreditation")}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t("title")}
            </h1>
            <p className="text-lg md:text-xl text-accent-white leading-relaxed">
              {t("description")}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0" />
                <span className="text-accent-white text-sm font-medium">
                  {t("flexibleLearning")}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0" />
                <span className="text-accent-white text-sm font-medium">
                  {t("industryRecognized")}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0" />
                <span className="text-accent-white text-sm font-medium">
                  {t("expertFaculty")}
                </span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="h-5 w-5 text-accent-green flex-shrink-0" />
                <span className="text-accent-white text-sm font-medium">
                  {t("globalNetwork")}
                </span>
              </div>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row space-x-4 sm:items-center">
              <button className="inline-flex items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50  text-base bg-accent-blue text-white hover:bg-accent-blue/90 shadow-md  px-8 py-4 font-semibold">
                {t("beginJourney")}
                <ArrowRight className="h-5 w-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50  border border-accent-blue text-accent-blue hover:bg-accent-blue/10  text-base px-8 py-4">
                {t("bookConsultation")}
              </button>
            </div>
            <div className="flex items-center space-x-4 pt-6">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-accent-white overflow-hidden bg-primary-light">
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue to-accent-green opacity-80"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-accent-white overflow-hidden bg-primary-light">
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue to-accent-green opacity-80"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-accent-white overflow-hidden bg-primary-light">
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue to-accent-green opacity-80"></div>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-accent-white overflow-hidden bg-primary-light">
                  <div className="w-full h-full bg-gradient-to-br from-accent-blue to-accent-green opacity-80"></div>
                </div>
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">12,000+</span>{" "}
                {t("graduates", { count: 12000 })}{" "}
                <span className="font-semibold text-white">94+</span>{" "}
                {t("countries", { countries: 94 })}
              </p>
            </div>
          </div>
          <div className="hidden md:block relative md:col-start-2">
            {/* Right side image and badges remain mostly unchanged */}
            <div className="absolute -top-16 -left-16 w-32 h-32 bg-accent-green rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-accent-blue rounded-full opacity-10 animate-pulse-slow"></div>
            <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 p-2 rounded-2xl backdrop-blur-sm border border-white/10">
              <div className="overflow-hidden rounded-xl">
                <Image
                  src={Img1}
                  width={500}
                  height={300}
                  alt={t("description")}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-r from-accent-blue to-accent-green text-white font-bold text-xl">
                    {t("successRate")}
                  </div>
                  <div className="text-left">
                    <p className="text-primary font-bold">{t("SuccessRate")}</p>
                    <p className="text-sm text-gray-600">{t("successText")}</p>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -left-6 bg-primary p-4 rounded-xl shadow-lg flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <GraduationCap className="h-5 w-5 text-accent-green" />
                  <span className="text-white font-medium text-sm">
                    {t("accreditationBadge")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
