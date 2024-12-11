import { Card } from '@/components/ui/card';

export function PrivacyPolicy() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <Card className="p-8">
            <div className="prose prose-neutral dark:prose-invert">
              <p className="text-muted-foreground mb-6">Last updated: February 15, 2024</p>
              
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="mb-6">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Profile information</li>
                <li>Content you share in study sessions</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="mb-6">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Provide and maintain our services</li>
                <li>Improve and personalize your experience</li>
                <li>Communicate with you about our services</li>
                <li>Ensure platform security</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate security measures to protect your personal information.
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}