// navigation.ts (example separate file) or simply at the top of your Navigation.tsx
import { LucideIcon } from "lucide-react"; // Import if you plan to use icons dynamically

interface NavItem {
  id: string; // Unique identifier for the item
  href: string; // The URL link
  translationKey: string; // Key for the main navigation translation
  hasDropdown?: boolean; // Indicates if it has a dropdown
  dropdownId?: string; // ID to manage the active dropdown state
  dropdownItems?: NavItem[]; // Nested items for dropdowns
}

// Define your navigation items as a constant array
export const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "home",
    href: "/",
    translationKey: "home",
  },
  {
    id: "courses",
    href: "#", // Courses itself might not be a direct link, but the dropdown items are
    translationKey: "courses",
    hasDropdown: true,
    dropdownId: "courses", // Use this to toggle the dropdown
    dropdownItems: [
      {
        id: "pmpCourses",
        href: "/category/3/Project-Management",
        translationKey: "pmp", // Points to header.CourseCategories.pmp
      },
      {
        id: "pmoCourses",
        href: "/category/6/PMO",
        translationKey: "pmo", // Points to header.CourseCategories.pmo
      },
      {
        id: "planningCourses",
        href: "/category/7/Planning",
        translationKey: "planning", // Points to header.CourseCategories.planning
      },
      {
        id: "freeCourses",
        href: "/webinars",
        translationKey: "freeCourses", // Points to header.CourseCategories.freeCourses
      },
    ],
  },
  {
    id: "packages",
    href: "/packages",
    translationKey: "packages",
  },
  {
    id: "exams",
    href: "#",
    translationKey: "exams",
    hasDropdown: true,
    dropdownId: "exams",
    dropdownItems: [
      {
        id: "pmpExams",
        href: "/exams?category_id=3",
        translationKey: "pmp", // Points to header.ExamCategories.pmp
      },
      {
        id: "pmoExams",
        href: "/exams?category_id=6",
        translationKey: "pmo", // Points to header.ExamCategories.pmo
      },
      {
        id: "pgmpExams",
        href: "/exams?category_id=7",
        translationKey: "pgmp", // Points to header.ExamCategories.pgmp
      },
    ],
  },
  {
    id: "bookStore",
    href: "/books_store",
    translationKey: "bookStore",
  },
  {
    id: "instructors",
    href: "/instructors",
    translationKey: "instructors",
  },
  {
    id: "aboutUs",
    href: "/about_us",
    translationKey: "aboutUs",
  },
  {
    id: "contactUs",
    href: "/contact_us",
    translationKey: "contactUs",
  },
];
