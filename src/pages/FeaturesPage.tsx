import { Brain, Video, Wifi, BookOpen, Users, Award, MessageSquare, Calendar } from "lucide-react";
import { FeatureCard } from "@/components/FeatureCard";

const features = [
  { title: "AI Learning Assistant", description: "Get personalized help 24/7 with our AI tutor that adapts to your learning style and answers questions instantly.", icon: Brain },
  { title: "Live Lectures", description: "Join real-time classes with expert instructors. Ask questions, participate in discussions, and learn interactively.", icon: Video },
  { title: "Offline Access", description: "Download lectures, notes, and materials to study anywhere—even without internet connection.", icon: Wifi },
  { title: "Digital Library", description: "Access 10,000+ textbooks, research papers, journals, and study guides from top publishers.", icon: BookOpen },
  { title: "Community Learning", description: "Connect with peers, form study groups, collaborate on projects, and build your network.", icon: Users },
  { title: "Certifications", description: "Earn recognized certificates upon completion that boost your resume and career opportunities.", icon: Award },
  { title: "Discussion Forums", description: "Engage in topic-based discussions, ask questions, and get answers from instructors and peers.", icon: MessageSquare },
  { title: "Flexible Schedule", description: "Learn at your own pace. Access content anytime, set your own study schedule, and balance with work.", icon: Calendar },
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Platform <span className="text-gradient-primary">Features</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need for a complete university experience—and more. 
            Powered by AI and designed for African students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
