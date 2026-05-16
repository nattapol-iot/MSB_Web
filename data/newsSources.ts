/**
 * Curated public RSS feeds covering the four MSB Smart Solutions focus areas.
 * Each feed is tagged with a primary category. Headlines + summaries + links
 * back to the original publisher are displayed (fair-use aggregation).
 */

export type NewsCategory = "technology" | "ai" | "automation" | "factory";

export type NewsSource = {
  id: string;
  name: string;
  url: string;
  homepage: string;
  category: NewsCategory;
};

export const newsCategories: {
  id: NewsCategory | "all";
  label: string;
  description: string;
}[] = [
  { id: "all", label: "All", description: "Latest stories across every focus area" },
  { id: "technology", label: "Technology", description: "Cloud, software, and hardware innovation" },
  { id: "ai", label: "AI", description: "Machine learning, generative AI, and applied research" },
  { id: "automation", label: "Automation", description: "Robotics, control systems, and industrial automation" },
  { id: "factory", label: "Factory", description: "Manufacturing, logistics, and smart operations" },
];

export const newsSources: NewsSource[] = [
  // --- Technology ---
  {
    id: "techcrunch",
    name: "TechCrunch",
    url: "https://techcrunch.com/feed/",
    homepage: "https://techcrunch.com",
    category: "technology",
  },
  {
    id: "the-verge",
    name: "The Verge",
    url: "https://www.theverge.com/rss/index.xml",
    homepage: "https://www.theverge.com",
    category: "technology",
  },
  {
    id: "ars-technica",
    name: "Ars Technica",
    url: "https://feeds.arstechnica.com/arstechnica/index",
    homepage: "https://arstechnica.com",
    category: "technology",
  },
  {
    id: "wired",
    name: "Wired",
    url: "https://www.wired.com/feed/rss",
    homepage: "https://www.wired.com",
    category: "technology",
  },

  // --- AI ---
  {
    id: "mit-tech-review-ai",
    name: "MIT Technology Review · AI",
    url: "https://www.technologyreview.com/topic/artificial-intelligence/feed",
    homepage: "https://www.technologyreview.com",
    category: "ai",
  },
  {
    id: "venturebeat-ai",
    name: "VentureBeat · AI",
    url: "https://venturebeat.com/category/ai/feed/",
    homepage: "https://venturebeat.com/ai/",
    category: "ai",
  },
  {
    id: "the-decoder",
    name: "The Decoder",
    url: "https://the-decoder.com/feed/",
    homepage: "https://the-decoder.com",
    category: "ai",
  },

  // --- Automation ---
  {
    id: "ieee-spectrum",
    name: "IEEE Spectrum",
    url: "https://spectrum.ieee.org/rss/fulltext",
    homepage: "https://spectrum.ieee.org",
    category: "automation",
  },
  {
    id: "ieee-robotics",
    name: "IEEE Spectrum · Robotics",
    url: "https://spectrum.ieee.org/feeds/topic/robotics.rss",
    homepage: "https://spectrum.ieee.org/topic/robotics/",
    category: "automation",
  },
  {
    id: "robohub",
    name: "Robohub",
    url: "https://robohub.org/feed/",
    homepage: "https://robohub.org",
    category: "automation",
  },
  {
    id: "hn-automation",
    name: "Hacker News · Automation",
    url: "https://hnrss.org/newest?q=automation+OR+robotics&points=20",
    homepage: "https://news.ycombinator.com",
    category: "automation",
  },

  // --- Factory / Manufacturing ---
  {
    id: "hn-manufacturing",
    name: "Hacker News · Manufacturing",
    url: "https://hnrss.org/newest?q=manufacturing+OR+factory+OR+supply+chain&points=15",
    homepage: "https://news.ycombinator.com",
    category: "factory",
  },
  {
    id: "assembly-mag",
    name: "Assembly Magazine",
    url: "https://www.assemblymag.com/rss/topic/2632",
    homepage: "https://www.assemblymag.com",
    category: "factory",
  },
  {
    id: "supply-chain-dive",
    name: "Supply Chain Dive",
    url: "https://www.supplychaindive.com/feeds/news/",
    homepage: "https://www.supplychaindive.com",
    category: "factory",
  },
  {
    id: "manufacturing-dive",
    name: "Manufacturing Dive",
    url: "https://www.manufacturingdive.com/feeds/news/",
    homepage: "https://www.manufacturingdive.com",
    category: "factory",
  },
];

/** Visual accent for each category — used by cards/badges. */
export const categoryAccent: Record<NewsCategory, string> = {
  technology: "from-brand-blue to-brand-cyan",
  ai: "from-violet-500 to-fuchsia-500",
  automation: "from-amber-500 to-orange-500",
  factory: "from-emerald-500 to-teal-500",
};

export const categoryLabel: Record<NewsCategory, string> = {
  technology: "Technology",
  ai: "AI",
  automation: "Automation",
  factory: "Factory",
};
