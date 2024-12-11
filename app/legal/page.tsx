'use client';

import { PrivacyPolicy } from '@/components/legal/privacy-policy';
import { TermsOfService } from '@/components/legal/term-of-services';
import { CookiePolicy } from '@/components/legal/cookie-policy';
import { FooterLarge } from '@/components/footer/footer-large';

export default function LegalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <PrivacyPolicy />
        <TermsOfService />
        <CookiePolicy />
      </div>
      <FooterLarge />
    </div>
  );
}