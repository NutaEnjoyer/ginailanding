const services = [
  { icon: "💬", title: "Чат-боты и голосовые ИИ", text: "Обрабатывают обращения клиентов 24/7. Интегрируются в ваши каналы за недели, не месяцы" },
  { icon: "📊", title: "Аналитика и BI-системы", text: "Превращаем данные вашего бизнеса в чёткие инсайты и управленческие решения" },
  { icon: "⚙️", title: "Автоматизация процессов", text: "Убираем ручной труд из рутинных операций. Сотрудники фокусируются на важном" },
  { icon: "🔌", title: "Интеграции и экосистемы", text: "Связываем CRM, ERP, базы данных в единую умную инфраструктуру" },
];

export function GinAICustomDev() {
  return (
    <section id="development" style={{ background: "#FFFFFF", padding: "120px 24px" }}>
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
            РАЗРАБОТКА ПОД ЗАКАЗ
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
            maxWidth: "620px",
            margin: "0 auto 16px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Решение под ваш бизнес —<br />с гарантией результата
        </h2>

        <p
          style={{
            textAlign: "center",
            maxWidth: "500px",
            margin: "0 auto 56px",
            color: "#64748B",
            fontSize: "17px",
            lineHeight: 1.7,
            fontFamily: "'Inter', sans-serif",
          }}
        >Снимаем головную боль бизнеса. Строим ИИ-экосистемы, которые работают</p>

        {/* Service Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((s, idx) => (
            <div
              key={s.title}
              style={{
                background: "#FAFBFF",
                border: "1.5px solid #EDE9FF",
                borderRadius: "20px",
                padding: "32px",
                transition: "all 0.25s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 16px 48px rgba(124,58,237,0.12)";
                el.style.borderColor = "rgba(124,58,237,0.3)";
                el.style.background = "#FFFFFF";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "none";
                el.style.boxShadow = "none";
                el.style.borderColor = "#EDE9FF";
                el.style.background = "#FAFBFF";
              }}
            >
              {/* Red top accent on all cards */}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                background: "linear-gradient(90deg, #D92010, #F0380E)",
                borderRadius: "20px 20px 0 0",
              }} />
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  background: idx === 0
                    ? "linear-gradient(135deg, rgba(217,32,16,0.1), rgba(240,56,14,0.1))"
                    : "linear-gradient(135deg, rgba(124,58,237,0.1), rgba(168,85,247,0.1))",
                  border: `1px solid ${idx === 0 ? "rgba(217,32,16,0.2)" : "rgba(124,58,237,0.15)"}`,
                  borderRadius: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  marginBottom: "20px",
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ color: "#0C0A1E", fontSize: "18px", fontWeight: 700, marginBottom: "10px", fontFamily: "'Inter', sans-serif" }}>
                {s.title}
              </h3>
              <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.65, fontFamily: "'Inter', sans-serif" }}>
                {s.text}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Block */}
        <div
          className="ginai-cta-pad"
          style={{
            marginTop: "64px",
            background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #4F46E5 100%)",
            borderRadius: "28px",
            padding: "56px 40px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h3 style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 700, fontFamily: "'Inter', sans-serif", marginBottom: "10px" }}>
              Есть задача? Обсудим бесплатно
            </h3>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "16px", fontFamily: "'Inter', sans-serif", marginBottom: "28px" }}>
              Опишите проблему — предложим решение за 24 часа
            </p>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#FFFFFF",
                color: "#7C3AED",
                height: "52px",
                padding: "0 36px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.25s ease",
                fontFamily: "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "none";
                el.style.boxShadow = "none";
              }}
            >
              Обсудить задачу →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}