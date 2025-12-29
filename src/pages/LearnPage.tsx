import { useState } from "react";
import { ArticleCard } from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, TrendingUp, Sparkles } from "lucide-react";

const categories = [
  "All",
  "Clinical Skills",
  "Pharmacology",
  "Safety",
  "Anatomy",
  "Patient Care",
  "Ethics",
];

const allArticles = [
  {
    id: 1,
    title: "Understanding Vital Signs: A Comprehensive Guide",
    excerpt: "Master the fundamentals of patient assessment with this detailed breakdown of vital sign measurement and interpretation.",
    category: "Clinical Skills",
    readTime: "8 min read",
    date: "Dec 15, 2024",
  },
  {
    id: 2,
    title: "Common Drug Calculations Made Easy",
    excerpt: "Simplify medication dosage calculations with step-by-step formulas and practice problems for nursing students.",
    category: "Pharmacology",
    readTime: "12 min read",
    date: "Dec 10, 2024",
  },
  {
    id: 3,
    title: "Infection Control Best Practices",
    excerpt: "Essential infection prevention protocols every nursing student must know for safe patient care.",
    category: "Safety",
    readTime: "6 min read",
    date: "Dec 5, 2024",
  },
  {
    id: 4,
    title: "The Cardiovascular System Explained",
    excerpt: "A deep dive into heart anatomy, blood flow, and common cardiovascular conditions you'll encounter in clinical practice.",
    category: "Anatomy",
    readTime: "15 min read",
    date: "Nov 28, 2024",
  },
  {
    id: 5,
    title: "Effective Communication with Patients",
    excerpt: "Learn therapeutic communication techniques to build trust and provide compassionate patient-centered care.",
    category: "Patient Care",
    readTime: "10 min read",
    date: "Nov 20, 2024",
  },
  {
    id: 6,
    title: "Nursing Ethics: Decision Making Framework",
    excerpt: "Navigate complex ethical dilemmas with this practical guide to ethical reasoning in nursing practice.",
    category: "Ethics",
    readTime: "9 min read",
    date: "Nov 15, 2024",
  },
  {
    id: 7,
    title: "IV Therapy Fundamentals",
    excerpt: "Everything you need to know about intravenous therapy, from site selection to troubleshooting complications.",
    category: "Clinical Skills",
    readTime: "14 min read",
    date: "Nov 10, 2024",
  },
  {
    id: 8,
    title: "Understanding Lab Values",
    excerpt: "Interpret common laboratory tests with confidence using this comprehensive reference guide.",
    category: "Patient Care",
    readTime: "11 min read",
    date: "Nov 5, 2024",
  },
  {
    id: 9,
    title: "Pain Management Strategies",
    excerpt: "Evidence-based approaches to assessing and managing patient pain across different clinical settings.",
    category: "Patient Care",
    readTime: "8 min read",
    date: "Oct 30, 2024",
  },
];

const featuredTopics = [
  { icon: BookOpen, title: "Study Guides", count: 24 },
  { icon: TrendingUp, title: "Trending Topics", count: 12 },
  { icon: Sparkles, title: "New This Week", count: 5 },
];

export default function LearnPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = allArticles.filter((article) => {
    const matchesCategory = activeCategory === "All" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4 animate-fade-up">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Learning Resources
            </h1>
            <p className="text-muted-foreground text-lg">
              Free educational articles, study guides, and expert insights to support your nursing journey.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 animate-fade-up stagger-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-10 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredTopics.map((topic, index) => (
              <div 
                key={topic.title}
                className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover-lift cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center">
                  <topic.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{topic.title}</h3>
                  <p className="text-sm text-muted-foreground">{topic.count} articles</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-10 animate-fade-up">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredArticles.length}</span> articles
            </p>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No articles found matching your criteria.
              </p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
