export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
}

export const websitePricing: PricingPlan[] = [
  {
    name: "Starter",
    price: "₹25,000+",
    description: "Perfect for startups and local businesses.",
    features: [
      "Up to 5 Pages",
      "Responsive Design",
      "Contact Form",
      "Basic SEO",
      "Google Analytics",
      "30 Days Support",
    ],
  },
  {
    name: "Growth",
    price: "₹60,000+",
    description: "Ideal for growing businesses.",
    popular: true,
    features: [
      "Everything in Starter",
      "Unlimited Pages",
      "Premium UI/UX",
      "Technical SEO",
      "Blog Setup",
      "Performance Optimization",
      "90 Days Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom solution for larger businesses.",
    features: [
      "Everything in Growth",
      "Custom Integrations",
      "CRM Integration",
      "Priority Support",
      "Dedicated Project Manager",
    ],
  },
];

export const aiPricing: PricingPlan[] = [
  {
    name: "Starter AI",
    price: "₹75,000+",
    description: "Perfect for first AI implementation.",
    features: [
      "AI Chatbot",
      "Lead Automation",
      "Workflow Automation",
      "Deployment",
      "Training",
    ],
  },
  {
    name: "Business AI",
    price: "₹1,50,000+",
    popular: true,
    description: "Complete business automation.",
    features: [
      "Everything in Starter",
      "AI Agents",
      "CRM Integration",
      "Document AI",
      "API Integrations",
      "Analytics Dashboard",
    ],
  },
  {
    name: "Enterprise AI",
    price: "Custom",
    description: "Enterprise-grade AI systems.",
    features: [
      "Unlimited Automation",
      "Custom AI Models",
      "Advanced Security",
      "Dedicated Team",
      "Long-term Support",
    ],
  },
];

export const seoPricing: PricingPlan[] = [
  {
    name: "Local SEO",
    price: "₹20,000/mo",
    description: "For local businesses.",
    features: [
      "Google Business Profile",
      "On-page SEO",
      "Technical SEO",
      "Monthly Reports",
    ],
  },
  {
    name: "Growth SEO",
    price: "₹35,000/mo",
    popular: true,
    description: "For businesses targeting national rankings.",
    features: [
      "Everything in Local",
      "Content Strategy",
      "Keyword Research",
      "Backlink Strategy",
      "Competitor Analysis",
    ],
  },
  {
    name: "Enterprise SEO",
    price: "Custom",
    description: "For large businesses.",
    features: [
      "Unlimited Keywords",
      "Dedicated SEO Team",
      "Advanced Reporting",
      "Content Marketing",
    ],
  },
];