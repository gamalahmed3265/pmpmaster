"use client";
import logo from "@/img/logo.webp";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, ShoppingBag, ChevronDown } from "lucide-react";
import Image from "next/image";
import NavbarLanguageSwitcher from "./language-switcher";
import SearchProgramsDropdown from "./SearchProgramsDropdown";
import { useLocale, useTranslations } from "next-intl";

// Define the structure of your navigation items
interface NavItem {
  id: string;
  href: string;
  translationKey: string;
  hasDropdown?: boolean;
  dropdownId?: string;
  dropdownItems?: NavItem[];
}

// Define your navigation items as a constant array
// You could also import this from a separate file like `import { NAVIGATION_ITEMS } from '@/constants/navigation';`
const NAVIGATION_ITEMS: NavItem[] = [
  {
    id: "home",
    href: "/",
    translationKey: "home",
  },
  {
    id: "courses",
    href: "#",
    translationKey: "courses",
    hasDropdown: true,
    dropdownId: "courses",
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

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const locale = useLocale();

  // Initialize useTranslations for each relevant namespace
  const tNavigation = useTranslations("header.Navigation");
  const tCourseCategories = useTranslations("header.CourseCategories");
  const tExamCategories = useTranslations("header.ExamCategories");
  const tAuth = useTranslations("header.Auth");
  const tSearchDropdown = useTranslations("header.SearchDropdown");
  // const tCommon = useTranslations("header.Common"); // Not directly used in Navigation, but can be passed to SearchProgramsDropdown

  // Function to toggle general dropdowns (like Courses, Exams, Mobile User/Language)
  const toggleDropdown = (dropdownId: string) => {
    setActiveDropdown(activeDropdown === dropdownId ? null : dropdownId);
  };

  const getTranslationForDropdownItem = (item: NavItem) => {
    if (item.id.includes("Courses")) {
      // Check for dropdown items under Courses
      return tCourseCategories(item.translationKey);
    }
    if (item.id.includes("Exams")) {
      // Check for dropdown items under Exams
      return tExamCategories(item.translationKey);
    }
    return tNavigation(item.translationKey); // Fallback to general navigation
  };

  return (
    <header className="header">
      <div className="header-fixed">
        <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Mobile menu items (right side on mobile) */}
              <div className="flex items-center space-x-2 space-x-reverse md:hidden">
                {/* Mobile User Menu */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown("mobileUser")}
                    className="p-2 text-gray-700 hover:text-primary"
                    aria-label={tAuth("login")}
                  >
                    <User className="h-5 w-5" />
                  </button>
                  {activeDropdown === "mobileUser" && (
                    <div className="absolute top-full right-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <a
                        href="/login"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {tAuth("login")}
                      </a>
                      <a
                        href="/register"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {tAuth("register")}
                      </a>
                    </div>
                  )}
                </div>

                {/* Mobile Language Switcher */}
                <NavbarLanguageSwitcher />
              </div>

              {/* Logo (center) */}
              <div className="flex items-center  space-x-reverse">
                {/* Updated Logo and Branding */}
                {/* <div className="flex items-center h-10">
                  <div className="relative mr-3">
                    <div className="w-8 h-12 relative">
                      <div className="absolute bottom-0 left-0 w-6 h-6 bg-white rounded-sm"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 rounded-tl-full rounded-tr-full bg-gradient-to-r from-accent-green to-accent-blue"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-primary">
                      Certified
                    </span>
                    <span className="text-[0.6rem] tracking-wider text-primary/80">
                      ACHIEVE. EXCEL. LEAD.
                    </span>
                  </div>
                </div> */}
                <div className="w-12 h-12 relative">
                  <Image
                    src={logo}
                    alt=""
                    fill
                    className="w-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8 space-x-reverse">
                {NAVIGATION_ITEMS.map((item) => (
                  <div key={item.id} className="relative group">
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleDropdown(item.dropdownId!)}
                        className="flex items-center text-primary hover:text-accent-blue font-medium transition-colors "
                        aria-label={tNavigation(item.translationKey)}
                      >
                        {tNavigation(item.translationKey)}
                        <ChevronDown className="h-4 w-4 mr-1" />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center text-primary hover:text-accent-blue font-medium transition-colors "
                      >
                        {tNavigation(item.translationKey)}
                      </a>
                    )}
                    {item.hasDropdown && activeDropdown === item.dropdownId && (
                      <div className="absolute top-full right-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <a
                            key={dropdownItem.id}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {getTranslationForDropdownItem(dropdownItem)}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop Right Side Items */}
              <div className="hidden md:flex items-center space-x-4 space-x-reverse">
                <SearchProgramsDropdown currentLocale={locale} />
                <NavbarLanguageSwitcher />

                {/* User/Auth Buttons */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border border-accent-blue text-accent-blue hover:bg-accent-blue/10"
                >
                  {tAuth("login")}
                </Button>
                <Button
                  size="sm"
                  className="bg-accent-blue hover:bg-accent-blue/90 text-white shadow-md"
                >
                  <ShoppingBag className="h-4 w-4 ml-2" />
                  {tAuth("startNow")}
                </Button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label={
                    isMobileMenuOpen
                      ? tSearchDropdown("closeSearch")
                      : tSearchDropdown("openSearch")
                  }
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  <SearchProgramsDropdown currentLocale={locale} />

                  {NAVIGATION_ITEMS.map((item) => (
                    <div key={`mobile-${item.id}`}>
                      {item.hasDropdown ? (
                        <button
                          onClick={() =>
                            toggleDropdown(`mobile${item.dropdownId!}`)
                          } // Use a distinct ID for mobile dropdowns
                          className="flex items-center text-primary hover:text-accent-blue font-medium transition-colors "
                          aria-label={tNavigation(item.translationKey)}
                        >
                          {tNavigation(item.translationKey)}
                          <ChevronDown className="h-4 w-4" />
                        </button>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center text-primary hover:text-accent-blue font-medium transition-colors"
                        >
                          {tNavigation(item.translationKey)}
                        </a>
                      )}
                      {item.hasDropdown &&
                        activeDropdown === `mobile${item.dropdownId}` && (
                          <div className="mt-2 pr-4 space-y-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <a
                                key={`mobile-${dropdownItem.id}`}
                                href={dropdownItem.href}
                                className="block text-sm text-gray-600 hover:text-primary"
                              >
                                {getTranslationForDropdownItem(dropdownItem)}
                              </a>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}

                  <div className="flex flex-col space-y-2 pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border border-accent-blue text-accent-blue hover:bg-accent-blue/10"
                    >
                      {tAuth("login")}
                    </Button>
                    <Button
                      size="sm"
                      className="bg-accent-blue hover:bg-accent-blue/90 text-white shadow-md"
                    >
                      <ShoppingBag className="h-4 w-4 ml-2" />
                      {tAuth("startNow")}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="sidebar-overlay"></div>
      </div>
    </header>
  );
};

export default Navigation;
