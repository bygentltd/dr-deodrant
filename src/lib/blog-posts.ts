export type BlogBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    }
  | {
      type: "quote";
      text: string;
    };

export type BlogSection = {
  eyebrow?: string;
  heading: string;
  blocks: BlogBlock[];
  image?: {
    src: string;
    alt: string;
  };
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  heroImage: string;
  heroAlt: string;
  featured: boolean;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "science-of-sweat-and-body-odor",
    title: "The Science of Sweat and Body Odor",
    category: "Science",
    date: "May 25, 2026",
    author: "Dr. Deodrant Editorial Team",
    excerpt:
      "A physiology-first explanation of perspiration, bacterial odor formation, and why modern underarm care should support the skin instead of suppressing it.",
    heroImage:
      "/blogs/Blogs1.webp",
    heroAlt: "Scientifically styled skincare and body care scene",
    featured: true,
    sections: [
      {
        eyebrow: "Physiology",
        heading: "Understanding perspiration",
        blocks: [
          {
            type: "paragraph",
            text: "Perspiration is a normal thermoregulatory process. The body uses sweat to manage internal temperature during heat, movement, and stress, and that makes sweating a sign of a working system rather than a problem to erase.",
          },
          {
            type: "paragraph",
            text: "Eccrine sweat is mostly water with small amounts of electrolytes, urea, and lactate. Fresh sweat is essentially odorless; the smell people associate with body odor forms later through bacterial activity on the skin.",
          },
        ],
        image: {
          src: "https://hips.hearstapps.com/hmg-prod/images/jt100310-min-681b39deaaca5.jpg",
          alt: "Person jogging outdoors in natural light",
        },
      },
      {
        eyebrow: "Biochemistry",
        heading: "How body odor is formed",
        blocks: [
          {
            type: "paragraph",
            text: "The underarm region contains apocrine glands that secrete a richer fluid. When skin bacteria break down those secretions, they produce volatile compounds that create the characteristic odor people try to manage.",
          },
          {
            type: "list",
            items: [
              "Isovaleric acid",
              "Propionic acid",
              "3-methyl-2-hexenoic acid (3M2H)",
              "Other short-chain fatty acids",
            ],
          },
          {
            type: "paragraph",
            text: "That distinction matters because effective odor care should target the microbial process, not simply try to shut down sweating itself.",
          },
        ],
      },
      {
        eyebrow: "Clinical perspective",
        heading: "Why conventional antiperspirants are only part of the story",
        blocks: [
          {
            type: "paragraph",
            text: "Aluminum-based antiperspirants reduce moisture by temporarily blocking sweat ducts. That can be useful for some people, but it focuses on the symptom - wetness - instead of the source of odor.",
          },
          {
            type: "paragraph",
            text: "A more physiologically aligned approach is to preserve sweating while managing the bacteria that generate odor. That supports natural thermoregulation, respects the skin barrier, and avoids overcorrecting a normal function.",
          },
        ],
      },
      {
        eyebrow: "Modern care",
        heading: "Evidence-based principles of odor control",
        blocks: [
          {
            type: "list",
            items: [
              "Target odor-causing bacteria with ingredients that modulate microbial activity.",
              "Preserve perspiration so the body can continue to regulate heat normally.",
              "Prioritize breathable, non-occlusive formulas that are compatible with sensitive skin.",
              "Choose fragrance-free or low-irritation formulas that work through prevention rather than masking.",
            ],
          },
          {
            type: "quote",
            text: "Perspiration is healthy. Body odor is a bacterial byproduct. The most effective routine addresses the second without disrupting the first.",
          },
        ],
      },
    ],
  },
  {
    slug: "complete-guide-to-natural-deodorant-ingredients",
    title: "The Complete Guide to Natural Deodorant Ingredients",
    category: "Ingredients",
    date: "May 25, 2026",
    author: "Dr. Deodrant Editorial Team",
    excerpt:
      "A clear breakdown of the natural ingredients that help keep underarms fresh, comfortable, and odor-free without relying on heavy-handed suppression.",
    heroImage:
      "/blogs/Blogs2.webp",
    heroAlt: "Natural skincare ingredients arranged on a clean surface",
    featured: false,
    sections: [
      {
        eyebrow: "Ingredient overview",
        heading: "Why natural deodorant can feel overwhelming at first",
        blocks: [
          {
            type: "paragraph",
            text: "Natural deodorant formulas often combine mineral salts, antioxidants, botanical extracts, and skin-conditioning agents. Each ingredient has a specific job, and understanding those jobs makes the label far easier to read.",
          },
        ],
      },
      {
        eyebrow: "Mineral support",
        heading: "Alum: the ancient odor fighter",
        blocks: [
          {
            type: "paragraph",
            text: "Potassium alum has been used for centuries as a deodorant mineral. Instead of blocking sweat glands outright, it creates a less hospitable environment for odor-causing bacteria and adds a mild astringent effect.",
          },
        ],
        image: {
          src: "https://imgproxy.fourthwall.dev/VtMKkPuZC4lysbHZBq8SW6ZOkmQXHpRBxXirZRmyZkk/w:720/sm:1/enc/7rWmWEAC2ef61RsO/bIXuGR2sAiQIBwZT/51Ro-j_Ob3Y5iGo3/vF_hWons0aDL4j0N/NhbpPk3fsn1hgyfS/ZVg8bqrQ7YJbE2yl/OpDCxlucgxq58Xsh/GKHC_LzaBncJdznn/-ERylzEVbJevXWaK/YfuUXYx_vQCUYLRH/mPWk8qvUuyUwrlPP/P-5Cy3KYuJ3gpxz1/Za_ofBUFILX9O5oU/4idgJw.jpg",
          alt: "Natural mineral cosmetic ingredients in a bowl",
        },
      },
      {
        eyebrow: "Antioxidants",
        heading: "Vitamin C and vitamin E",
        blocks: [
          {
            type: "paragraph",
            text: "Vitamin C helps support a brighter look in the underarm area while contributing to a skin-friendly acidic environment. Vitamin E adds soothing, moisturizing support and helps the skin feel comfortable during repeated use.",
          },
          {
            type: "paragraph",
            text: "Together, they help formulas feel more like skincare and less like a harsh treatment product.",
          },
        ],
      },
      {
        eyebrow: "Botanical support",
        heading: "Kiwi fruit extract and acerola extract",
        blocks: [
          {
            type: "paragraph",
            text: "Kiwi fruit extract contributes enzymes and antioxidants that can help keep the underarm surface feeling fresh. Acerola extract is a concentrated vitamin C source that supports antioxidant protection and a healthy-looking skin tone.",
          },
        ],
      },
      {
        eyebrow: "Formula logic",
        heading: "How these ingredients work together",
        blocks: [
          {
            type: "paragraph",
            text: "The best natural deodorants do not depend on a single aggressive mechanism. They combine odor control, skin comfort, and light moisture management so the product feels effective throughout the day without masking the problem.",
          },
        ],
      },
    ],
  },
  {
    slug: "five-morning-habits-that-keep-you-fresh-all-day",
    title: "5 Morning Habits That Keep You Fresh All Day",
    category: "Wellness",
    date: "May 25, 2026",
    author: "Dr. Deodrant Editorial Team",
    excerpt:
      "Five science-backed habits that support energy, focus, and all-day freshness by working with your body instead of against it.",
    heroImage:
      "/blogs/Blogs3.webp",
    heroAlt: "Morning light in a calm, wellness-focused room",
    featured: false,
    sections: [
      {
        eyebrow: "Daily rhythm",
        heading: "Build momentum early",
        blocks: [
          {
            type: "paragraph",
            text: "How you start the morning shapes the rest of the day. Bright light, hydration, movement, food, and calm focus all influence how you feel from the first hour onward.",
          },
        ],
      },
      {
        eyebrow: "1",
        heading: "Expose yourself to natural light within the first hour",
        blocks: [
          {
            type: "paragraph",
            text: "Early daylight helps regulate the circadian rhythm, supports healthy melatonin timing, and tells the body that it is time to wake up and get moving.",
          },
        ],
      },
      {
        eyebrow: "2",
        heading: "Hydrate before you caffeinate",
        blocks: [
          {
            type: "paragraph",
            text: "After a night of sleep, the body is naturally dehydrated. Drinking water first helps support mental clarity, digestion, and a steadier energy curve before coffee enters the picture.",
          },
        ],
      },
      {
        eyebrow: "3",
        heading: "Move your body for 10 to 15 minutes",
        blocks: [
          {
            type: "paragraph",
            text: "A short walk, stretch session, or mobility routine can increase circulation, reduce grogginess, and help the body feel more awake without requiring a full workout.",
          },
        ],
      },
      {
        eyebrow: "4",
        heading: "Eat a protein-rich breakfast within two hours",
        blocks: [
          {
            type: "paragraph",
            text: "Protein helps stabilize blood sugar and promotes a more even energy level through the morning. That makes the day feel less reactive and more grounded.",
          },
        ],
      },
      {
        eyebrow: "5",
        heading: "Spend a few minutes on mindfulness or breathwork",
        blocks: [
          {
            type: "paragraph",
            text: "A few minutes of breathing or quiet reflection can lower stress reactivity and create a calmer baseline before the day begins to demand attention.",
          },
        ],
        image: {
          src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=80",
          alt: "Person practicing a calm morning routine",
        },
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}