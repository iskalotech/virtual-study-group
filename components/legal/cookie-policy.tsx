import { Card } from '@/components/ui/card';

export function CookiePolicy() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <Card className="p-8">
            <div className="prose prose-neutral dark:prose-invert">
              <p className="text-muted-foreground mb-6">Last updated: February 15, 2024</p>
              
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-muted-foreground mb-6">
                Cookies are small text files that are stored on your device when you visit our website.
              </p>

              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Essential cookies for site functionality</li>
                <li>Analytics cookies to improve our service</li>
                <li>Preference cookies to remember your settings</li>
                <li>Authentication cookies for secure access</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-muted-foreground">
                You can control and/or delete cookies as you wish. You can delete all cookies that are
                already on your computer and you can set most browsers to prevent them from being placed.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}