import { Card } from '@/components/ui/card';
import { UserPlus, Users, Video, Trophy } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Account",
    description: "Sign up in seconds and create your student profile"
  },
  {
    icon: Users,
    title: "Join Study Groups",
    description: "Find groups matching your subjects and interests"
  },
  {
    icon: Video,
    title: "Collaborate Live",
    description: "Participate in interactive study sessions"
  },
  {
    icon: Trophy,
    title: "Track Progress",
    description: "Monitor your learning journey and achievements"
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground">
            Get started with Virtual Study Group in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {index + 1}
              </div>
              <step.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}