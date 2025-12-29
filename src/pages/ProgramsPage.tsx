import { Heart, Code, Briefcase, Building, GraduationCap, Stethoscope } from "lucide-react";
import { ProgramCard } from "@/components/ProgramCard";

const programs = [
  { title: "Health Sciences", description: "Nursing, Medicine, Pharmacy, Public Health, and Clinical programs.", icon: Heart, courses: 45, color: "primary" as const, path: "/programs#health" },
  { title: "Information Technology", description: "Software Development, Data Science, Cybersecurity, AI & ML.", icon: Code, courses: 38, color: "secondary" as const, path: "/programs#it" },
  { title: "Business & Finance", description: "Accounting, Marketing, Entrepreneurship, Banking, Economics.", icon: Briefcase, courses: 42, color: "accent" as const, path: "/programs#business" },
  { title: "Engineering", description: "Civil, Electrical, Mechanical, Chemical Engineering.", icon: Building, courses: 35, color: "primary" as const, path: "/programs#engineering" },
  { title: "Education", description: "Teaching, Curriculum Development, Educational Leadership.", icon: GraduationCap, courses: 28, color: "secondary" as const, path: "/programs#education" },
  { title: "Clinical Studies", description: "Lab Technology, Radiology, Physiotherapy, Nutrition.", icon: Stethoscope, courses: 32, color: "accent" as const, path: "/programs#clinical" },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Programs</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive, country-specific curriculum designed for African students. 
            Choose from health, technology, business, engineering, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
}
