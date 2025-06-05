// src/data/books.ts

export interface Book {
  id: number;
  title_en: string;
  title_ar: string;
  imgSrc: string;
  price_type: "free" | "paid"; // 'free' or 'paid'
  price?: number; // Price for paid books
  originalPrice?: number; // Original price for discounts
  currency_key?: string; // Translation key for currency (e.g., 'currency.sar')
  category_en: string[]; // Array of English category names
  category_ar: string[]; // Array of Arabic category names
  categoryIds: number[]; // Array of category IDs this book belongs to
  bookLink: string; // URL for the book page
}

export interface Category {
  id: number;
  name_en: string;
  name_ar: string;
}

// Mock Data for Books
export const ALL_BOOKS: Book[] = [
  {
    id: 3,
    title_en: "Professional Project Management",
    title_ar: "إدارة المشاريع الاحترافية",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/80576.webp",
    price_type: "free",
    category_en: ["Professional Project Management"],
    category_ar: ["إدارة المشاريع الاحترافية"],
    categoryIds: [1],
    bookLink:
      "https://www.pmpmaster.com/showBook/3/Project-Management-Professional",
  },
  {
    id: 4,
    title_en: "Tornado Review (English)",
    title_ar: "المراجعة الإعصارية (إنجليزي)",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/82271.webp",
    price_type: "free",
    category_en: ["Professional Project Management"],
    category_ar: ["إدارة المشاريع الاحترافية"],
    categoryIds: [1],
    bookLink: "https://www.pmpmaster.com/showBook/4/Tornado-PMP",
  },
  {
    id: 5,
    title_en: "Professional Project Management (Arabic)",
    title_ar: "إدارة المشاريع الاحترافية (عربي)",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/99083.webp",
    price_type: "free",
    category_en: ["Professional Project Management"],
    category_ar: ["إدارة المشاريع الاحترافية"],
    categoryIds: [1],
    bookLink:
      "https://www.pmpmaster.com/showBook/5/Project-Management-Professional",
  },
  {
    id: 6,
    title_en: "PMP Program Slides by Dr. Ahmed Al-Senousi",
    title_ar:
      "ملفات(سليدات) برنامج إدارة المشاريع الاحترافية للدكتور احمد السنوسي",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/69869.webp",
    price_type: "free",
    category_en: ["Professional Project Management"],
    category_ar: ["إدارة المشاريع الاحترافية"],
    categoryIds: [1],
    bookLink: "https://www.pmpmaster.com/showBook/6/PMP-slides",
  },
  {
    id: 7,
    title_en: "PMO Book",
    title_ar: "كتاب PMO",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/60145.webp",
    price_type: "free",
    category_en: ["Project Management Office"],
    category_ar: ["مكتب إدارة المشاريع"],
    categoryIds: [2],
    bookLink: "https://www.pmpmaster.com/showBook/7/PMO",
  },
  {
    id: 9,
    title_en: "PMO Book (Arabic)",
    title_ar: "PMO Book (عربي)",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/89825.webp",
    price_type: "free",
    category_en: ["Project Management Office"],
    category_ar: ["مكتب إدارة المشاريع"],
    categoryIds: [2],
    bookLink: "https://www.pmpmaster.com/showBook/9/PMO-Book-(عربي)",
  },
  {
    id: 1,
    title_en: "PMP Tornado Review (Arabic)",
    title_ar: "PMP المراجعة الإعصارية (عربي)",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/79840.webp",
    price_type: "free",
    category_en: [
      "Professional Project Management",
      "Project Management Office",
    ],
    category_ar: ["إدارة المشاريع الاحترافية", "مكتب إدارة المشاريع"],
    categoryIds: [1, 2],
    bookLink:
      "https://www.pmpmaster.com/showBook/1/PMP-المراجعة-الإعصارية-(عربى)",
  },
  {
    id: 2,
    title_en: "Project Management Templates",
    title_ar: "قوالب إدارة المشاريع",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/86502.webp",
    price_type: "paid",
    price: 190,
    originalPrice: 375,
    currency_key: "currency.sar",
    category_en: ["Project Management Office"],
    category_ar: ["مكتب إدارة المشاريع"],
    categoryIds: [2],
    bookLink: "https://www.pmpmaster.com/showBook/2/PM-Templates",
  },
  {
    id: 10,
    title_en: "Organizational Development and Institutional Excellence",
    title_ar: "التطوير التنظيمي والتميز المؤسسي",
    imgSrc: "https://www.pmpmaster.com/uploads/books/resize800/21253.webp",
    price_type: "free",
    category_en: ["Project Management Office"],
    category_ar: ["مكتب إدارة المشاريع"],
    categoryIds: [2],
    bookLink:
      "https://www.pmpmaster.com/showBook/10/Organizational-development-and-institutional-improvement",
  },
];

// Mock Data for Categories (derived from ALL_BOOKS to ensure counts are accurate)
export const ALL_CATEGORIES: Category[] = [
  { id: 0, name_en: "All Books", name_ar: "متجر الكتب" }, // "All Books" category
  {
    id: 1,
    name_en: "Professional Project Management",
    name_ar: "إدارة المشاريع الاحترافية",
  },
  {
    id: 2,
    name_en: "Project Management Office",
    name_ar: "مكتب إدارة المشاريع",
  },
];

export const getCategoryTotal = (categoryId: number): number => {
  if (categoryId === 0) {
    return ALL_BOOKS.length;
  }
  return ALL_BOOKS.filter((book) => book.categoryIds.includes(categoryId))
    .length;
};
