import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  courses: number;
  color: "primary" | "secondary" | "accent";
  path: string;
}

const colorClasses = {
  primary: "from-primary/20 to-primary/5 border-primary/20 hover:border-primary/40",
  secondary: "from-secondary/20 to-secondary/5 border-secondary/20 hover:border-secondary/40",
  accent: "from-accent/20 to-accent/5 border-accent/20 hover:border-accent/40",
};

const iconClasses = {
  primary: "bg-gradient-primary text-primary-foreground",
  secondary: "bg-gradient-secondary text-secondary-foreground",
  accent: "bg-gradient-accent text-accent-foreground",
};

export function ProgramCard({ title, description, icon: Icon, courses, color, path }: ProgramCardProps) {
  return (
    <Link
      to={path}
      className={`group block p-6 rounded-2xl bg-gradient-to-br ${colorClasses[color]} border-2 transition-all duration-300 hover-lift`}
    >
      <div className={`w-14 h-14 rounded-xl ${iconClasses[color]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-display font-bold text-foreground mb-2">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
        {description}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-muted-foreground">
          {courses}+ Courses
        </span>
        <div className="flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all duration-300">
          Explore
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </Link>
  );
}
