import { useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { AudienceSection } from "./components/AudienceSection";
import { ProgramSection } from "./components/ProgramSection";
import { BonusSection } from "./components/BonusSection";
import { SpeakerSection } from "./components/SpeakerSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { RegistrationInfoSection } from "./components/RegistrationInfoSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { RegistrationModal } from "./components/RegistrationModal";
import { Footer } from "./components/Footer";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div
      style={{
        fontFamily: "Roboto, sans-serif",
        background: "#050508",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      {/* Screen 1 — Hero */}
      <HeroSection onOpenModal={() => setModalOpen(true)} />

      {/* Screen 2 — Audience */}
      <AudienceSection />

      {/* Screen 3 — Program */}
      <ProgramSection />

      {/* Screen 4 — Bonus */}
      <BonusSection />

      {/* Screen 5 — Speaker */}
      <SpeakerSection />

      {/* Screen 6 — Reviews */}
      <ReviewsSection />

      {/* Screen 7 — Registration Info */}
      <RegistrationInfoSection onOpenModal={() => setModalOpen(true)} />

      {/* Screen 8 — Final CTA */}
      <FinalCTASection onOpenModal={() => setModalOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Modal */}
      <RegistrationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
