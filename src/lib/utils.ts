import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Languages } from "./type-lists";
import { TLanguage } from "@/app/types/default";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function checkLanguage(locale: string): TLanguage {
  return (Languages.all.includes(locale) ? locale : "en") as TLanguage;
}
