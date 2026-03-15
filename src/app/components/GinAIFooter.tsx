import logoImg from "../../assets/ba0e6f4ff44da62e1c1cb614b8bf82eba24487a8.png";

export function GinAIFooter() {
  return (
    <footer style={{ background: "#0C0A1E", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "9px",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img src={logoImg} alt="GinAI logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <span style={{ color: "#FFFFFF", fontSize: "20px", fontWeight: 800, fontFamily: "'Inter', sans-serif" }}>GINAI</span>
            </div>
            <p style={{ marginTop: "14px", color: "#64748B", fontSize: "14px", lineHeight: 1.6, maxWidth: "240px", fontFamily: "'Inter', sans-serif" }}>ИИ-решения для бизнеса. Готовые продукты и кастомная разработка.</p>
            <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
              {[
                { href: "https://t.me/aimixwell", label: "✈" },
                { href: "https://max.ru/id263408896872_biz", label: "М" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#94A3B8",
                    fontSize: "14px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                    fontFamily: "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "#7C3AED";
                    el.style.background = "rgba(124,58,237,0.15)";
                    el.style.color = "#A855F7";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = "rgba(255,255,255,0.1)";
                    el.style.background = "rgba(255,255,255,0.06)";
                    el.style.color = "#94A3B8";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 700, marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>
              Продукты
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "HALO", href: "https://halo-ai.ru/" },
                { label: "ORBI", href: "https://orbi-ai.ru/" },
                { label: "Кастомная разработка", href: "#development" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ color: "#64748B", fontSize: "14px", textDecoration: "none", transition: "color 0.2s ease", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#A855F7")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#64748B")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 700, marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>
              Связаться
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Telegram: @mixwelllab", href: "https://t.me/mixwelllab" },
                { label: "Telegram канал", href: "https://t.me/aimixwell" },
                { label: "halo-ai.ru", href: "https://halo-ai.ru/" },
                { label: "orbi-ai.ru", href: "https://orbi-ai.ru/" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#64748B", fontSize: "14px", textDecoration: "none", transition: "color 0.2s ease", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#A855F7")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#64748B")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            marginTop: "48px",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {/* Red-purple gradient accent line above bottom bar */}
          <div style={{
            position: "absolute",
            left: 0, right: 0,
            height: "1px",
            background: "linear-gradient(90deg, #D92010 0%, #7C3AED 40%, rgba(124,58,237,0) 100%)",
            marginTop: "-25px",
          }} />
          <span style={{ color: "#475569", fontSize: "13px", fontFamily: "'Inter', sans-serif" }}>
            © 2026 GinAI. Все права защищеы
          </span>
          <a
            href="#"
            style={{ color: "#475569", fontSize: "13px", textDecoration: "none", fontFamily: "'Inter', sans-serif", transition: "color 0.2s ease" }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "#94A3B8")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "#475569")}
          >
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}