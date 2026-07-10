import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyLunecia from "@/components/home/WhyLunecia";
import Portfolio from "@/components/home/Portfolio";
import Contact from "@/components/Contact";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyLunecia />
        <Portfolio />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  );
}