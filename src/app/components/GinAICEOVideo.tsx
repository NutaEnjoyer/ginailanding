export function GinAICEOVideo() {
  return (
    <section style={{ background: "#F8F6FF", padding: "120px 24px" }}>
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
            ОТ РУКОВОДИТЕЛЯ
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
            marginBottom: "56px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Почему мы строим именно такие продукты
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
          className="ginai-2col"
        >
          {/* Left — Video */}
          <div
            style={{
              width: "100%",
              aspectRatio: "16/9",
              background: "linear-gradient(135deg, #EDE9FF, #DDD6FE)",
              borderRadius: "24px",
              border: "2px dashed #C4B5FD",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.25s ease",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 48px rgba(124,58,237,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
            }}
          >
            {/* Red glow behind play button */}
            <div style={{
              position: "absolute",
              width: "140px", height: "140px",
              background: "radial-gradient(circle, rgba(217,32,16,0.28), transparent 70%)",
              borderRadius: "50%",
              pointerEvents: "none",
            }} />
            <div
              style={{
                width: "72px",
                height: "72px",
                background: "linear-gradient(135deg, #D92010, #F0380E)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 8px 32px rgba(217,32,16,0.55)",
                position: "relative",
              }}
            >
              <span style={{ color: "white", fontSize: "24px", marginLeft: "4px" }}>▶</span>
            </div>
            <p style={{ color: "#7C3AED", fontSize: "14px", marginTop: "16px", fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
              ▶ Приветственное видео
            </p>
            <p style={{ color: "#A78BFA", fontSize: "12px", marginTop: "6px", fontFamily: "'Inter', sans-serif" }}>
              Видео будет добавлено позже
            </p>
          </div>

          {/* Right — Quote */}
          <div>
            <div style={{ color: "#D92010", fontSize: "80px", lineHeight: 1, marginBottom: "-16px", fontFamily: "Georgia, serif", userSelect: "none", opacity: 0.85 }}>
              "
            </div>

            <p style={{ color: "#374151", fontSize: "18px", lineHeight: 1.75, fontStyle: "italic", fontFamily: "'Inter', sans-serif" }}>
              «Мы строим не просто ИИ-инструменты — мы строим
              конкурентные преимущества для нашего бизнеса.
              Каждый продукт GinAI решает реальную боль предпринимателей.»
            </p>

            <div style={{ marginTop: "32px", display: "flex", gap: "16px", alignItems: "center" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #F5F0FF, #EDE9FF)",
                  border: "2px solid #DDD6FE",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                  flexShrink: 0,
                  boxShadow: "0 4px 12px rgba(124,58,237,0.1)",
                }}
              >
                👤
              </div>
              <div>
                <p style={{ color: "#0C0A1E", fontSize: "16px", fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                  Максим Ляшенко
                </p>
                <p style={{ color: "#64748B", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}>
                  Основатель GinAI
                </p>
              </div>
            </div>

            {/* Telegram */}
            <div style={{ marginTop: "24px", display: "flex", gap: "10px", alignItems: "center" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  background: "#EFF6FF",
                  border: "1px solid #BFDBFE",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ color: "#3B82F6", fontSize: "16px" }}>✈</span>
              </div>
              <a
                href="https://t.me/aimixwell"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#3B82F6",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "underline")}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "none")}
              >
                @aimixwell
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}