import { Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  originalPrice: number | null;
  image: string;
  category: string;
  rating: number;
  reviews: number;
}

interface BookCardProps {
  book: Book;
  index?: number;
}

export function BookCard({ book, index = 0 }: BookCardProps) {
  const discount = book.originalPrice 
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : null;

  return (
    <article 
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {discount && (
          <Badge className="absolute top-3 left-3 gradient-accent border-0">
            {discount}% OFF
          </Badge>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Button 
          variant="accent" 
          size="sm"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
        >
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </Button>
      </div>

      {/* Content */}
      <div className="p-5">
        <Badge variant="secondary" className="mb-3">
          {book.category}
        </Badge>
        
        <h3 className="font-serif text-lg font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
          {book.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">
          by {book.author}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-accent text-accent" />
            <span className="text-sm font-medium text-foreground">{book.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">
            ({book.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-primary">
            K{book.price}
          </span>
          {book.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              K{book.originalPrice}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
