import { useState } from "react";

export function GinAIFinalCTA() {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [interest, setInterest] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      style={{
        background: "linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #4F46E5 100%)",
        padding: "100px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "32px 32px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(255,255,255,0.08), transparent)", top: "-150px", left: "50%", transform: "translateX(-50%)", borderRadius: "50%", pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(99,102,241,0.3), transparent)", bottom: "-100px", right: "5%", borderRadius: "50%", pointerEvents: "none" }} />
      {/* Red accent blob */}
      <div style={{ position: "absolute", width: "480px", height: "380px", background: "radial-gradient(ellipse at 40% 60%, rgba(193,52,28,0.45) 0%, rgba(193,52,28,0.18) 45%, transparent 72%)", bottom: "-60px", left: "-80px", filter: "blur(72px)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto" }}>
        <span
          style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            borderRadius: "100px",
            padding: "6px 18px",
            fontSize: "12px",
            color: "#E9D5FF",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontFamily: "'Inter', sans-serif",
            marginBottom: "24px",
          }}
        >
          НАЧАТЬ СЕЙЧАС
        </span>

        <h2
          style={{
            fontSize: "clamp(32px, 5vw, 52px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "#FFFFFF",
            maxWidth: "580px",
            margin: "0 auto 16px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Готовы автоматизировать бизнес?
        </h2>

        <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "18px", maxWidth: "460px", margin: "0 auto 44px", lineHeight: 1.65, fontFamily: "'Inter', sans-serif" }}>
          Оставьте заявку — мы свяжемся в течение часа
          и предложим решение под вашу задачу
        </p>

        {/* Form */}
        <div
          className="ginai-form-pad"
          style={{
            maxWidth: "460px",
            margin: "0 auto",
            background: "rgba(255,255,255,0.95)",
            backdropFilter: "blur(16px)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.2)",
          }}
        >
          {submitted ? (
            <div style={{ padding: "20px 0" }}>
              <p style={{ fontSize: "44px", marginBottom: "16px" }}>✅</p>
              <p style={{ color: "#0C0A1E", fontSize: "20px", fontWeight: 700, fontFamily: "'Inter', sans-serif", marginBottom: "8px" }}>
                Заявка отправлена!
              </p>
              <p style={{ color: "#64748B", fontSize: "15px", fontFamily: "'Inter', sans-serif" }}>
                Мы ответим в течение часа в рабочее время
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {[
                { val: name, set: setName, ph: "Ваше имя", mb: "12px", req: true },
                { val: contact, set: setContact, ph: "Телефон или Telegram", mb: "12px", req: true },
                { val: interest, set: setInterest, ph: "Что вас интересует?", mb: "24px", req: false },
              ].map((field, i) => (
                <input
                  key={i}
                  type="text"
                  placeholder={field.ph}
                  value={field.val}
                  onChange={(e) => field.set(e.target.value)}
                  required={field.req}
                  style={{
                    width: "100%",
                    background: "#F8F6FF",
                    border: "1.5px solid #EDE9FF",
                    borderRadius: "12px",
                    padding: "14px 18px",
                    color: "#0C0A1E",
                    fontSize: "15px",
                    outline: "none",
                    marginBottom: field.mb,
                    fontFamily: "'Inter', sans-serif",
                    boxSizing: "border-box",
                    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "#7C3AED";
                    (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px rgba(124,58,237,0.12)";
                    (e.target as HTMLInputElement).style.background = "#FFFFFF";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "#EDE9FF";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                    (e.target as HTMLInputElement).style.background = "#F8F6FF";
                  }}
                />
              ))}
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  color: "#fff",
                  height: "54px",
                  borderRadius: "12px",
                  fontSize: "16px",
                  fontWeight: 700,
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  fontFamily: "'Inter', sans-serif",
                  boxShadow: "0 8px 28px rgba(124,58,237,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 16px 40px rgba(124,58,237,0.45)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "none";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 8px 28px rgba(124,58,237,0.35)";
                }}
                onMouseDown={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "scale(0.98)";
                }}
                onMouseUp={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                }}
              >
                Получить консультацию бесплатно
              </button>
              <p style={{ color: "#94A3B8", fontSize: "12px", marginTop: "12px", textAlign: "center", fontFamily: "'Inter', sans-serif" }}>
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>

        <div style={{ marginTop: "28px" }}>
          <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}>
            Или напишите сразу в Telegram:{" "}
          </span>
          <a
            href="https://t.me/mixwelllab"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E9D5FF", fontWeight: 700, textDecoration: "none", fontSize: "14px", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "underline")}
            onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.textDecoration = "none")}
          >
            @mixwelllab
          </a>
        </div>
      </div>
    </section>
  );
}