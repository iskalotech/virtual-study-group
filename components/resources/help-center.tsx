import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = [
  {
    title: "Getting Started",
    topics: ["Account Setup", "Navigation Guide", "First Study Session"]
  },
  {
    title: "Features & Tools",
    topics: ["Video Conferencing", "Resource Sharing", "Study Planning"]
  },
  {
    title: "Troubleshooting",
    topics: ["Connection Issues", "Audio/Video Problems", "Common Errors"]
  }
];

export function HelpCenter() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Help Center</h2>
          <p className="text-muted-foreground mb-8">
            Find answers to your questions and learn how to use our platform
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search help articles..."
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className="p-6">
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.topics.map((topic, i) => (
                  <li key={i}>
                    <a
                      href={`/help/${topic.toLowerCase().replace(/ /g, '-')}`}
                      className="text-muted-foreground hover:text-primary hover:underline"
                    >
                      {topic}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}