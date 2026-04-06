import HeroSection from "@/components/HeroSection";
import MasterySection from "@/components/MasterySection";
import ProofOfWorkSection from "@/components/ProofOfWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-divider" />
      <MasterySection />
      <div className="section-divider" />
      <ProofOfWorkSection />
      <div className="section-divider" />
      <TestimonialsSection />
      <div className="section-divider" />
      <ContactSection />
      <Footer />
    </>
  );
}
