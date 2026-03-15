export function GinAISchool() {
  return (
    <section
      id="school"
      style={{
        background: "#FFFFFF",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: "#EDE9FF",
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
        borderBottomColor: "#EDE9FF",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Red accent blobs */}
      <div style={{ position: "absolute", width: "360px", height: "280px", background: "radial-gradient(ellipse at 50% 50%, rgba(217,32,16,0.1) 0%, transparent 70%)", top: "-80px", right: "-80px", filter: "blur(50px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "6px", height: "60px", background: "linear-gradient(180deg, #D92010, transparent)", borderRadius: "3px", top: "120px", left: "24px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}><span
            style={{
              display: "inline-block",
              background: "rgba(124,58,237,0.07)",
              border: "1px solid rgba(124,58,237,0.15)",
              borderRadius: "100px",
              padding: "5px 16px",
              fontSize: "12px",
              color: "#7C3AED",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}
          > СООБЩЕСТВО</span></div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#0C0A1E",
            marginBottom: "16px",
            fontFamily: "'Inter', sans-serif",
          }}
        >Подписывайтесь, учитесь, внедряйте</h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748B",
            fontSize: "17px",
            maxWidth: "500px",
            margin: "0 auto 56px",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Контент о реальном применении ИИ в бизнесе.
          Кейсы, инструменты, разборы — бесплатно
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "48px" }}
          className="ginai-2col"
        >
          {/* Left */}
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Telegram */}
              <a
                href="https://t.me/aimixwell"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  background: "#F0F9FF",
                  border: "1.5px solid #BAE6FD",
                  borderRadius: "18px",
                  padding: "24px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#E0F2FE";
                  el.style.borderColor = "#7DD3FC";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 8px 28px rgba(59,130,246,0.12)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#F0F9FF";
                  el.style.borderColor = "#BAE6FD";
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    background: "linear-gradient(135deg, #38BDF8, #0EA5E9)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(14,165,233,0.3)",
                  }}
                >
                  ✈
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "#0C0A1E", fontWeight: 700, fontSize: "15px", fontFamily: "'Inter', sans-serif" }}>Telegram-канал ИИ-инженер</p>
                  <p style={{ color: "#64748B", fontSize: "13px", marginTop: "3px", fontFamily: "'Inter', sans-serif" }}>Официальный канал Михаила Ляшенко</p>
                  <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                    {["📊 Кейсы", "🛠 Инструменты", "🆓 Бесплатно"].map((chip) => (
                      <span key={chip} style={{ background: "#E0F2FE", borderRadius: "100px", padding: "3px 10px", fontSize: "12px", color: "#0284C7", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ color: "#38BDF8", fontSize: "20px", flexShrink: 0 }}>→</span>
              </a>

              {/* Max.ru */}
              <a
                href="https://max.ru/id263408896872_biz"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "center",
                  background: "#FAFBFF",
                  border: "1.5px solid #EDE9FF",
                  borderRadius: "18px",
                  padding: "24px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#F5F0FF";
                  el.style.borderColor = "#DDD6FE";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 8px 28px rgba(124,58,237,0.1)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "#FAFBFF";
                  el.style.borderColor = "#EDE9FF";
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    minWidth: "48px",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    borderRadius: "14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "#fff",
                    boxShadow: "0 4px 12px rgba(124,58,237,0.3)",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  М
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ color: "#0C0A1E", fontWeight: 700, fontSize: "15px", fontFamily: "'Inter', sans-serif" }}>Max-канал ИИ-инженер</p>
                  <p style={{ color: "#64748B", fontSize: "13px", marginTop: "3px", fontFamily: "'Inter', sans-serif" }}>Официальный канал Михаила Ляшенко</p>
                  <div style={{ display: "flex", gap: "6px", marginTop: "10px", flexWrap: "wrap" }}>
                    {["📹 Видео", "💡 Разборы", "🏢 Бизнес"].map((chip) => (
                      <span key={chip} style={{ background: "rgba(124,58,237,0.07)", borderRadius: "100px", padding: "3px 10px", fontSize: "12px", color: "#7C3AED", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <span style={{ color: "#A855F7", fontSize: "20px", flexShrink: 0 }}>→</span>
              </a>
            </div>
            <p style={{ textAlign: "center", color: "#94A3B8", fontSize: "13px", marginTop: "16px", fontFamily: "'Inter', sans-serif" }}>
              Присоединились уже более 500 предпринимателей
            </p>
          </div>

          {/* Right — Visual card */}
          <div
            style={{
              background: "linear-gradient(145deg, #F8F6FF 0%, #EDE9FF 100%)",
              border: "1.5px solid #DDD6FE",
              borderRadius: "28px",
              padding: "44px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 8px 40px rgba(124,58,237,0.08)",
            }}
          >
            {/* Red top bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #D92010, #F0380E)", borderRadius: "28px 28px 0 0" }} />

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{ fontSize: "52px", marginBottom: "20px" }}>🎓</p>
              <h3 style={{ color: "#0C0A1E", fontSize: "20px", fontWeight: 700, marginBottom: "12px", maxWidth: "220px", margin: "0 auto 12px", lineHeight: 1.35, fontFamily: "'Inter', sans-serif" }}>
                Обучение + продукты + разработка
              </h3>
              <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.65, marginBottom: "28px", fontFamily: "'Inter', sans-serif" }}>Три направления GINAI усиливают друг друга. Обучение подтверждает экспертизу продуктов. Продукты доказывают качество обучения.</p>

              <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginBottom: "28px" }}>
                {[
                  { num: "50+", label: "материалов" },
                  { num: "500+", label: "в сообществе" },
                  { num: "2", label: "канала" },
                ].map((s) => (
                  <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <span
                      style={{
                        background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        fontSize: "26px",
                        fontWeight: 800,
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {s.num}
                    </span>
                    <span style={{ color: "#94A3B8", fontSize: "12px", textAlign: "center", marginTop: "2px", fontFamily: "'Inter', sans-serif" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}