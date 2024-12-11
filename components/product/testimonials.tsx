import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Medical Student",
    content: "Virtual Study Group has transformed how I prepare for exams. The ability to collaborate with peers in real-time has significantly improved my understanding of complex topics.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
  },
  {
    name: "Michael Chen",
    role: "Computer Science Major",
    content: "The screen sharing and collaborative coding features are perfect for our programming study sessions. It's like having a virtual computer lab available 24/7.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
  },
  {
    name: "Emily Rodriguez",
    role: "Study Group Leader",
    content: "Managing study groups has never been easier. The scheduling tools and resource sharing features help keep everyone organized and on track.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Join thousands of students who are already improving their study habits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center mb-4">
                <Avatar className="h-10 w-10">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </Avatar>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}