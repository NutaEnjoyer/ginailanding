import { useState, useEffect } from "react";
import samuraiLogo from "figma:asset/ba0e6f4ff44da62e1c1cb614b8bf82eba24487a8.png";

export function GinAIHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["products", "development", "academy", "team", "faq"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navLinks = [
    { label: "Продукты", href: "#products", id: "products" },
    { label: "Разработка", href: "#development", id: "development" },
    { label: "Academy", href: "#academy", id: "academy" },
    { label: "Команда", href: "#team", id: "team" },
    { label: "FAQ", href: "#faq", id: "faq" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid #EDE9FF" : "1px solid transparent",
        height: "68px",
        padding: "0 24px",
        transition: "all 0.3s ease",
        boxShadow: scrolled ? "0 4px 24px rgba(124,58,237,0.07)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "38px",
              height: "38px",
              background: "#1A1A2E",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              overflow: "hidden",
              padding: "3px",
            }}
          >
            <img
              src={samuraiLogo}
              alt="GinAI Logo"
              style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            />
          </div>
          <span
            style={{
              color: "#0C0A1E",
              fontSize: "20px",
              fontWeight: 800,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
            }}
          >GINAI</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ flexDirection: "row", gap: "32px" }}>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  color: isActive ? "#7C3AED" : "#64748B",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  fontFamily: "'Inter', sans-serif",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#7C3AED";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = isActive ? "#7C3AED" : "#64748B";
                }}
              >
                {isActive && (
                  <span style={{
                    width: "6px", height: "6px", borderRadius: "50%",
                    background: "#C1341C", display: "inline-block", flexShrink: 0,
                    boxShadow: "0 0 6px rgba(193,52,28,0.5)",
                  }} />
                )}
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href="#contact"
            className="hidden md:inline-flex"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              color: "#fff",
              height: "40px",
              padding: "0 22px",
              borderRadius: "10px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily: "'Inter', sans-serif",
              boxShadow: "0 4px 16px rgba(124,58,237,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(124,58,237,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.transform = "none";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 16px rgba(124,58,237,0.3)";
            }}
          >
            Оставить заявку
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              padding: "4px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "#0C0A1E",
                  borderRadius: "2px",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "absolute",
            top: "68px",
            left: 0,
            right: 0,
            background: "rgba(255,255,255,0.98)",
            backdropFilter: "blur(16px)",
            borderBottom: "1px solid #EDE9FF",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            boxShadow: "0 16px 40px rgba(124,58,237,0.1)",
          }}
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: isActive ? "#7C3AED" : "#0C0A1E",
                  fontSize: "16px",
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              color: "#fff",
              height: "44px",
              borderRadius: "10px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              marginTop: "8px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Оставить заявку
          </a>
        </div>
      )}
    </header>
  );
}