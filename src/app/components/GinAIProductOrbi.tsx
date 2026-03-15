import orbiScreenshot from "figma:asset/b1f20d59747bb218fdaeb99a27b7074aca3249ee.png";

const features = [
  { icon: "📦", title: "Все ТК в одном окне", desc: "Единый дашборд для всех транспортных компаний и отправлений" },
  { icon: "⚠️", title: "Риск до нарушения SLA", desc: "Система предупреждает о задержке ДО того, как она случилась" },
  { icon: "🤖", title: "Автоконтроль перевозчиков", desc: "ORBI сам следит за ТК и отправляет уведомления при отклонениях" },
  { icon: "💰", title: "Претензии без менеджера", desc: "Автоматический расчёт и подача компенсационных претензий" },
];

export function GinAIProductOrbi() {
  return (
    <section style={{ background: "#EFF6FF", padding: "0 24px 120px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "16px", paddingTop: "120px" }}>
          <span
            style={{
              display: "inline-block",
              background: "rgba(59,130,246,0.08)",
              border: "1px solid rgba(59,130,246,0.18)",
              borderRadius: "100px",
              padding: "5px 16px",
              fontSize: "12px",
              color: "#3B82F6",
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
              background: "linear-gradient(135deg, #3B82F6, #6366F1)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            ORBI
          </span>{" "}
          — контроль доставок без ручного труда
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
          Предиктивный мониторинг логистики.
          Выявляем риски задержек до нарушения SLA
        </p>

        {/* Main Card */}
        <div
          style={{
            background: "#FFFFFF",
            border: "1.5px solid #DBEAFE",
            borderRadius: "28px",
            padding: "clamp(28px, 4vw, 60px)",
            boxShadow: "0 8px 48px rgba(59,130,246,0.08)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Red top accent */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #D92010 0%, #F0380E 35%, transparent 100%)", borderRadius: "28px 28px 0 0", pointerEvents: "none" }} />
          {/* Red bottom-left glow */}
          <div style={{ position: "absolute", width: "280px", height: "220px", background: "radial-gradient(ellipse at 40% 60%, rgba(217,32,16,0.09) 0%, transparent 70%)", bottom: "-50px", left: "-40px", filter: "blur(40px)", pointerEvents: "none" }} />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "56px",
              alignItems: "start",
            }}
          >
            {/* Left — Features */}
            <div>
              <p
                style={{
                  color: "#3B82F6",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "28px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Что делает ORBI
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {features.map((f) => (
                  <div key={f.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        minWidth: "44px",
                        background: "linear-gradient(135deg, rgba(59,130,246,0.08), rgba(99,102,241,0.08))",
                        border: "1px solid rgba(59,130,246,0.14)",
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
                  href="https://orbi-ai.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                    color: "#fff",
                    height: "52px",
                    borderRadius: "12px",
                    fontSize: "15px",
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "all 0.25s ease",
                    fontFamily: "'Inter', sans-serif",
                    boxShadow: "0 8px 28px rgba(59,130,246,0.3)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "0 16px 40px rgba(59,130,246,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.transform = "none";
                    el.style.boxShadow = "0 8px 28px rgba(59,130,246,0.3)";
                  }}
                >
                  Попробовать ORBI →
                </a>
                <p style={{ color: "#94A3B8", fontSize: "12px", textAlign: "center", marginTop: "8px", fontFamily: "'Inter', sans-serif" }}>
                  Переход на сайт orbi-ai.ru
                </p>
              </div>
            </div>

            {/* Right — Screenshot */}
            <div>
              <div
                style={{
                  width: "100%",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 24px 60px rgba(37,99,235,0.15), 0 4px 16px rgba(0,0,0,0.08)",
                  border: "1.5px solid rgba(147,197,253,0.4)",
                  lineHeight: 0,
                  background: "#fff",
                }}
              >
                <img
                  src={orbiScreenshot}
                  alt="ORBI — интерфейс контроля отправлений"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "contain",
                    imageRendering: "crisp-edges",
                  }}
                />
              </div>
              <p style={{ color: "#94A3B8", fontSize: "12px", marginTop: "12px", textAlign: "center", fontFamily: "'Inter', sans-serif" }}>
                Интерфейс системы ORBI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}