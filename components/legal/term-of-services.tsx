import { Card } from '@/components/ui/card';

export function TermsOfService() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <Card className="p-8">
            <div className="prose prose-neutral dark:prose-invert">
              <p className="text-muted-foreground mb-6">Last updated: February 15, 2024</p>
              
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-6">
                By accessing or using Virtual Study Group, you agree to be bound by these Terms of Service.
              </p>

              <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Maintain accurate account information</li>
                <li>Protect account credentials</li>
                <li>Comply with all applicable laws</li>
                <li>Respect other users' rights</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4">3. Prohibited Activities</h2>
              <p className="text-muted-foreground mb-6">Users may not:</p>
              <ul className="list-disc pl-6 mb-6 text-muted-foreground">
                <li>Share inappropriate content</li>
                <li>Harass other users</li>
                <li>Violate intellectual property rights</li>
                <li>Attempt to breach platform security</li>
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}