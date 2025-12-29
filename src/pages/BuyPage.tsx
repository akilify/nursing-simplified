import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/BookCard";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";

const categories = [
  "All",
  "Foundation",
  "Pharmacology",
  "Maternal Care",
  "Pediatrics",
  "Medical-Surgical",
  "Mental Health",
];

const allBooks = [
  {
    id: 1,
    title: "Fundamentals of Nursing Care",
    author: "Dr. Grace Mwanza",
    price: 250,
    originalPrice: 350,
    image: bookCover1,
    category: "Foundation",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    title: "Pharmacology Made Simple",
    author: "Prof. John Banda",
    price: 180,
    originalPrice: null,
    image: bookCover2,
    category: "Pharmacology",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    title: "Maternal & Child Nursing",
    author: "Dr. Sarah Tembo",
    price: 220,
    originalPrice: 300,
    image: bookCover3,
    category: "Maternal Care",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: 4,
    title: "Medical-Surgical Nursing Essentials",
    author: "Dr. Peter Mulenga",
    price: 280,
    originalPrice: 400,
    image: bookCover1,
    category: "Medical-Surgical",
    rating: 4.6,
    reviews: 98,
  },
  {
    id: 5,
    title: "Pediatric Nursing Guide",
    author: "Dr. Mary Phiri",
    price: 200,
    originalPrice: null,
    image: bookCover2,
    category: "Pediatrics",
    rating: 4.8,
    reviews: 76,
  },
  {
    id: 6,
    title: "Mental Health Nursing",
    author: "Prof. James Zimba",
    price: 190,
    originalPrice: 250,
    image: bookCover3,
    category: "Mental Health",
    rating: 4.7,
    reviews: 112,
  },
];

export default function BuyPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBooks = allBooks.filter((book) => {
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center space-y-4 animate-fade-up">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Study Materials
            </h1>
            <p className="text-muted-foreground text-lg">
              Premium nursing textbooks and study guides designed for Zambian healthcare education.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mt-8 animate-fade-up stagger-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search books, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl bg-card border-border"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Content */}
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
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filteredBooks.length}</span> books
            </p>
            <Button variant="ghost" size="sm" className="gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Sort by
            </Button>
          </div>

          {/* Books Grid */}
          {filteredBooks.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {filteredBooks.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No books found matching your criteria.
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

      {/* Payment Methods */}
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-3">
              Flexible Payment Options
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Pay securely using your preferred method - we support all major payment options in Zambia.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              { name: "Visa/Mastercard", desc: "Debit & Credit Cards" },
              { name: "Airtel Money", desc: "Mobile Money" },
              { name: "MTN Money", desc: "Mobile Money" },
              { name: "Zamtel Kwacha", desc: "Mobile Money" },
            ].map((method) => (
              <div 
                key={method.name}
                className="bg-card rounded-xl p-4 md:p-6 text-center shadow-soft hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-teal mx-auto mb-3 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {method.name[0]}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground text-sm">
                  {method.name}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {method.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
