import { ThemeToggle } from '@/components/theme-toggle';
import { GraduationCap } from 'lucide-react';
import Link from 'next/link';

export function FooterSmall() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <GraduationCap className="h-5 w-5" />
          <span className="text-sm">© 2024 Virtual Study Group</span>
        </div>
        <ThemeToggle />
      </div>
    </footer>
  );
}