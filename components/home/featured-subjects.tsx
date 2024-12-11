import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const subjects = [
  {
    name: "Mathematics",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=500",
    activeGroups: 150,
    students: 2500
  },
  {
    name: "Computer Science",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500",
    activeGroups: 200,
    students: 3000
  },
  {
    name: "Physics",
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=500",
    activeGroups: 120,
    students: 1800
  },
  {
    name: "Biology",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=500",
    activeGroups: 140,
    students: 2200
  }
];

export function FeaturedSubjects() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Popular Study Subjects</h2>
          <p className="text-xl text-muted-foreground">
            Join active study groups in your field of interest
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {subjects.map((subject, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="relative h-48">
                <img
                  src={subject.image}
                  alt={subject.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button asChild variant="secondary">
                    <Link href={`/subjects/${subject.name.toLowerCase()}`}>
                      View Groups
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <p>{subject.activeGroups} Active Groups</p>
                  <p>{subject.students} Students</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}