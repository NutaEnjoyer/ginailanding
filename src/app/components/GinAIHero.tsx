const clients = [1, 2, 3, 4, 5];

export function GinAIHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(145deg, #F5F0FF 0%, #EEF2FF 45%, #F8FAFF 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
        paddingBottom: "80px",
        overflow: "hidden",
      }}
    >
      {/* Decorative blobs */}
      <div
        style={{
          position: "absolute",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
          top: "-100px",
          right: "-100px",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "400px",
          height: "400px",
          background: "radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)",
          bottom: "0",
          left: "-100px",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {/* Red accent blob */}
      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          background: "radial-gradient(circle, rgba(193,52,28,0.07) 0%, transparent 70%)",
          bottom: "80px",
          right: "8%",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {/* Dot grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(124,58,237,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "820px", margin: "0 auto" }}>
          {/* Badge */}
          <div style={{ marginBottom: "28px", display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
            <span style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "rgba(193,52,28,0.07)",
              border: "1px solid rgba(193,52,28,0.2)",
              borderRadius: "100px",
              padding: "6px 14px",
              fontSize: "12px",
              color: "#C1341C",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "'Inter', sans-serif",
            }}>
              <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#C1341C", display: "inline-block", boxShadow: "0 0 8px rgba(193,52,28,0.5)" }} />
              Искусственный интеллект для бизнеса
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-left px-[0px] py-[20px]"
            style={{
              fontSize: "clamp(38px, 6.5vw, 68px)",
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#0C0A1E",
              margin: 0,
              fontFamily: "'Inter', sans-serif",
            }}
          >GINAI —<br />ИИ-решения, которые<br /><span
              style={{
                background: "linear-gradient(135deg, #7C3AED 0%, #A855F7 50%, #6366F1 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >работают на ваш бизнес</span></h1>

          {/* Subtitle */}
          <p
            style={{
              maxWidth: "560px",
              margin: "28px auto 0",
              color: "#64748B",
              fontSize: "18px",
              lineHeight: 1.7,
              fontFamily: "'Inter', sans-serif",
            }}
          >Разрабатываем готовые ИИ-продукты и индивидуальные решения, которые помогают бизнесу зарабатывать больше и тратить меньше</p>

          {/* CTA Buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: "44px",
            }}
          >
            <a
              href="#products"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                color: "#fff",
                height: "54px",
                padding: "0 36px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "all 0.25s ease",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 8px 32px rgba(124,58,237,0.35)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.transform = "translateY(-2px)";
                el.style.boxShadow = "0 16px 48px rgba(124,58,237,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.transform = "none";
                el.style.boxShadow = "0 8px 32px rgba(124,58,237,0.35)";
              }}
            >
              Смотреть продукты →
            </a>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                border: "2px solid #E8E0FF",
                color: "#7C3AED",
                height: "54px",
                padding: "0 36px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: 600,
                textDecoration: "none",
                background: "#FFFFFF",
                transition: "all 0.25s ease",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 2px 12px rgba(124,58,237,0.08)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#7C3AED";
                el.style.background = "#F5F0FF";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "#E8E0FF";
                el.style.background = "#FFFFFF";
                el.style.transform = "none";
              }}
            >
              Заказать разработку
            </a>
          </div>

          {/* Client logos strip */}
          
        </div>
      </div>
    </section>
  );
}