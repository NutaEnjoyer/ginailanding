import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import speakerImage from "../../assets/2bbef8c24974c9cbd5f93ddea99b69e1ff5edf64.png";

const stats = [
  { value: "3+", label: "года практики внедрения ИИ" },
  { value: "50+", label: "реализованных проектов" },
  { value: "150К+", label: "средний чек за проект" },
];

const facts = [
  "Основатель CINAI (продукты HALO и ORBI)",
  "3+ года практического внедрения ИИ в российский бизнес",
  "50+ реализованных проектов",
  "Спикер, которого называют «не инфоцыганом, а коллегой, который живёт этим»",
];

export function SpeakerSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0a0510 0%, #050508 100%)" }}
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,212,255,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Photo */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative flex-shrink-0"
          >
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                width: "clamp(220px, 70vw, 400px)",
                height: "clamp(220px, 70vw, 400px)",
                boxShadow: "0 0 80px rgba(0,212,255,0.2), 0 0 160px rgba(255,20,147,0.1)",
                border: "2px solid rgba(0,212,255,0.2)",
              }}
            >
              <img
                src={speakerImage}
                alt="Михаил Ляшенко"
                className="w-full h-full object-cover object-center"
                style={{ filter: "saturate(1.15)" }}
              />
              {/* Overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to top, rgba(5,5,8,0.6) 0%, transparent 50%)",
                }}
              />
            </div>

            {/* Decorative rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 rounded-3xl pointer-events-none"
              style={{
                border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: "2rem",
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 rounded-3xl pointer-events-none"
              style={{
                border: "1px solid rgba(255,20,147,0.06)",
                borderRadius: "2.5rem",
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-sm mb-4"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.25)",
                color: "#00D4FF",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              👨‍💻 Кто ведёт мастер-класс
            </span>

            <h2
              className="text-white mb-2"
              style={{
                fontFamily: "Roboto Condensed, Roboto, sans-serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 900,
              }}
            >
              Михаил Ляшенко
            </h2>

            <p
              className="mb-6"
              style={{ color: "#00D4FF", fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
            >
              ИИ-инженер · Основатель CINAI
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <p
                    style={{
                      fontFamily: "Roboto Condensed, Roboto, sans-serif",
                      fontSize: "1.8rem",
                      fontWeight: 900,
                      background: "linear-gradient(135deg, #FFD700, #FFA500)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "Roboto, sans-serif" }}
                  >
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Facts */}
            <ul className="space-y-3 mb-8">
              {facts.map((f, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex gap-3 items-start text-gray-300"
                  style={{ fontFamily: "Roboto, sans-serif" }}
                >
                  <span style={{ color: "#00D4FF", flexShrink: 0, marginTop: 2 }}>—</span>
                  {f}
                </motion.li>
              ))}
            </ul>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,215,0,0.2)",
                borderLeft: "4px solid #FFD700",
              }}
            >
              <p
                className="text-gray-300 italic"
                style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem", lineHeight: 1.7 }}
              >
                «Мы не обещаем золотые горы — мы даём инструменты и показываем, как ими пользоваться»
              </p>
              <p
                className="mt-3 text-sm"
                style={{ color: "#FFD700", fontFamily: "Roboto, sans-serif", fontWeight: 600 }}
              >
                — Михаил Ляшенко
              </p>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}