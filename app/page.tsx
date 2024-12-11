import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';
import { FooterLarge } from '@/components/footer/footer-large';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center text-center space-y-8">
            <GraduationCap className="h-16 w-16 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Virtual Study Group
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join a community of learners, collaborate in real-time, and achieve your academic goals together.
            </p>
            
            <div className="flex gap-4">
              <Button asChild size="lg">
                <Link href="/sign-in">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Real-time Collaboration</h3>
                <p className="text-muted-foreground">
                  Connect with peers through video, audio, and chat for interactive study sessions.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Resource Sharing</h3>
                <p className="text-muted-foreground">
                  Share study materials, notes, and resources within your study groups.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Progress Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor your learning progress and stay motivated with gamification elements.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <FooterLarge />
    </div>
  );
}