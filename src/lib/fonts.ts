import { Noto_Kufi_Arabic } from "next/font/google";

export const Noto_Kufi_ArabicFont = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"], // Only include weights you actually use
  variable: "--font-noto-kufi-arabic",
});

export function loadFont(language: string | undefined) {
  return language === "ar"
    ? Noto_Kufi_ArabicFont.variable
    : Noto_Kufi_ArabicFont.variable;
}

export function loadPageDirection(language: string | undefined) {
  return language === "ar" ? "rtl" : "ltr";
}
