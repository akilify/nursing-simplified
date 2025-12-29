import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const features = [
  "All 200+ courses across all programs",
  "Live lectures with expert instructors",
  "AI-powered learning assistant 24/7",
  "Offline access to all content",
  "Digital library with 10,000+ resources",
  "Country-specific curriculum",
  "Study groups and community access",
  "Recognized certifications",
  "Career guidance and support",
  "Mobile app access",
];

export default function PricingPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Simple, Affordable <span className="text-gradient-primary">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            One subscription. Everything included. No hidden fees.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-card border-2 border-primary shadow-glow">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Most Popular
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">Semester Pass</h2>
              <div className="text-5xl md:text-6xl font-display font-bold text-gradient-primary mb-2">
                K2,500
              </div>
              <p className="text-muted-foreground">per semester (6 months)</p>
            </div>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button size="xl" className="w-full" asChild>
              <Link to="/signup">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <p className="text-center text-sm text-muted-foreground mt-4">
              7-day free trial. Cancel anytime.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-xl font-display font-bold text-foreground mb-4">
            Payment Methods
          </h3>
          <p className="text-muted-foreground mb-4">
            We accept Visa, MTN Mobile Money, Airtel Money, and Zamtel Kwacha.
          </p>
        </div>
      </div>
    </div>
  );
}
