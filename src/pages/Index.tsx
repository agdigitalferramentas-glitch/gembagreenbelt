import HeroSection from "@/components/HeroSection";
import BulletsSection from "@/components/BulletsSection";
import AuthoritySection from "@/components/AuthoritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => (
  <main>
    <HeroSection />
    <BulletsSection />
    <AuthoritySection />
    <TestimonialsSection />
    <div className="h-px w-full bg-[linear-gradient(to_right,transparent,hsl(var(--foreground)/0.25),transparent)]" />
    <AboutSection />
    <Footer />
  </main>
);

export default Index;
