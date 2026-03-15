import "../styles/fonts.css";
import { GinAIHeader } from "./components/GinAIHeader";
import { GinAIHero } from "./components/GinAIHero";
import { GinAITwoDirections } from "./components/GinAITwoDirections";
import { GinAIProductHalo } from "./components/GinAIProductHalo";
import { GinAIProductOrbi } from "./components/GinAIProductOrbi";
import { GinAICustomDev } from "./components/GinAICustomDev";
import { GinAIClientResults } from "./components/GinAIClientResults";
import { GinAIAcademy } from "./components/GinAIAcademy";
import { GinAIWhyWeTeach } from "./components/GinAIWhyWeTeach";
import { GinAICEOVideo } from "./components/GinAICEOVideo";
import { GinAITeam } from "./components/GinAITeam";
import { GinAIPartners } from "./components/GinAIPartners";
import { GinAISchool } from "./components/GinAISchool";
import { GinAIFAQ } from "./components/GinAIFAQ";
import { GinAIFinalCTA } from "./components/GinAIFinalCTA";
import { GinAIFooter } from "./components/GinAIFooter";

export default function App() {
  return (
    <div
      style={{
        fontFamily: "'Inter', sans-serif",
        background: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body {
          background: #FFFFFF;
        }

        /* ── Tailwind responsive helpers ── */
        @media (max-width: 768px) {
          .hidden.md\\:flex { display: none !important; }
          .hidden.md\\:inline-flex { display: none !important; }
          .hidden.md\\:block { display: none !important; }
          .hidden.sm\\:inline { display: none !important; }
          .md\\:hidden { display: flex !important; }
        }
        @media (min-width: 769px) {
          .md\\:hidden { display: none !important; }
          .hidden.md\\:flex { display: flex !important; }
          .hidden.md\\:inline-flex { display: inline-flex !important; }
          .hidden.md\\:block { display: block !important; }
        }
        @media (min-width: 640px) {
          .hidden.sm\\:inline { display: inline !important; }
        }

        /* ── Global section padding ── */
        @media (max-width: 768px) {
          section { padding-top: 64px !important; padding-bottom: 64px !important; }
        }

        /* ── Team cards wrap on mobile ── */
        @media (max-width: 768px) {
          .team-scroll {
            min-width: unset !important;
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }

        /* ── Card & CTA inner padding on mobile ── */
        @media (max-width: 640px) {
          .ginai-card-pad { padding: 24px !important; }
          .ginai-cta-pad  { padding: 32px 20px !important; }
          .ginai-step-pad { padding: 20px 20px 20px 26px !important; }
          .ginai-form-pad { padding: 28px 20px !important; }
        }

        /* ── Roadmap arrow connector alignment ── */
        @media (max-width: 640px) {
          .ginai-step-arrow { left: 44px !important; }
        }

        /* ── Stats row wraps gracefully ── */
        @media (max-width: 640px) {
          .ginai-stats-row { gap: 24px !important; }
          .ginai-stats-sep { display: none !important; }
        }

        /* ── Wide accent underline lines stay within screen ── */
        @media (max-width: 768px) {
          .ginai-accent-line { max-width: 90% !important; }
        }

        /* ── Marquee logo strip ── */
        @media (max-width: 640px) {
          .marquee-track { gap: 40px !important; }
        }

        /* ── Two-col grids: single column on small screens ── */
        @media (max-width: 600px) {
          .ginai-2col { grid-template-columns: 1fr !important; }
        }

        ::placeholder { color: #94A3B8; }
        button:active { transform: scale(0.98); }
      `}</style>

      {/* 1. Sticky Header */}
      <GinAIHeader />

      <main>
        {/* 2. Hero */}
        <GinAIHero />

        {/* 3. Two Directions */}
        <GinAITwoDirections />

        {/* 4. Product HALO */}
        <GinAIProductHalo />

        {/* 5. Product ORBI */}
        <GinAIProductOrbi />

        {/* 6. Custom Development */}
        <GinAICustomDev />

        {/* 7. Client Results + Cases */}
        <GinAIClientResults />

        {/* 8. GINAI Academy */}
        <GinAIAcademy />

        {/* 9. Why We Teach */}
        <GinAIWhyWeTeach />

        {/* 10. CEO Video */}
        <GinAICEOVideo />

        {/* 11. Team */}
        <GinAITeam />

        {/* 11.5 Partners */}
        <GinAIPartners />

        {/* 12. School Channels */}
        <GinAISchool />

        {/* 13. FAQ */}
        <GinAIFAQ />

        {/* 14. Final CTA */}
        <GinAIFinalCTA />
      </main>

      {/* 15. Footer */}
      <GinAIFooter />
    </div>
  );
}