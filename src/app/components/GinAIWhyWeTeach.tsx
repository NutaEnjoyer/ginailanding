const statements = [
  {
    icon: "🧠",
    title: "Решение бизнес-задач",
    body: "В Academy вы учитесь находить слабые места в бизнесе, правильно их диагностировать и собирать под них рабочие AI-решения. Не абстрактная теория, а понятный путь: увидеть проблему, понять её цену для бизнеса и подготовить решение, которое действительно можно внедрить.",
  },
  {
    icon: "📈",
    title: "Курс, построенный на реальных кейсах",
    body: "Каждый модуль Academy — это не выдумка методистов, а результат 50+ внедрений в российском бизнесе. Мы отсекли всё, что не работает, и оставили только связки, которые помогают находить точки роста, решать задачи бизнеса и зарабатывать на этом.",
  },
  {
    icon: "🚀",
    title: "Выход из Academy — это не сертификат, а профессия",
    body: "После обучения вы становитесь AI-инженером, который может работать с бизнесом из разных ниш, выявлять реальные проблемы, предлагать решения на базе ИИ и продавать внедрения как востребованную услугу.",
  },
];

const metrics = [
  { num: "3+", label: "года ежедневной практики внедрения" },
  { num: "50+", label: "проектов в портфолио" },
  { num: "2", label: "продукта без аналогов (HALO и ORBI)" },
];

export function GinAIWhyWeTeach() {
  return (
    <section style={{ background: "#FFFFFF", padding: "100px 24px" }}>
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "64px",
          alignItems: "center",
        }}
        className="ginai-2col"
      >
        {/* Left */}
        <div>
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
              marginBottom: "20px",
            }}
          >
            ПОЧЕМУ МЫ УЧИМ
          </span>

          <h2
            style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 700,
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              color: "#0C0A1E",
              maxWidth: "420px",
              fontFamily: "'Inter', sans-serif",
            }}
          >Мы учим не «пользоваться ИИ», а решать реальные проблемы бизнеса</h2>

          <p style={{
            color: "#64748B",
            fontSize: "15px",
            lineHeight: 1.7,
            marginTop: "16px",
            marginBottom: "36px",
            maxWidth: "420px",
            fontFamily: "'Inter', sans-serif",
          }}>GINAI Academy — единственная школа в России, где каждый студент работает с реальными продуктами. Никакой абстракции, только живой код и кейсы.</p>

          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {statements.map((s) => (
              <div key={s.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
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
                  {s.icon}
                </div>
                <div>
                  <p style={{ color: "#0C0A1E", fontSize: "15px", fontWeight: 600, marginBottom: "5px", fontFamily: "'Inter', sans-serif" }}>
                    {s.title}
                  </p>
                  <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.6, fontFamily: "'Inter', sans-serif" }}>
                    {s.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Quote card */}
        <div
          style={{
            background: "linear-gradient(145deg, #F8F6FF 0%, #EDE9FF 100%)",
            border: "1.5px solid #DDD6FE",
            borderRadius: "28px",
            padding: "44px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Red corner accent line */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, #D92010, #F0380E)", borderRadius: "28px 28px 0 0", pointerEvents: "none" }} />
          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "20px",
              fontSize: "120px",
              lineHeight: 1,
              color: "rgba(217,32,16,0.15)",
              fontFamily: "Georgia, serif",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            "
          </span>

          <p
            style={{
              color: "#374151",
              fontSize: "16px",
              fontStyle: "italic",
              lineHeight: 1.75,
              marginBottom: "28px",
              fontFamily: "'Inter', sans-serif",
              position: "relative",
              zIndex: 1,
            }}
          >
            «Мы не обещаем золотые горы — мы даём инструменты и показываем, как ими пользоваться. Все наши продукты созданы теми, кто сам прошёл путь внедрения. Мы знаем ИИ изнутри, потому что строим его сами.»
          </p>

          <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#FFFFFF",
                border: "2px solid #DDD6FE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
                flexShrink: 0,
                boxShadow: "0 4px 12px rgba(124,58,237,0.1)",
              }}
            >
              👤
            </div>
            <div>
              <p style={{ color: "#0C0A1E", fontSize: "15px", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Михаил Ляшенко</p>
              <p style={{ color: "#64748B", fontSize: "13px", marginTop: "2px", fontFamily: "'Inter', sans-serif" }}>Основатель GINAI</p>
            </div>
          </div>

          {/* Metrics */}
          <div
            style={{
              marginTop: "28px",
              paddingTop: "24px",
              borderTopWidth: "1px",
              borderTopStyle: "solid",
              borderTopColor: "#DDD6FE",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {metrics.map((m) => (
              <div key={m.label} style={{ display: "flex", flexDirection: "column" }}>
                <span
                  style={{
                    background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontSize: "24px",
                    fontWeight: 800,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {m.num}
                </span>
                <span style={{ color: "#94A3B8", fontSize: "12px", marginTop: "2px", fontFamily: "'Inter', sans-serif" }}>
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}