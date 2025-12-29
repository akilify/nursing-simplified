import { Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index?: number;
}

export function TestimonialCard({ testimonial, index = 0 }: TestimonialCardProps) {
  return (
    <div 
      className="bg-card rounded-2xl p-6 md:p-8 shadow-soft hover-lift animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Quote className="w-10 h-10 text-accent/30 mb-4" />
      
      <p className="text-foreground leading-relaxed mb-6">
        "{testimonial.content}"
      </p>

      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full gradient-teal flex items-center justify-center text-primary-foreground font-semibold">
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="font-semibold text-foreground">
            {testimonial.name}
          </h4>
          <p className="text-sm text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}
