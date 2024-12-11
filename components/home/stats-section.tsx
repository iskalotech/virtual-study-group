import { Card } from '@/components/ui/card';
import { Users, Video, BookOpen, Award } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Active Students",
    description: "Learning together globally"
  },
  {
    icon: Video,
    value: "10,000+",
    label: "Study Sessions",
    description: "Conducted monthly"
  },
  {
    icon: BookOpen,
    value: "25,000+",
    label: "Study Resources",
    description: "Shared and available"
  },
  {
    icon: Award,
    value: "95%",
    label: "Success Rate",
    description: "Student satisfaction"
  }
];

export function StatsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="font-semibold mb-2">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}