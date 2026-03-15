const steps = [
  {
    num: "01",
    emoji: "📚",
    label: "Практическое обучение",
    desc: "45 дней работы над реальными задачами бизнеса, а не сухая теория.",
  },
  {
    num: "02",
    emoji: "🔍",
    label: "Поиск проблем бизнеса",
    desc: "Учитесь находить слабые места компаний и видеть, где ИИ может приносить деньги.",
  },
  {
    num: "03",
    emoji: "🤖",
    label: "Создание AI-решений",
    desc: "Собираете реальные решения под конкретные бизнес-задачи в разных нишах.",
  },
  {
    num: "04",
    emoji: "📊",
    label: "Измеримый эффект",
    desc: "Понимаете, как считать результат внедрения и показывать бизнесу ценность своей работы.",
  },
  {
    num: "05",
    emoji: "🏆",
    label: "Новая профессия: AI-инженер",
    desc: "Выходите с навыком продавать AI-внедрения в любые сферы бизнеса и зарабатывать на этом.",
  },
];

const stats = [
  { num: "200+", label: "выпускников уже строят карьеру в AI" },
  { num: "3", label: "формата обучения под любые цели" },
  { num: "100%", label: "практика на реальных задачах бизнеса" },
];

export function GinAIAcademy() {
  return (
    <section
      id="academy"
      style={{
        background: "linear-gradient(135deg, #6D28D9 0%, #7C3AED 40%, #4F46E5 100%)",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative elements */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "700px", height: "700px", background: "radial-gradient(circle, rgba(255,255,255,0.06), transparent)", top: "-200px", right: "-150px", borderRadius: "50%", pointerEvents: "none" }} />
      {/* Red accent blobs */}
      <div style={{ position: "absolute", width: "500px", height: "400px", background: "radial-gradient(ellipse at 40% 60%, rgba(217,32,16,0.35) 0%, rgba(217,32,16,0.12) 45%, transparent 70%)", bottom: "-100px", left: "-120px", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "400px", height: "320px", background: "radial-gradient(ellipse at 60% 40%, rgba(217,32,16,0.3) 0%, rgba(217,32,16,0.1) 45%, transparent 70%)", top: "-80px", right: "-80px", filter: "blur(55px)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Badge */}
        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.15)",
              border: "1.5px solid rgba(255,255,255,0.3)",
              borderRadius: "100px",
              padding: "8px 24px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            GINAI ACADEMY · ПУТЬ ВЫПУСКНИКА
          </span>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(26px, 4vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "#FFFFFF",
            maxWidth: "800px",
            margin: "0 auto",
            letterSpacing: "-0.02em",
            fontFamily: "'Inter', sans-serif",
            padding: "0 16px",
          }}
        >Как за 45 дней стать  <span style={{ color: "#FBBF24" }}>AI-специалистом </span>с доходом от <span style={{ color: "#FBBF24" }}>150 000 ₽</span></h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "580px",
            margin: "20px auto 64px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "18px",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Никаких скучных лекций. Только практика на реальных задачах бизнеса.
          Каждый шаг приближает вас к первому заработку.
        </p>

        {/* Roadmap Steps */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "64px" }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="ginai-step-pad"
              style={{
                display: "flex",
                gap: "24px",
                alignItems: "flex-start",
                background: "rgba(255,255,255,0.09)",
                border: "1.5px solid rgba(217,32,16,0.25)",
                borderRadius: "20px",
                padding: "28px 32px",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.16)";
                el.style.borderColor = "rgba(217,32,16,0.55)";
                el.style.transform = "translateX(6px)";
                el.style.boxShadow = "0 0 24px rgba(217,32,16,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = "rgba(255,255,255,0.09)";
                el.style.borderColor = "rgba(217,32,16,0.25)";
                el.style.transform = "none";
                el.style.boxShadow = "none";
              }}
            >
              {/* Left red accent — every step */}
              <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "linear-gradient(180deg, #D92010, #F0380E)", borderRadius: "20px 0 0 20px" }} />
              {/* Step number */}
              <div style={{
                minWidth: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, rgba(217,32,16,0.3), rgba(240,56,14,0.18))",
                border: "1.5px solid rgba(217,32,16,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column" as const,
                flexShrink: 0,
              }}>
                <span style={{ fontSize: "10px", color: "#FCA5A5", letterSpacing: "0.05em", fontFamily: "'Inter', sans-serif" }}>
                  {step.num}
                </span>
                <span style={{ fontSize: "22px", lineHeight: 1 }}>{step.emoji}</span>
              </div>
              {/* Content */}
              <div style={{ flex: 1 }}>
                <p style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 700, marginBottom: "6px", fontFamily: "'Inter', sans-serif" }}>
                  {step.label}
                </p>
                <p style={{ color: "rgba(255,255,255,0.68)", fontSize: "14px", lineHeight: 1.65, fontFamily: "'Inter', sans-serif" }}>
                  {step.desc}
                </p>
              </div>
              {/* Arrow connector */}
              {i < steps.length - 1 && (
                <div
                  className="ginai-step-arrow"
                  style={{
                    position: "absolute",
                    bottom: "-22px",
                    left: "52px",
                    zIndex: 2,
                    color: "rgba(217,32,16,0.4)",
                    fontSize: "18px",
                    pointerEvents: "none",
                  }}>↓</div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        

        {/* Stats */}
        <div
          style={{
            background: "rgba(255,255,255,0.08)",
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "rgba(255,255,255,0.12)",
            borderBottomWidth: "1px",
            borderBottomStyle: "solid",
            borderBottomColor: "rgba(255,255,255,0.12)",
            padding: "32px 0",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "48px", flexWrap: "wrap", alignItems: "center" }}
            className="ginai-stats-row"
          >
            {stats.map((s, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "48px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "4px" }}>
                  <span style={{
                    color: i === 0 ? "#FF2A0E" : "#E9D5FF",
                    fontSize: "36px", fontWeight: 800, lineHeight: 1, fontFamily: "'Inter', sans-serif",
                    textShadow: i === 0 ? "0 0 24px rgba(217,32,16,0.6)" : "none",
                  }}>
                    {s.num}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.65)", fontSize: "14px", textAlign: "center", maxWidth: "160px", fontFamily: "'Inter', sans-serif" }}>
                    {s.label}
                  </span>
                </div>
                {i < stats.length - 1 && (
                  <div className="hidden md:block ginai-stats-sep" style={{ width: "1px", height: "40px", background: "rgba(255,255,255,0.15)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}