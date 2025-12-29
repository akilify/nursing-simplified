import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  BookOpen, 
  Heart, 
  Users, 
  Target, 
  Mail, 
  Phone, 
  MapPin,
  Lightbulb,
  Shield,
  Sparkles
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Simplicity",
    description: "We break down complex nursing concepts into easy-to-understand content.",
  },
  {
    icon: Shield,
    title: "Quality",
    description: "Every resource is vetted by experienced nursing professionals.",
  },
  {
    icon: Heart,
    title: "Accessibility",
    description: "Affordable education for every nursing student in Zambia.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network of nursing students and professionals.",
  },
];

const team = [
  {
    name: "Dr. Grace Mwanza",
    role: "Founder & Lead Author",
    bio: "15+ years in nursing education with a passion for simplifying complex concepts.",
    avatar: "GM",
  },
  {
    name: "Prof. John Banda",
    role: "Content Director",
    bio: "Former Dean of Nursing at UTH, specializing in pharmacology education.",
    avatar: "JB",
  },
  {
    name: "Sarah Tembo",
    role: "Student Success Manager",
    bio: "Dedicated to helping nursing students achieve their academic goals.",
    avatar: "ST",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-5" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Our Story</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Empowering Zambian
              <span className="text-primary"> Nursing Students</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nursing Simplified was born from a simple belief: every nursing student deserves 
              access to quality, affordable educational resources that make learning easier.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="space-y-6 animate-fade-up">
              <div className="inline-flex items-center gap-2 text-primary">
                <Target className="w-5 h-5" />
                <span className="font-semibold">Our Mission</span>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Making Nursing Education Accessible to All
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe that quality nursing education should not be limited by financial 
                constraints. Our mission is to provide affordable, high-quality study materials 
                and resources that help nursing students excel in their studies and careers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Since our founding in 2020, we have helped over 2,500 nursing students across 
                Zambia achieve their academic goals with our simplified approach to learning.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6 animate-fade-up stagger-1">
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center hover-lift">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-3xl font-bold text-foreground">50+</div>
                <p className="text-sm text-muted-foreground mt-1">Resources</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center hover-lift">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-3xl font-bold text-foreground">2,500+</div>
                <p className="text-sm text-muted-foreground mt-1">Students</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center hover-lift">
                <Target className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-serif text-3xl font-bold text-foreground">95%</div>
                <p className="text-sm text-muted-foreground mt-1">Pass Rate</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft text-center hover-lift">
                <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="font-serif text-3xl font-bold text-foreground">4.9</div>
                <p className="text-sm text-muted-foreground mt-1">Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              The principles that guide everything we do at Nursing Simplified.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-card rounded-2xl p-6 shadow-soft hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-12 md:mb-16 animate-fade-up">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
              Meet Our Team
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Experienced educators dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div 
                key={member.name}
                className="bg-card rounded-2xl p-6 md:p-8 shadow-soft text-center hover-lift animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 rounded-full gradient-teal mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {member.avatar}
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 animate-fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Have questions about our resources or need support? We would love to hear from you.
              </p>

              <div className="space-y-4 pt-4">
                <a 
                  href="mailto:hello@nursingsimplified.com" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-teal flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us at</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      hello@nursingsimplified.com
                    </p>
                  </div>
                </a>

                <a 
                  href="tel:+260971234567" 
                  className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft hover-lift group"
                >
                  <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us at</p>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      +260 97 123 4567
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Find us at</p>
                    <p className="font-medium text-foreground">
                      Lusaka, Zambia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-soft animate-fade-up stagger-1">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Send us a message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      First Name
                    </label>
                    <Input placeholder="Grace" className="h-11" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Last Name
                    </label>
                    <Input placeholder="Mwanza" className="h-11" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Email
                  </label>
                  <Input type="email" placeholder="grace@example.com" className="h-11" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea 
                    placeholder="How can we help you?" 
                    rows={4}
                    className="resize-none"
                  />
                </div>
                <Button variant="accent" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
