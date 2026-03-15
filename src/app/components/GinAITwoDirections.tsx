export function GinAITwoDirections() {
  return (
    <section style={{ background: "#FFFFFF", padding: "120px 24px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Label */}
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
            ДВА НАПРАВЛЕНИЯ
          </span>
        </div>

        {/* H2 */}
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
        >Выберите то, что подходит<br />вашему бизнесу</h2>
        {/* Red accent underline */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "44px", gap: "4px" }}>
          <div className="ginai-accent-line" style={{ width: "700px", height: "2px", background: "linear-gradient(90deg, transparent, #D92010 30%, #D92010 70%, transparent)", borderRadius: "2px" }} />
        </div>

        {/* Cards */}
        <div
          className="ginai-2col"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {/* Card Left — Готовые продукты */}
          <div
            style={{
              background: "#FAFBFF",
              border: "1.5px solid #EDE9FF",
              borderRadius: "24px",
              padding: "44px",
              transition: "all 0.3s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translateY(-6px)";
              el.style.boxShadow = "0 20px 60px rgba(124,58,237,0.14)";
              el.style.borderColor = "rgba(124,58,237,0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "none";
              el.style.boxShadow = "none";
              el.style.borderColor = "#EDE9FF";
            }}
          >
            {/* Decorative corner */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle at 100% 0%, rgba(124,58,237,0.08), transparent 70%)",
                pointerEvents: "none",
              }}
            />
            {/* Red bottom-left accent dot */}
            <div style={{ position: "absolute", bottom: "20px", left: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#D92010", opacity: 0.5, pointerEvents: "none" }} />

            <div
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(168,85,247,0.12))",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                marginBottom: "24px",
                border: "1px solid rgba(124,58,237,0.15)",
              }}
            >
              ⚡
            </div>

            <h3
              style={{
                color: "#0C0A1E",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "10px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Готовые продукты
            </h3>
            <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.6, marginBottom: "28px", fontFamily: "'Inter', sans-serif" }}>
              Решения без аналогов — запускаются быстро
            </p>

            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {[
                "HALO — ИИ для работы с клиентами",
                "ORBI — контроль доставок без ручного труда",
                "Быстрый запуск без долгой интеграции",
                "Готовая функциональность с первого дня",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      minWidth: "20px",
                      background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "#fff",
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#374151", fontSize: "15px", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                    {item.startsWith("HALO") || item.startsWith("ORBI") ? (
                      <>
                        <span style={{
                          background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                          fontWeight: 800,
                          letterSpacing: "0.04em",
                        }}>
                          {item.slice(0, 4)}
                        </span>
                        <span style={{ fontWeight: 600 }}>{item.slice(4)}</span>
                      </>
                    ) : (
                      <span style={{ fontWeight: 500 }}>{item}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#7C3AED",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                transition: "gap 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "10px"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "6px"; }}
            >
              Смотреть продукты <span>→</span>
            </a>
          </div>

          {/* Card Right — Кастомная разработка */}
          <div
            style={{
              background: "#F0F7FF",
              border: "1.5px solid #DBEAFE",
              borderRadius: "24px",
              padding: "44px",
              transition: "all 0.3s ease",
              cursor: "default",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "translateY(-6px)";
              el.style.boxShadow = "0 20px 60px rgba(59,130,246,0.14)";
              el.style.borderColor = "rgba(59,130,246,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.transform = "none";
              el.style.boxShadow = "none";
              el.style.borderColor = "#DBEAFE";
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "120px",
                height: "120px",
                background: "radial-gradient(circle at 100% 0%, rgba(59,130,246,0.08), transparent 70%)",
                pointerEvents: "none",
              }}
            />
            {/* Red bottom-left accent dot */}
            <div style={{ position: "absolute", bottom: "20px", left: "20px", width: "8px", height: "8px", borderRadius: "50%", background: "#D92010", opacity: 0.5, pointerEvents: "none" }} />

            <div
              style={{
                width: "56px",
                height: "56px",
                background: "linear-gradient(135deg, rgba(59,130,246,0.12), rgba(99,102,241,0.12))",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                marginBottom: "24px",
                border: "1px solid rgba(59,130,246,0.15)",
              }}
            >
              ⚙️
            </div>

            <h3
              style={{
                color: "#0C0A1E",
                fontSize: "22px",
                fontWeight: 700,
                lineHeight: 1.3,
                marginBottom: "10px",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              Кастомная разработка
            </h3>
            <p style={{ color: "#64748B", fontSize: "15px", lineHeight: 1.6, marginBottom: "28px", fontFamily: "'Inter', sans-serif" }}>
              Под задачи вашего бизнеса — с гарантией результата
            </p>

            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {[
                "Чат-боты и голосовые ИИ-агенты",
                "Аналитика данных и BI-дашборды",
                "Автоматизация бизнес-процессов",
                "Интеграция с 1С, Bitrix, amoCRM",
              ].map((item) => (
                <li key={item} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                  <span
                    style={{
                      width: "20px",
                      height: "20px",
                      minWidth: "20px",
                      background: "linear-gradient(135deg, #3B82F6, #6366F1)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "#fff",
                      marginTop: "2px",
                    }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "#374151", fontSize: "15px", fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#development"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "#3B82F6",
                fontSize: "15px",
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                transition: "gap 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "10px"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.gap = "6px"; }}
            >
              Обсудить задачу <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}