import FloatingPetals from "@/components/wedding/FloatingPetals";
import HeroSection from "@/components/wedding/HeroSection";
import EventsSection from "@/components/wedding/EventsSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Floating Petals Animation */}
      <FloatingPetals />

      {/* Hero Section */}
      <HeroSection />

      {/* Events Section */}
      <EventsSection />

      {/* Footer Section */}
      <FooterSection />
    </main>
  );
};

export default Index;
