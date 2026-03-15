import { useState } from "react";

const faqs = [
  { q: "Чем вы отличаетесь от ChatGPT?", a: "ChatGPT — это чат, который отвечает на вопросы. Мы делаем программное обеспечение, которое решает бизнес-задачи. Наши ИИ-ассистенты работают с реальными данными вашей компании — из 1С, amoCRM, Битрикс24 и других систем. Они не просто разговаривают, а анализируют, принимают решения и выполняют действия." },
  { q: "Сколько стоит внедрение ИИ-решения?", a: "" },
  { q: "Сложно ли внедрить ИИ в компанию?", a: "Нет. Мы делаем все под ключ — от настройки до готового интерфейса. Ваша команда работает с ИИ через удобный интерфейс (веб или Telegram), без технических знаний. Мы обучаем сотрудников за 1 день." },
  { q: "Это заменит людей?", a: "Иногда да, но чаще — нет. ИИ-ассистенты снимают рутину: типовые вопросы, обработка нных, заполнение форм. Люди освобождаются для сложных задач, где нужна экспертиза и креативность. В результате растет скорость, качество работы и прибыль, а команда не выгорает на повторяющихся операциях." },
  { q: "Как обеспечивается безопасность данных?", a: "Мы работаем строго в соответствии с требованиями 152-ФЗ (закон о персональных данных). Все данные обрабатываются в защищенном контуре, без передачи в публичные нейросети (если вы этого не хотите). Вы контролируете, какие данные используются и где они хранятся. Для особо чувствительных данных — разворачиваем ИИ на ваших серверах (on-premise)." },
  { q: "Какие задачи можно решать с помощью ИИ?", a: "ORBI подходит для любого бизнеса, который работает с доставками. Даже 20 отправлений в месяц окупают систему за счёт возвращённых компенсций." },
  { q: "Что, если мне не нужен ИИ?", a: "Отлично! Мы не фанатично продвигаем ИИ. Если задачу лучше и дешевле решает классическая архитектура — мы так и сделаем. Главное для нас — эффективность решения, а не хайп вокруг технологий." },
  { q: "Как понять, подойдет ли мне ИИ-решение?", a: "Просто напишите нам. Мы бесплатно оцениваем целесообразность применения ИИ: где он даст выгоду, а где — избыточен. Иногда проще сделать обычный скрипт, чем тратить бюджет на ИИ без отдачи." },
  { q: "Что нужно подготовить до старта проекта?", a: "На первом этапе достаточно понимания задачи. Мы сами поможем с формализацией, подбором инструментов и проанализируем, где ИИ даст выгоду, а где — избыточен. Если у вас есть данные (базы клиентов, документы, логи) — это ускорит процесс, но не обязательно на тарте." },
  { q: "Вы настраиваете все под ключ или только подключаете API?", a: "Мы можем взять весь цикл: от аналитики и проектирования до разработки, обучения ИИ, интеграции и постподдержки. Но можем и точечно подключиться к вашему процессу — если у вас уже есть команда разработки." },
];

const pricingBullets = [
  { label: "Простой ИИ-ассистент", detail: "интеграция с готовой моделью", price: "от 150 000 ₽" },
  { label: "Кастомное решение", detail: "обучение под ваши данные, интеграции", price: "от 500 000 ₽" },
  { label: "Комплексная система", detail: "ERP/CRM + ИИ", price: "от 1 500 000 ₽" },
];

const tasksBullets = [
  "Клиентская поддержка",
  "Аналитика и отчёты",
  "Работа с документами",
  "Обучение сотрудников",
  "Прогнозирование (продажи, поломки, спрос)",
  "Персонализация (рекомендации, рассылки)",
];

