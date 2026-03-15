import photo1 from "../../assets/c962775127d26738252f61b5ba140a26a92a10eb.png";
import photo2 from "../../assets/8354121458e74209925e8d16ccc5b716cad2e72e.png";
import photo3 from "../../assets/ae99dbc0a825e3cdc0e134825e876b52e7f6918d.png";
import photo4 from "../../assets/a2bf374516dde1858ae7434d20a10f6ca047451b.png";
import photo5 from "../../assets/310fe401110c68dac7d9983bca25161e44b079b5.png";
import photo6 from "../../assets/6351877104215eff9be1c68773ac6d319e2655db.png";

const memberPhotos: (string | null)[] = [photo1, photo2, photo3, photo4, photo5, photo6];

const members = [
  { name: "Михаил Ляшенко", role: "CEO, основатель GINAI" },
  { name: "Татьяна Ляшенко", role: "Руководитель регионального офиса" },
  { name: "Александр Винокуров", role: "Партнер по развитию" },
  { name: "Наталья Пенькова", role: "Куратор GINAI Academy" },
  { name: "Александр Ифоров", role: "Программист" },
  { name: "Влада Насонова", role: "Менеджер" },
];

export function GinAITeam() {
  return (
    <section id="team" style={{ background: "#FFFFFF", padding: "120px 24px" }}>
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
            КОМАНДА GINAI
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
            marginBottom: "12px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Люди, которые делают продукт
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#64748B",
            fontSize: "17px",
            maxWidth: "420px",
            margin: "0 auto 52px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Эксперт в области ИИ, разработки и бизнеса
        </p>

        <div
          style={{
            overflowX: "auto",
            overflowY: "visible",
            paddingBottom: "12px",
            margin: "0 auto",
            maxWidth: "100%",
            /* hide scrollbar but keep functionality */
            scrollbarWidth: "none",
          }}
        >
          <style>{`
            .team-scroll::-webkit-scrollbar { display: none; }
          `}</style>
          <div
            className="team-scroll"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "24px",
              maxWidth: "680px",
              margin: "0 auto",
              padding: "8px 4px 8px",
            }}
          >
            {members.map((m, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  background: "#FAFBFF",
                  border: "1.5px solid rgba(217,32,16,0.35)",
                  borderRadius: "22px",
                  padding: "28px 16px 24px",
                  textAlign: "center",
                  transition: "all 0.25s ease",
                  cursor: "default",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(217,32,16,0.6)";
                  el.style.transform = "translateY(-8px)";
                  el.style.boxShadow = "0 16px 48px rgba(217,32,16,0.12)";
                  el.style.background = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "rgba(217,32,16,0.35)";
                  el.style.transform = "none";
                  el.style.boxShadow = "none";
                  el.style.background = "#FAFBFF";
                }}
              >
                {/* Red top bar — all cards */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "3px",
                  background: "linear-gradient(90deg, #D92010, #F0380E)",
                  borderRadius: "22px 22px 0 0",
                }} />

                <div
                  style={{
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    margin: "0 auto 16px",
                    background: "linear-gradient(135deg, #FFF0EE, #FFE4DE)",
                    border: "2.5px solid rgba(217,32,16,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "52px",
                    boxShadow: "0 4px 20px rgba(217,32,16,0.18)",
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  {memberPhotos[i]
                    ? <img
                        src={memberPhotos[i]!}
                        alt={m.name}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center top",
                          display: "block",
                          filter: "contrast(1.08) saturate(1.12) brightness(1.02)",
                          imageRendering: "auto",
                          transform: i === 5 ? "scale(1.35) translateY(10%)" : "none",
                          transformOrigin: i === 5 ? "center 10%" : "center top",
                        }}
                      />
                    : "👤"
                  }
                </div>

                <p
                  style={{
                    color: "#0C0A1E",
                    fontSize: "14px",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    marginBottom: "6px",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {m.name}
                </p>
                <p
                  style={{
                    color: "#7C3AED",
                    fontSize: "12px",
                    lineHeight: 1.4,
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}