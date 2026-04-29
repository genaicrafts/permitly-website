export const product = {
  name: "Permitly",
  legalNameInDocs: "Permitly",
  domain: "dmvpermitly.com",
  url: "https://dmvpermitly.com",

  status: "Coming Soon — 2026",
  launchYear: 2026,

  tagline: "Pass your DMV permit test the first time.",
  description:
    "Permitly helps you prep for the DMV written permit test with real exam-style questions, smart review that focuses on your weak spots, and full offline support — in seven languages.",
  shortBlurb:
    "DMV permit prep with real exam-style questions, smart review, and seven-language support. Built mobile-first for iOS and Android.",

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

  states: [
    { code: "CA", name: "California", questions: 46 },
    { code: "IL", name: "Illinois", questions: 35 },
    { code: "TX", name: "Texas", questions: 30 },
  ],

  languages: [
    "English",
    "Spanish",
    "Chinese (Simplified)",
    "Korean",
    "Vietnamese",
    "Portuguese",
    "Russian",
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
