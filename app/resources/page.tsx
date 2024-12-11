'use client';

import { ResourceHub } from '@/components/resources/resource-hub';
import { Blog } from '@/components/resources/blog';
import { HelpCenter } from '@/components/resources/help-center';
import { FooterLarge } from '@/components/footer/footer-large';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <ResourceHub />
        <Blog />
        <HelpCenter />
      </div>
      <FooterLarge />
    </div>
  );
}