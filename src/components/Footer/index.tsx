"use client"; // Keep this for client-side functionality
import Logo from "@/img/logo.webp"; // Using .webp as per your new snippet
import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl"; // Import useTranslations

import {
  Twitter,
  Linkedin,
  Instagram,
  Globe,
  MapPin,
  Phone,
  Mail,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import SocialIcons from "@/app/contact_us/_components/SocialIcons";

const Footer = () => {
  const t = useTranslations("Footer"); // Initialize translations for the 'Footer' namespace

  // --- Footer Data Definitions ---
  // All titles and texts that need translation will now use `t()`

  const programLinks = [
    {
      title: t("programMBA"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
    {
      title: t("programPhD"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
    {
      title: t("programMSc"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
    {
      title: t("programDBA"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
    {
      title: t("programBachelor"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
    {
      title: t("programPMPCert"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
    {
      title: t("programPMOCPCert"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
    {
      title: t("programOtherCourses"),
      href: "https://deluxe-mousse-f4e584.netlify.app/#",
    },
  ];

  const quickLinks = [
    {
      title: t("quickLinkAllCourses"),
      href: "https://www.pmpmaster.com/allcourses",
    },
    {
      title: t("quickLinkInstructors"),
      href: "https://www.pmpmaster.com/instructors",
    },
    {
      title: t("quickLinkPMPExams"),
      href: "https://pmpmaster.com/exams?category_id=3",
    },
    {
      title: t("quickLinkPMOExams"),
      href: "https://pmpmaster.com/exams?category_id=6",
    },
    {
      title: t("quickLinkPMPBooks"),
      href: "https://www.pmpmaster.com/books_store",
    },
    {
      title: t("quickLinkAboutUs"),
      href: "https://www.pmpmaster.com/about_us",
    },
    {
      title: t("quickLinkCheckSerial"),
      href: "https://www.pmpmaster.com/check_serial",
    },
    { title: t("quickLinkAskAI"), href: "https://pmpmaster.com/chat_chatGPT" },
    {
      title: t("quickLinkContactUs"),
      href: "https://www.pmpmaster.com/contact_us",
    },
    {
      title: t("quickLinkSubscriptions"),
      href: "https://www.pmpmaster.com/packages",
    },
    { title: t("quickLinkArticles"), href: "https://www.pmpmaster.com/blog" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: t("contactAddress"),
    },
    {
      icon: Phone,
      text: (
        <>
          <a href="tel:+966542341634">+966542341634</a>
          <br />
          <a href="tel:+966541323774">+966541323774</a>
          <br />
          <a href="tel:+966562646555">+966562646555</a>
          <br />
          <a href="tel:+201211269722">+201211269722</a>
        </>
      ),
    },
    {
      icon: Mail,
      text: <a href="mailto:alsenosy15@gmail.com">alsenosy15@gmail.com</a>,
    },
  ];

  return (
    <footer className="bg-gray-50 pt-20 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* About Section */}
          <div>
            <div className="flex items-center h-10 mb-6">
              <Image
                width={160}
                height={160}
                src={Logo}
                alt={t("logoAltText")}
                className="h-20 w-40 object-contain"
              />
            </div>
            {/* The paragraph was empty in the HTML, so it remains empty, or you can add a translation key if content is desired */}
            <SocialIcons />
          </div>

          {/* Programs Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">
              {t("programsTitle")}
            </h3>
            <ul className="space-y-3">
              {programLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-accent-blue"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">
              {t("quickLinksTitle")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-accent-blue"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-6">
              {t("contactUsTitle")}
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 text-accent-blue flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-200 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            {t.rich("copyrightText", {
              year: new Date().getFullYear(), // Dynamically get the current year
              company: "Professional Engineers",
              developer: (chunks) => (
                <a
                  href="https://hyper-design.com/"
                  className="hover:text-accent-blue"
                >
                  {chunks}
                </a>
              ),
            })}
            {/* <Link href="https://www.cangrowonline.com/">
              <Image
                alt=""
                src={
                  "https://alrehab-eg.com/front/alrehab/assets/CanGrow%20logo.png"
                }
                width={160}
                height={160}
              />
            </Link> */}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
