import { BookOpen, Users, Video, MessageSquare, Share2, Trophy } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: "Video Conferencing",
    description: "High-quality video calls with screen sharing capabilities for interactive learning sessions."
  },
  {
    icon: MessageSquare,
    title: "Real-time Chat",
    description: "Instant messaging and group discussions to facilitate quick communication."
  },
  {
    icon: Users,
    title: "Study Groups",
    description: "Create and join study groups based on subjects, courses, or interests."
  },
  {
    icon: Share2,
    title: "Resource Sharing",
    description: "Share study materials, notes, and resources within your study groups."
  },
  {
    icon: BookOpen,
    title: "Study Tools",
    description: "Access to whiteboards, document collaboration, and study planning tools."
  },
  {
    icon: Trophy,
    title: "Progress Tracking",
    description: "Monitor your learning progress and achieve study goals together."
  }
];

export function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Better Learning</h2>
          <p className="text-muted-foreground">
            Everything you need to create an effective virtual study environment
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg border bg-card">
              <feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}