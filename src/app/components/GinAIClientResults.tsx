import gazVodaLogo from "../../assets/f826bb54fe43ab6450d9228d95a26cd9a393fa60.png";
import rTreydLogo from "../../assets/21f8c3c0c3590bf58fa8137b66b07909bd73c70e.png";
import postMarketLogo from "../../assets/0c34664e08a149dc26c838deaa964faae8c81280.png";
import stavBiofabLogo from "../../assets/b30e7d2246736dba6b2283187786df98d9429a65.png";
import bsLogistikLogo from "../../assets/c87faf2e514a14349e48353f270611d3def4d62b.png";
import vogueLogo from "../../assets/90248b4f942379b6dce5458a6d575b88ffb11a6a.png";
import greenFieldsLogo from "../../assets/50940e0519f64dd6a5e4094a1aecd2a9bc8a76a9.png";

const cases = [
  {
    chip: "Продажи",
    metric: "+47%",
    label: "рост конверсии в продажи",
    desc: "После внедрения HALO менеджеры закрывают вдвое больше сделок при том же трафике",
    company: "Ритейл-компания",
  },
  {
    chip: "Логистика",
    metric: "−68%",
    label: "задержек по доставкам",
    desc: "ORBI выявил риски по 340 отправлениям в первый месяц, вернул деньги по 12 претензиям",
    company: "Логистический оператор",
  },
  {
    chip: "Автоматизация",
    metric: "×3",
    label: "ускорение обработки заявок",
    desc: "Кастомный ИИ-агент обрабатывает заявки вместо 4 сотрудников — без ошибок и выходных",
    company: "E-commerce",
  },
];

const galleryPhotos = [1, 2, 3, 4];

export function GinAIClientResults() {
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
            КЕЙСЫ И РЕЗУЛЬТАТЫ
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
            maxWidth: "580px",
            margin: "0 auto 16px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Реальные цифры от реальных компаний
        </h2>

        <p style={{ textAlign: "center", color: "#64748B", fontSize: "17px", lineHeight: 1.7, marginBottom: "16px", fontFamily: "'Inter', sans-serif" }}>
          Внедряем — и замеряем результат. Каждый кейс подкреплён цифрами
        </p>

        {/* Client Logos */}
        <div style={{ marginBottom: "60px", marginTop: "40px" }}>
          <p style={{ color: "#94A3B8", fontSize: "12px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", textAlign: "center", marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
            НАМ ДОВЕРЯЮТ
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            {(() => {
              const logos = [
                { src: rTreydLogo, name: "Р-Трейд", bg: false },
                { src: postMarketLogo, name: "Post Market", bg: false },
                { src: stavBiofabLogo, name: "Ставропольская Биофабрика", bg: false },
                { src: bsLogistikLogo, name: "БС Логистик", bg: false },
                { src: vogueLogo, name: "Vogue Autoservice", bg: false },
                { src: greenFieldsLogo, name: "GreenFields", bg: false },
                { src: gazVodaLogo, name: "Газ-Вода", bg: false }
              ];
              // duplicate for seamless loop
              const allLogos = [...logos, ...logos];
              return (
                <>
                  <style>{`
                    @keyframes marquee {
                      0%   { transform: translateX(0); }
                      100% { transform: translateX(-50%); }
                    }
                    .marquee-track {
                      animation: marquee 28s linear infinite;
                      display: flex;
                      align-items: center;
                      gap: 64px;
                      width: max-content;
                    }
                    .marquee-track:hover {
                      animation-play-state: paused;
                    }
                  `}</style>
                  <div style={{ width: "100%", overflow: "hidden", position: "relative" }}>
                    {/* fade edges */}
                    <div style={{
                      position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
                      background: "linear-gradient(to right, #F8F6FF, transparent)",
                      pointerEvents: "none",
                    }} />
                    <div style={{
                      position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", zIndex: 2,
                      background: "linear-gradient(to left, #F8F6FF, transparent)",
                      pointerEvents: "none",
                    }} />
                    <div className="marquee-track" style={{ background: "#FFFFFF", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "32px", paddingRight: "32px", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", borderRadius: "16px" }}>
                      {allLogos.map((client, i) => (
                        <img
                          key={`${client.name}-${i}`}
                          src={client.src}
                          alt={client.name}
                          style={{
                            height: "64px",
                            maxWidth: "200px",
                            objectFit: "contain",
                            display: "block",
                            flexShrink: 0,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </>
              );
            })()}
          </div>
        </div>

        {/* Case Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {cases.map((c, idx) => (
            <div
              key={c.chip}
              style={{
                background: "#FFFFFF",
                borderRadius: "20px",
                padding: "36px",
                transition: "all 0.25s ease",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 4px 20px rgba(124,58,237,0.06)",
                border: "1.5px solid #EDE9FF",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 20px 56px rgba(124,58,237,0.14)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = "none";
                el.style.boxShadow = "0 4px 20px rgba(124,58,237,0.06)";
              }}
            >
              {/* Top accent line — red for all cards */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "3px",
                  background: "linear-gradient(90deg, #D92010, #F0380E)",
                  borderRadius: "20px 20px 0 0",
                }}
              />

              <span
                style={{
                  display: "inline-block",
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.15)",
                  borderRadius: "100px",
                  padding: "4px 12px",
                  fontSize: "12px",
                  color: "#7C3AED",
                  marginBottom: "20px",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                }}
              >
                {c.chip}
              </span>
              <p
                style={{
                  fontSize: "54px",
                  fontWeight: 800,
                  background: "linear-gradient(135deg, #D92010, #F0380E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: "8px",
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {c.metric}
              </p>
              <p style={{ color: "#0C0A1E", fontSize: "16px", fontWeight: 600, marginBottom: "10px", fontFamily: "'Inter', sans-serif" }}>
                {c.label}
              </p>
              <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px", fontFamily: "'Inter', sans-serif" }}>
                {c.desc}
              </p>
              
            </div>
          ))}
        </div>

        {/* Photo Gallery */}
        <div style={{ marginTop: "64px" }}>
          
          
        </div>
      </div>
    </section>
  );
}