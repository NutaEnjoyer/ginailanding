import haloScreenshot from "figma:asset/95e7c49db163a1670efb7d95edd0747673c27253.png";

const features = [
  { icon: "📞", title: "Телефонные звонки", desc: "Разговаривает с клиентами по телефону вместо менеджера" },
  { icon: "💬", title: "Чаты и мессенджеры", desc: "Продолжает диалог в любых каналах — WhatsApp, Telegram, сайт" },
  { icon: "🗃️", title: "Работа с базой данных", desc: "Обращается к данным, находит нужную информацию мгновенно" },
  { icon: "✅", title: "Фиксация результата", desc: "Записывает итог каждого контакта в CRM автоматически" },
  { icon: "🔗", title: "Интеграции", desc: "1С, Bitrix24, amoCRM и другие — подключается без разработки" },
];

export function GinAIProductHalo() {
  return (
    <section
      id="products"
      style={{ background: "#F8F6FF", padding: "120px 24px" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span
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
          >
            ПРОДУКТ
          </span>
        </div>

        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            color: "#0C0A1E",
            maxWidth: "700px",
            margin: "0 auto 16px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A855F7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            HALO
          </span>{" "}
          — ИИ, который полностью берёт на себя работу с клиентами
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "540px",
            margin: "0 auto 56px",
            color: "#64748B",
            fontSize: "17px",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Омниканальная ИИ-система. Звонит, пишет, фиксирует,
          интегрируется — без участия менеджера
        </p>

        {/* Main Card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #EDE9FF",
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 60px)",
            boxShadow: "0 8px 48px rgba(124,58,237,0.08)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Red top accent */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #D92010 0%, #F0380E 40%, transparent 100%)", borderRadius: "28px 28px 0 0", pointerEvents: "none" }} />
          {/* Red bottom-right glow */}
          <div style={{ position: "absolute", width: "300px", height: "240px", background: "radial-gradient(ellipse at 60% 60%, rgba(217,32,16,0.1) 0%, transparent 70%)", bottom: "-60px", right: "-40px", filter: "blur(40px)", pointerEvents: "none" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "56px",
              alignItems: "start",
            }}
          >
            {/* Left — Screenshot placeholder */}
            <div>
              <div
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(124,58,237,0.18), 0 4px 16px rgba(0,0,0,0.08)",
                  border: "1.5px solid rgba(216,180,254,0.35)",
                  lineHeight: 0,
                }}
              >
                <img
                  src={haloScreenshot}
                  alt="HALO AI — интерфейс аналитики звонков"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
              <p style={{ color: "#94A3B8", fontSize: "12px", marginTop: "12px", textAlign: "center", fontFamily: "'Inter', sans-serif" }}>
                Интерфейс системы HALO
              </p>
            </div>

            {/* Right — Features */}
            <div>
              <p
                style={{
                  color: "#7C3AED",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "28px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Что умеет HALO
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {features.map((f) => (
                  <div key={f.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        minWidth: "44px",
                        background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(168,85,247,0.08))",
                        border: "1px solid rgba(124,58,237,0.12)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                      }}
                    >
                      {f.icon}
                    </div>
                    <div>
                      <p style={{ color: "#0C0A1E", fontSize: "15px", fontWeight: 600, marginBottom: "3px", fontFamily: "'Inter', sans-serif" }}>
                        {f.title}
                      </p>
                      <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.55, fontFamily: "'Inter', sans-serif" }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: "36px" }}>
                <a
                  href="https://halo-ai.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    color: "#fff",
                    height: "52px",
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: "0 8px 28px rgba(124,58,237,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 16px 40px rgba(124,58,237,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "none";
                    el.style.boxShadow = "0 8px 28px rgba(124,58,237,0.3)";
                  }}
                >
                  Узнать больше о HALO →
                </a>
                <p style={{ color: "#94A3B8", fontSize: "12px", textAlign: "center", marginTop: "8px", fontFamily: "'Inter', sans-serif" }}>
                  Переход на сайт halo-ai.ru
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}