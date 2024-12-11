import { Card } from '@/components/ui/card';
import Link from 'next/link';

const posts = [
  {
    title: "10 Tips for Effective Online Study Sessions",
    excerpt: "Learn how to make the most of your virtual study sessions with these proven strategies.",
    date: "2024-02-15",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500"
  },
  {
    title: "Building a Productive Study Routine",
    excerpt: "Discover how to create and maintain a study routine that works for you.",
    date: "2024-02-10",
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500"
  },
  {
    title: "Maximizing Group Study Effectiveness",
    excerpt: "Tips for organizing and participating in successful group study sessions.",
    date: "2024-02-05",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500"
  }
];

export function Blog() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest from Our Blog</h2>
          <p className="text-muted-foreground">
            Insights and tips for better learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                  className="text-primary hover:underline"
                >
                  Read More
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}