'use client';

import { HeroSection } from '@/components/home/hero-section';
import { StatsSection } from '@/components/home/stats-section';
import { HowItWorks } from '@/components/home/how-it-works';
import { FeaturedSubjects } from '@/components/home/featured-subjects';
import { FooterLarge } from '@/components/footer/footer-large';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <FeaturedSubjects />
      </div>
      <FooterLarge />
    </div>
  );
}