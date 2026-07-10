import { Metadata } from "next";

import ServiceHero from "@/components/services/ServiceHero";
import FeatureGrid from "@/components/services/FeatureGrid";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import TechStack from "@/components/services/TechStack";
import PricingSection from "@/components/services/PricingSection";
import FAQSection from "@/components/services/FAQSection";
import CTASection from "@/components/services/CTASection";

import {
  aiAutomationFaq,
  aiAutomationFeatures,
} from "@/data/services";

export const metadata: Metadata = {
  title:
    "AI Automation Services | Lunecia",

  description:
    "Automate repetitive work, improve productivity and scale your business using custom AI Automation solutions from Lunecia.",

  keywords: [
    "AI Automation",
    "Business Automation",
    "AI Agency",
    "AI Chatbots",
    "Workflow Automation",
    "LangChain",
    "OpenAI",
    "AI Agents",
  ],

  alternates: {
    canonical:
      "https://lunecia.yukihirai.in/services/ai-automation",
  },

  openGraph: {
    title:
      "AI Automation Services | Lunecia",

    description:
      "Transform your business using AI-powered automation.",

    url:
      "https://lunecia.yukihirai.in/services/ai-automation",

    siteName: "Lunecia",

    type: "website",
  },
};

export default function AIAutomationPage() {
  return (
    <main className="overflow-hidden">

      <ServiceHero
        badge="Premium AI Automation Agency"
        title="Automate Your Business With"
        highlight="Artificial Intelligence"
        description="We build custom AI systems that automate repetitive work, reduce operational costs, improve customer experience and help businesses grow faster."
        primaryCTA="Book Free Consultation"
        secondaryCTA="View Portfolio"
      />

      <FeatureGrid
        title="AI Solutions Built Around Your Business"
        subtitle="Every business is unique. That's why we design intelligent automation systems tailored to your workflows instead of selling generic software."
        features={aiAutomationFeatures}
      />

      <TechStack />

      <ProcessTimeline />

      <PricingSection />

      <FAQSection
        faqs={aiAutomationFaq}
      />

      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how AI Automation can save time, reduce costs and unlock new growth opportunities for your business."
      />

    </main>
  );
}