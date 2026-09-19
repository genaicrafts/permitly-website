export const product = {
  name: "Permitly",
  legalNameInDocs: "Permitly",
  domain: "dmvpermitly.com",
  url: "https://dmvpermitly.com",

  status: "Available on iOS and Android",
  launchYear: 2026,

  seoTitle: "Permitly — DMV Permit Test Prep in 10 Languages, All 50 States",

  stores: {
    appStoreId: "6768799803",
    appStoreUrl: "https://apps.apple.com/app/id6768799803",
    androidPackage: "com.genaicrafts.permitly",
    googlePlayUrl: "https://play.google.com/store/apps/details?id=com.genaicrafts.permitly",
  },

  tagline: "Study for your DMV permit test in your language.",
  description:
    "Permitly helps you prep for the DMV written permit test with exam-style practice questions, smart review that focuses on your weak spots, and full offline support — in 10 languages across all 50 states plus Washington DC.",
  shortBlurb:
    "DMV permit prep with exam-style practice questions, smart review, and 10-language support. Available for iOS and Android.",
  coverageLabel: "all 50 states + Washington DC",

  emails: {
    support: "support@dmvpermitly.com",
    privacy: "privacy@dmvpermitly.com",
    hello: "hello@dmvpermitly.com",
  },

  legalDocsVersion: {
    privacy: "1.1",
    terms: "1.1",
    lastUpdated: "April 29, 2026",
    lastUpdatedISO: "2026-04-29",
  },

  languages: [
    "English",
    "Spanish",
    "Chinese (Simplified)",
    "Korean",
    "Vietnamese",
    "Portuguese",
    "Russian",
    "Tagalog",
    "Arabic",
    "Hindi",
  ],

  subscription: {
    free: "Lessons + basic practice mode",
    pro: "All module tests, full Wrong Answer Journal, and unlimited mock exams",
    plans: ["Weekly", "Lifetime"],
    billedThrough: "Apple App Store / Google Play",
  },
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/support", label: "Support" },
  { href: "/contact", label: "Contact" },
] as const;
