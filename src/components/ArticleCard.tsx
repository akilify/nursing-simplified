import { ArrowRight, Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
}

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <article 
      className="group bg-card rounded-2xl p-6 shadow-soft hover-lift animate-fade-up flex flex-col"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Badge variant="secondary" className="w-fit mb-4">
        {article.category}
      </Badge>
      
      <h3 className="font-serif text-xl font-semibold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
        {article.title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
        {article.excerpt}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {article.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {article.date}
          </span>
        </div>
        
        <Link 
          to="/learn" 
          className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          Read
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
