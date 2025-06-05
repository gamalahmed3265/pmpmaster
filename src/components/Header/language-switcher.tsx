"use client";
// import Image from "next/image";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

import { getCookie, setCookie } from "cookies-next";

import { Languages } from "@/lib/type-lists";
import { ChevronDown, Globe } from "lucide-react";
import { LANGUAGE_COOKIE } from "@/lib/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { checkLanguage } from "@/lib/utils";

export default function NavbarLanguageSwitcher() {
  const router = useRouter();
  const t = useTranslations();

  const locale = getCookie(LANGUAGE_COOKIE) as string;
  const language = checkLanguage(locale);

  const usedLanguage =
    Languages.array.find((lang) => lang.locale === language) ||
    Languages.array[0];

  const handleChangeLanguage = (lang: string) => {
    setCookie(LANGUAGE_COOKIE, lang);
    router.refresh();
  };

  return (
    <button
      className="p-2 hover:bg-gray-100 rounded-full"
      aria-label="Switch to Arabic"
      onClick={() => handleChangeLanguage(language === "ar" ? "en" : "ar")}
    >
      {/* Use the Lucide React component directly */}
      <Globe className="h-5 w-5 text-primary" />
    </button>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 items-center active:right-0 focus:ring-0 focus-visible:ring-0">
        {/* <Image
          src={usedLanguage.image}
          width={24}
          height={24}
          alt={usedLanguage.name}
          className="rounded-full"
        /> */}
        <Globe className="h-4 w-4 ml-2" />

        {t(usedLanguage.name)}
        <ChevronDown size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Languages.array.map((lang) => (
          <DropdownMenuItem
            key={lang.locale}
            className="flex gap-2 items-center"
            onClick={() => handleChangeLanguage(lang.locale)}
          >
            {/* <Image src={lang.image} width={24} height={24} alt={lang.name} /> */}
            {t(lang.name)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
