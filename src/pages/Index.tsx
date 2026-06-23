import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SupportSection } from "@/components/SupportSection";
import { ContactSection } from "@/components/ContactSection";
import { FeuchDecor } from "@/components/FeuchDecor";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  return (
    <div className="desk-surface relative min-h-screen">
      <FeuchDecor />
      <Header />
      <main className="relative z-10">
        <Hero />
        <SupportSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
