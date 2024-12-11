import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for individual students",
    features: [
      "Join up to 3 study groups",
      "1-on-1 video calls",
      "Basic chat features",
      "File sharing up to 100MB",
      "Community support"
    ]
  },
  {
    name: "Pro",
    price: "9.99",
    description: "Great for active learners",
    features: [
      "Unlimited study groups",
      "Group video calls up to 10 people",
      "Advanced study tools",
      "File sharing up to 1GB",
      "Priority support",
      "Progress analytics"
    ]
  },
  {
    name: "Team",
    price: "19.99",
    description: "Ideal for study organizations",
    features: [
      "Everything in Pro",
      "Group video calls up to 50 people",
      "Custom branding",
      "Admin dashboard",
      "API access",
      "24/7 dedicated support"
    ]
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground">
            Choose the perfect plan for your study needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-8"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <p className="text-muted-foreground mb-6">{plan.description}</p>
              <Button className="w-full mb-6">Get Started</Button>
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <Check className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}