export function GinAIFAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section id="faq" style={{ background: "#F8F6FF", padding: "120px 24px", position: "relative", overflow: "hidden" }}>

      {/* Red decorative blobs */}
      <div style={{ position: "absolute", top: "60px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,32,16,0.07) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "80px", left: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "radial-gradient(circle, rgba(217,32,16,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
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
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#D92010", boxShadow: "0 0 6px rgba(217,32,16,0.5)", flexShrink: 0 }} />
            ВОПРОСЫ И ОТВЕТЫ
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
            maxWidth: "500px",
            margin: "0 auto 16px",
            fontFamily: "'Inter', sans-serif",
          }}
        >
          Отвечаем на частые вопросы
        </h2>

        {/* Red underline accent under heading */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "52px" }}>
          <div className="ginai-accent-line" style={{ width: "500px", height: "3px", borderRadius: "2px", background: "linear-gradient(90deg, rgba(240,56,14,0) 0%, #D92010 30%, #F0380E 50%, #D92010 70%, rgba(240,56,14,0) 100%)", boxShadow: "0 2px 8px rgba(217,32,16,0.25)" }} />
        </div>

        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            const isPricing       = faq.q === "Сколько стоит внедрение ИИ-решения?";
            const isTasks         = faq.q === "Какие задачи можно решать с помощью ИИ?";
            const isChatGPT       = faq.q === "Чем вы отличаетесь от ChatGPT?";
            const isHardToImpl    = faq.q === "Сложно ли внедрить ИИ в компанию?";
            const isReplace       = faq.q === "Это заменит людей?";
            const isSecurity      = faq.q === "Как обеспечивается безопасность данных?";
            const isNoNeed        = faq.q === "Что, если мне не нужен ИИ?";
            const isHowToUnderstand = faq.q === "Как понять, подойдет ли мне ИИ-решение?";

            const ap = { padding: "0 clamp(14px,3vw,28px) 24px 16px", fontFamily: "'Inter', sans-serif", flex: 1 } as const;
            const base = { color: "#64748B", fontSize: "clamp(13px,1.8vw,15px)", lineHeight: 1.7 } as const;
            const red  = { color: "#7C3AED", fontWeight: 700 } as const;
            const sep  = { borderTop: "1px solid #EDE9FF", paddingTop: "12px", marginTop: "12px" } as const;

            return (
              <div
                key={i}
                style={{
                  background: "#FFFFFF",
                  border: `1.5px solid ${isOpen ? "rgba(217,32,16,0.28)" : "#EDE9FF"}`,
                  borderRadius: "16px",
                  marginBottom: "10px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  boxShadow: isOpen ? "0 8px 32px rgba(217,32,16,0.10)" : "none",
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  style={{
                    width: "100%",
                    padding: "clamp(14px,2.5vw,22px) clamp(14px,3vw,28px)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    {/* Red question number */}
                    <span style={{ color: "#D92010", fontSize: "11px", fontWeight: 700, fontFamily: "'Inter', sans-serif", minWidth: "20px", opacity: 0.7 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span style={{ color: "#0C0A1E", fontSize: "clamp(13px,1.8vw,15px)", fontWeight: 600, fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                      {faq.q}
                    </span>
                  </div>
                  {/* SVG ± icon — perfectly centered */}
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      minWidth: "28px",
                      borderRadius: "50%",
                      background: isOpen ? "linear-gradient(135deg, #D92010, #F0380E)" : "#F5F0FF",
                      border: isOpen ? "none" : "1.5px solid #DDD6FE",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "all 0.25s ease",
                    }}
                  >
                    <svg
                      width="12" height="12" viewBox="0 0 12 12"
                      style={{ transition: "transform 0.25s ease", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)", display: "block" }}
                    >
                      <line x1="6" y1="0" x2="6" y2="12" stroke={isOpen ? "#FFFFFF" : "#7C3AED"} strokeWidth="1.8" strokeLinecap="round" />
                      <line x1="0" y1="6" x2="12" y2="6" stroke={isOpen ? "#FFFFFF" : "#7C3AED"} strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </div>
                </button>

                <div
                  style={{
                    maxHeight: isOpen ? "700px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <div style={{
                      width: "3px", minWidth: "3px",
                      background: isOpen ? "linear-gradient(180deg, #D92010, #F0380E)" : "transparent",
                      margin: `0 0 24px clamp(14px,3vw,28px)`,
                      borderRadius: "2px",
                      transition: "background 0.25s ease",
                    }} />

                    {/* ── Pricing ── */}
                    {isPricing ? (
                      <div style={ap}>
                        <p style={{ ...base, marginBottom: "14px" }}>Зависит от задачи:</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                          {pricingBullets.map((item) => (
                            <li key={item.label} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                              <span style={{ width: "6px", height: "6px", minWidth: "6px", borderRadius: "50%", background: "#D92010", marginTop: "9px", display: "block", flexShrink: 0 }} />
                              <span style={{ ...base }}>
                                <span style={{ fontWeight: 600, color: "#0C0A1E" }}>{item.label}</span>
                                <span style={{ color: "#94A3B8" }}> ({item.detail})</span>
                                {" — "}
                                <span style={red}>{item.price}</span>
                              </span>
                            </li>
                          ))}
                        </ul>
                        <p style={{ ...base, ...sep }}>Мы всегда делаем бесплатный расчёт под конкретную задачу — без навязывания лишнего.</p>
                      </div>

                    /* ── Tasks ── */
                    ) : isTasks ? (
                      <div style={ap}>
                        <p className="font-bold" style={{ ...base, marginBottom: "14px" }}>Практически любые, где есть обработка информации:</p>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
                          {tasksBullets.map((item) => (
                            <li key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                              <span style={{ width: "6px", height: "6px", minWidth: "6px", borderRadius: "50%", background: "#D92010", marginTop: "9px", display: "block", flexShrink: 0 }} />
                              <span style={{ ...base }}>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p style={{ ...base, ...sep }}>Если задача связана с данными или коммуникацией — скорее всего, ИИ поможет.</p>
                      </div>

                    /* ── ChatGPT ── */
                    ) : isChatGPT ? (
                      <div style={ap}>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          ChatGPT — это чат, который отвечает на вопросы. Мы делаем программное обеспечение, которое <span style={red}>решает бизнес-задачи</span>.
                        </p>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          Наши ИИ-ассистенты работают с реальными данными вашей компании — из <span style={{ color: "#0C0A1E", fontWeight: 600 }}>1С, amoCRM, Битрикс24</span> и других систем.
                        </p>
                        <p style={{ ...base }}>
                          Они не просто разговаривают, а <span style={red}>анализируют, принимают решения и выполняют действия</span>.
                        </p>
                      </div>

                    /* ── Hard to implement ── */
                    ) : isHardToImpl ? (
                      <div style={ap}>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          <span style={red}>Нет.</span> Мы делаем всё под ключ — от настройки до готового интерфейса.
                        </p>
                        <p style={{ ...base }}>
                          Ваша команда работает с ИИ через удобный интерфейс (веб или Telegram), без технических знаний. Мы обучаем сотрудников <span style={red}>за 1 день</span>.
                        </p>
                      </div>

                    /* ── Replace people ─ */
                    ) : isReplace ? (
                      <div style={ap}>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          <span style={red}>Иногда да, но чаще — нет.</span>
                        </p>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          ИИ-ассистенты снимают рутину: типовые вопросы, обработка данных, заполнение форм. Люди освобождаются для сложных задач, где нужна экспертиза и креативность.
                        </p>
                        <p style={{ ...base }}>
                          В результате растёт скорость, качество работы и прибыль, а команда не выгорает на повторяющихся операциях.
                        </p>
                      </div>

                    /* ── Security ── */
                    ) : isSecurity ? (
                      <div style={ap}>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          Мы работаем строго в соответствии с требованиями <span style={red}>152-ФЗ</span> (закон о персональных даных).
                        </p>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          Все данные обрабатываются в защищённом контуре, без передачи в публичные нейросети (если вы этого не хотите). Вы контролируете, какие данные используются и где они хранятся.
                        </p>
                        <p style={{ ...base }}>
                          Для особо чувствительных данных — разворачиваем ИИ на ваших серверах (<span style={red}>on-premise</span>).
                        </p>
                      </div>

                    /* ── No need for AI ── */
                    ) : isNoNeed ? (
                      <div style={ap}>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          <span style={red}>Отлично!</span> Мы не фанатично продвигаем ИИ.
                        </p>
                        <p style={{ ...base }}>
                          Если задачу лучше и дешевле решает классическая архитектура — мы так и сделаем. Главное для нас — <span style={{ color: "#0C0A1E", fontWeight: 600 }}>эффективность решения</span>, а не хайп вокруг технологий.
                        </p>
                      </div>

                    /* ─ How to understand (NEW) ── */
                    ) : isHowToUnderstand ? (
                      <div style={ap}>
                        <p style={{ ...base, marginBottom: "10px" }}>
                          <span style={red}>Просто напишите нам.</span>
                        </p>
                        <p style={{ ...base }}>
                          Мы бесплатно оцениваем целесообразность применения ИИ: где он даст выгоду, а где — избыточен. Иногда проще сделать обычный скрипт, чем тратить бюджет на ИИ без отдачи.
                        </p>
                      </div>

                    /* ── Default ── */
                    ) : (
                      <p style={{ ...ap, ...base }}>
                        {faq.a}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}