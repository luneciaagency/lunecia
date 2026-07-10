export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Lunecia",
    url: "https://lunecia.yukihirai.in",
    logo: "https://lunecia.yukihirai.in/logo.png",
    image: "https://lunecia.yukihirai.in/og-image.png",
    description:
      "Lunecia provides AI Automation, Website Development, SEO and Digital Growth solutions for modern businesses.",

    email: "lunecia.agency@gmail.com",

    areaServed: "Worldwide",

    sameAs: [],

    serviceType: [
      "AI Automation",
      "Website Development",
      "Search Engine Optimization",
      "Digital Consulting",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}