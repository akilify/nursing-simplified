import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/BookCard";
import { ArticleCard } from "@/components/ArticleCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Award,
  ArrowRight,
  Sparkles,
  Shield,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-nurse.jpg";
import bookCover1 from "@/assets/book-cover-1.jpg";
import bookCover2 from "@/assets/book-cover-2.jpg";
import bookCover3 from "@/assets/book-cover-3.jpg";

const featuredBooks = [
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
];

const featuredArticles = [
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
];

const testimonials = [
  {
    name: "Mutale Chomba",
    role: "3rd Year Nursing Student",
    content: "Nursing Simplified helped me pass my pharmacology exam with flying colors. The books break down complex topics into digestible chunks!",
    avatar: "MC",
  },
  {
    name: "Brian Mwape",
    role: "Registered Nurse",
    content: "Even as a practicing nurse, I find the articles incredibly helpful for continuous learning. Highly recommend to all healthcare professionals.",
    avatar: "BM",
  },
  {
    name: "Chipo Zulu",
    role: "Nursing Instructor",
    content: "I recommend Nursing Simplified to all my students. The quality of content is exceptional and tailored for Zambian healthcare education.",
    avatar: "CZ",
  },
];

const stats = [
  { icon: BookOpen, value: "50+", label: "Study Resources" },
  { icon: Users, value: "2,500+", label: "Students Helped" },
  { icon: GraduationCap, value: "95%", label: "Pass Rate" },
  { icon: Award, value: "4.9", label: "Average Rating" },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Nursing student" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        <div className="container relative z-10 py-12 md:py-20">
          <div className="max-w-2xl space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent border border-accent/30 animate-fade-up">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 2,500+ nursing students</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight animate-fade-up stagger-1">
              Master Nursing
              <span className="block text-accent">The Simple Way</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed animate-fade-up stagger-2 max-w-lg">
              Premium study materials, expert-written articles, and affordable resources 
              designed specifically for Zambian nursing students.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/programs">
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/pricing">
                  View Pricing
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4 animate-fade-up stagger-4">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm">Instant Access</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-teal mx-auto mb-3 flex items-center justify-center shadow-soft">
                  <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                </div>
                <div className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                Featured Books
              </h2>
              <p className="text-muted-foreground max-w-md">
                Carefully curated study materials to help you excel in your nursing education.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/buy">
                View All Books
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredBooks.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                Latest Articles
              </h2>
              <p className="text-muted-foreground max-w-md">
                Free educational content to supplement your studies and expand your knowledge.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/learn">
                Read All Articles
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredArticles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              What Students Say
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Join thousands of nursing students who have transformed their education with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
              Ready to Simplify Your Nursing Journey?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mx-auto">
              Start with our free articles or browse our premium study materials today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="xl" className="bg-background text-primary hover:bg-background/90 shadow-elevated">
                <Link to="/buy">
                  Get Started Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
