// src/components/resources/ResourceCategoryTabs.tsx
"use client"; // Required for Shadcn UI components that use client-side hooks

import React, { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Adjust path if needed
import { FileText, BookOpen, Video, File } from "lucide-react";
import ResourceCard from "./ResourceCard";

// Define the shape of a resource item
interface ResourceItem {
  id: string;
  category: "brochures" | "guides" | "videos" | "forms";
  icon: typeof FileText | typeof BookOpen | typeof Video | typeof File; // Use typeof LucideIcon
  titleKey: string;
  size: string;
  fileType: string;
  downloadLink: string;
}

const allResources: ResourceItem[] = [
  {
    id: "mba_brochure",
    category: "brochures",
    icon: FileText,
    titleKey: "mba_brochure_title",
    size: "3.2 MB",
    fileType: "PDF",
    downloadLink: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "dba_brochure",
    category: "brochures",
    icon: FileText,
    titleKey: "dba_brochure_title",
    size: "4.1 MB",
    fileType: "PDF",
    downloadLink: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "pmp_guide",
    category: "guides",
    icon: BookOpen,
    titleKey: "pmp_guide_title",
    size: "2.8 MB",
    fileType: "PDF",
    downloadLink: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "admission_guide",
    category: "guides",
    icon: BookOpen,
    titleKey: "admission_guide_title",
    size: "1.5 MB",
    fileType: "PDF",
    downloadLink: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "orientation_video",
    category: "videos",
    icon: Video,
    titleKey: "orientation_video_title",
    size: "120 MB",
    fileType: "MP4",
    downloadLink: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "program_overview_video",
    category: "videos",
    icon: Video,
    titleKey: "program_overview_video_title",
    size: "80 MB",
    fileType: "MP4",
    downloadLink: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
  {
    id: "application_form",
    category: "forms",
    icon: File,
    titleKey: "application_form_title",
    size: "0.5 MB",
    fileType: "PDF",
    downloadLink: "https://deluxe-mousse-f4e584.netlify.app/#",
  },
];

const ResourceCategoryTabs = () => {
  const t = useTranslations("resources.ResourceCategoryTabs"); // Namespace for tabs
  const locale = useLocale();
  const [activeTab, setActiveTab] =
    useState<ResourceItem["category"]>("brochures"); // Default active tab

  const categories = [
    { value: "brochures", labelKey: "brochures_tab", icon: FileText },
    { value: "guides", labelKey: "guides_tab", icon: BookOpen },
    { value: "videos", labelKey: "videos_tab", icon: Video },
    { value: "forms", labelKey: "forms_tab", icon: File },
  ];

  const filteredResources = allResources.filter(
    (resource) => resource.category === activeTab
  );

  return (
    <Tabs
      defaultValue="brochures"
      onValueChange={(value) => setActiveTab(value as ResourceItem["category"])}
      className="w-full flex justify-center items-center"
    >
      <TabsList
        className={`flex flex-wrap justify-center h-auto bg-transparent mb-12 p-0 ${
          locale === "ar"
            ? "flex-row-reverse [&>*]:data-[state=active]:border-r-0 [&>*]:data-[state=active]:border-l-2 [&>*]:data-[state=active]:border-accent-blue"
            : ""
        }`}
      >
        {categories.map((category) => (
          <TabsTrigger
            key={category.value}
            value={category.value}
            className={`px-4 py-2 sm:px-6 sm:py-3 rounded-full flex items-center gap-x-2 text-gray-700 data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-md hover:bg-gray-100 transition-colors justify-center  whitespace-nowrap text-sm sm:text-base`}
          >
            <category.icon className="h-5 w-5" />
            <span>{t(category.labelKey)}</span>
          </TabsTrigger>
        ))}
      </TabsList>

      {categories.map((category) => (
        <TabsContent key={category.value} value={category.value}>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div
              className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-gray-100 ${
                locale === "ar"
                  ? "divide-x-0 md:divide-x md:divide-x-reverse"
                  : "divide-x"
              } divide-y md:divide-y-0 `}
            >
              {filteredResources
                .filter((res) => res.category === category.value) // Ensure content matches the tab
                .map((resource) => (
                  <ResourceCard
                    key={resource.id}
                    icon={resource.icon}
                    titleKey={`${resource.titleKey}`} // Full path for translation
                    size={resource.size}
                    fileType={resource.fileType}
                    downloadLink={resource.downloadLink}
                  />
                ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default ResourceCategoryTabs;
