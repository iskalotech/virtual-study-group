import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Video, BookOpen } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    icon: FileText,
    title: "Study Guides",
    description: "Comprehensive guides for various subjects and topics",
    link: "/resources/guides"
  },
  {
    icon: Video,
    title: "Tutorial Videos",
    description: "Video tutorials on how to use platform features effectively",
    link: "/resources/tutorials"
  },
  {
    icon: BookOpen,
    title: "Best Practices",
    description: "Tips and strategies for successful online studying",
    link: "/resources/best-practices"
  }
];

export function ResourceHub() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Resource Hub</h2>
          <p className="text-muted-foreground">
            Access our collection of learning resources and study materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <Card key={index} className="p-6">
              <resource.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
              <p className="text-muted-foreground mb-4">{resource.description}</p>
              <Button asChild variant="outline">
                <Link href={resource.link}>Learn More</Link>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}