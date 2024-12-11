'use client';

import { Features } from '@/components/product/features';
import { Pricing } from '@/components/product/pricing';
import { Testimonials } from '@/components/product/testimonials';
import { FooterLarge } from '@/components/footer/footer-large';

export default function ProductPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Features />
        <Pricing />
        <Testimonials />
      </div>
      <FooterLarge />
    </div>
  );
}