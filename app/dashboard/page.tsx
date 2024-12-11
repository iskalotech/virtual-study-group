'use client';

import { useAuth } from '@/components/providers/auth-provider';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FooterLarge } from '@/components/footer/footer-large';
import { Plus, Users, BookOpen, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col">
      <div className="flex-1">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Active Groups</h3>
            </div>
            <p className="text-2xl font-bold mt-2">3</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Upcoming Sessions</h3>
            </div>
            <p className="text-2xl font-bold mt-2">2</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center space-x-2">
              <BookOpen className="h-5 w-5 text-muted-foreground" />
              <h3 className="text-sm font-medium">Study Hours</h3>
            </div>
            <p className="text-2xl font-bold mt-2">24</p>
          </Card>
          
          <Card className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-sm font-medium">Create Group</h3>
                <p className="text-sm text-muted-foreground">Start a new study group</p>
              </div>
              <Button size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Your Study Groups</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">No study groups yet.</p>
              <Button asChild>
                <Link href="/groups/create">Create Your First Group</Link>
              </Button>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">No upcoming sessions.</p>
              <Button variant="outline" asChild>
                <Link href="/sessions">Schedule a Session</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
      
      <FooterLarge />
    </div>
  );
}