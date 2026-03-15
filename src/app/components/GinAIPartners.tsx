export function GinAIPartners() {
  const perks = [
    {
      icon: "💰",
      title: "Партнёрское вознаграждение",
      desc: "Получайте процент с каждой сделки, которую вы привели — прозрачно и без задержек.",
    },
    {
      icon: "🤝",
      title: "Совместные продажи",
      desc: "Мы сопровождаем вашего клиента на всех этапах — от демо до внедрения.",
    },
    {
      icon: "📦",
      title: "Готовые материалы",
      desc: "Презентации, кейсы, шаблоны — всё готово, чтобы вы могли продавать с первого дня.",
    },
    {
      icon: "🚀",
      title: "Быстрый старт",
      desc: "Никакого долгого онбординга. Договорились — работаем. Первый лид уже завтра.",
    },
  ];

  return (
    <section
      id="partners"
      style={{
        background: "linear-gradient(160deg, #FFFFFF 0%, #F8F6FF 60%, #FFF5F5 100%)",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: "absolute", top: "-100px", right: "-100px",
        width: "500px", height: "500px",
        background: "radial-gradient(ellipse at 60% 40%, rgba(217,32,16,0.07) 0%, transparent 65%)",
        filter: "blur(60px)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-80px", left: "-80px",
        width: "400px", height: "400px",
        background: "radial-gradient(ellipse at 40% 60%, rgba(124,58,237,0.08) 0%, transparent 65%)",
        filter: "blur(50px)", pointerEvents: "none",
      }} />
      {/* Red vertical accent */}
      <div style={{
        position: "absolute", top: "100px", right: "40px",
        width: "6px", height: "80px",
        background: "linear-gradient(180deg, #D92010, transparent)",
        borderRadius: "3px", pointerEvents: "none",
      }} />
      {/* Red dot */}
      <div style={{
        position: "absolute", bottom: "80px", left: "40px",
        width: "10px", height: "10px", borderRadius: "50%",
        background: "#D92010", opacity: 0.45, pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>

        {/* Label */}
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span style={{
            display: "inline-block",
            background: "rgba(217,32,16,0.07)",
            border: "1px solid rgba(217,32,16,0.2)",
            borderRadius: "100px",
            padding: "5px 16px",
            fontSize: "12px",
            color: "#D92010",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase" as const,
            fontFamily: "'Inter', sans-serif",
          }}>
            ПАРТНЁРСТВО
          </span>
        </div>

        {/* Heading */}
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          color: "#0C0A1E",
          marginBottom: "16px",
          fontFamily: "'Inter', sans-serif",
        }}>
          Мы ищем партнёров<br />
          <span style={{
            background: "linear-gradient(135deg, #D92010, #F0380E)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            по привлечению клиентов
          </span>
        </h2>

        {/* Red divider */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <div className="ginai-accent-line" style={{
            width: "600px", maxWidth: "90%", height: "2px",
            background: "linear-gradient(90deg, transparent, #D92010 30%, #D92010 70%, transparent)",
            borderRadius: "2px",
          }} />
        </div>

        {/* Subtext */}
        <p style={{
          textAlign: "center",
          color: "#64748B",
          fontSize: "17px",
          maxWidth: "560px",
          margin: "0 auto 64px",
          lineHeight: 1.7,
          fontFamily: "'Inter', sans-serif",
        }}>Мы готовы платить за каждого клиента. Никаких лишних условий.</p>

        {/* Two-column layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px",
          alignItems: "start",
        }}
          className="ginai-2col"
        >

          {/* Left — perks */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {perks.map((p) => (
              <div
                key={p.title}
                style={{
                  display: "flex",
                  gap: "18px",
                  alignItems: "flex-start",
                  background: "#FFFFFF",
                  border: "1.5px solid rgba(217,32,16,0.15)",
                  borderRadius: "18px",
                  padding: "24px",
                  transition: "all 0.25s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(217,32,16,0.4)";
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 12px 40px rgba(217,32,16,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(217,32,16,0.15)";
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Red top bar */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                  background: "linear-gradient(90deg, #D92010, #F0380E)",
                  borderRadius: "18px 18px 0 0",
                }} />
                <div style={{
                  width: "44px", height: "44px", minWidth: "44px",
                  background: "linear-gradient(135deg, rgba(217,32,16,0.1), rgba(240,56,14,0.1))",
                  borderRadius: "12px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "22px",
                  border: "1px solid rgba(217,32,16,0.15)",
                  flexShrink: 0,
                }}>
                  {p.icon}
                </div>
                <div>
                  <p style={{
                    color: "#0C0A1E", fontWeight: 700, fontSize: "15px",
                    marginBottom: "6px", fontFamily: "'Inter', sans-serif",
                  }}>
                    {p.title}
                  </p>
                  <p style={{
                    color: "#64748B", fontSize: "14px", lineHeight: 1.6,
                    fontFamily: "'Inter', sans-serif",
                  }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — CTA card */}
          <div style={{
            background: "#FFFFFF",
            border: "1.5px solid rgba(217,32,16,0.2)",
            borderRadius: "28px",
            padding: "44px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 8px 48px rgba(217,32,16,0.08)",
          }}>
            {/* Red top bar */}
            <div style={{
              position: "absolute", top: 0, left: 0, right: 0, height: "4px",
              background: "linear-gradient(90deg, #D92010, #F0380E)",
              borderRadius: "28px 28px 0 0",
            }} />
            {/* Glow */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "200px", height: "200px",
              background: "radial-gradient(circle, rgba(217,32,16,0.07) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "52px", marginBottom: "20px" }}>🤝</div>

              <h3 style={{
                color: "#0C0A1E", fontSize: "22px", fontWeight: 700,
                lineHeight: 1.35, marginBottom: "14px",
                fontFamily: "'Inter', sans-serif",
              }}>Станьте партнёром GINAI</h3>

              <p style={{
                color: "#64748B", fontSize: "15px", lineHeight: 1.7,
                marginBottom: "32px", fontFamily: "'Inter', sans-serif",
              }}>
                Расскажите о себе — мы свяжемся в течение 24 часов
                и обсудим условия сотрудничества индивидуально.
              </p>

              {/* Stats row */}
              <div style={{
                display: "flex", justifyContent: "center", gap: "28px",
                marginBottom: "32px", flexWrap: "wrap" as const,
              }}>
                {[
                  { num: "от 10%", label: "комиссия" },
                  { num: "24ч", label: "ответ" },
                  { num: "0₽", label: "вход" },
                ].map((s) => (
                  <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span style={{
                      background: "linear-gradient(135deg, #D92010, #F0380E)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontSize: "24px",
                      fontWeight: 800,
                      fontFamily: "'Inter', sans-serif",
                    }}>
                      {s.num}
                    </span>
                    <span style={{
                      color: "#94A3B8", fontSize: "12px",
                      marginTop: "2px", fontFamily: "'Inter', sans-serif",
                    }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  background: "linear-gradient(135deg, #D92010, #F0380E)",
                  color: "#fff",
                  height: "52px",
                  borderRadius: "14px",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  transition: "all 0.25s ease",
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 6px 24px rgba(217,32,16,0.3)",
                  marginBottom: "14px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 12px 36px rgba(217,32,16,0.4)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.transform = "none";
                  el.style.boxShadow = "0 6px 24px rgba(217,32,16,0.3)";
                }}
              >
                Оставить заявку →
              </a>

              <a
                href="mailto:start@ginai.ru"
                style={{
                  display: "block",
                  color: "#94A3B8",
                  fontSize: "13px",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#D92010"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#94A3B8"; }}
              >или напишите на start@ginai.ru</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}