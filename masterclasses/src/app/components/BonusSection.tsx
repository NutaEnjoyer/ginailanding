import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function BonusSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050508 0%, #0a0510 100%)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(139,92,246,0.12) 0%, rgba(255,20,147,0.08) 50%, rgba(0,212,255,0.08) 100%)",
            border: "1px solid rgba(139,92,246,0.3)",
            boxShadow: "0 0 80px rgba(139,92,246,0.15)",
          }}
        >
          {/* Glow corners */}
          <div
            className="absolute top-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #8B5CF6, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-px"
            style={{ background: "linear-gradient(90deg, transparent, #FF1493, transparent)" }}
          />

          <motion.div
            animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            className="text-6xl mb-6"
          >
            🔥
          </motion.div>

          <span
            className="inline-block px-4 py-1 rounded-full text-sm mb-5"
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "1px solid rgba(255,215,0,0.3)",
              color: "#FFD700",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 600,
            }}
          >
            Супербонус
          </span>

          <h2
            className="text-white mb-6"
            style={{
              fontFamily: "Roboto Condensed, Roboto, sans-serif",
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Всем, кто посетит все 3 эфира и выполнит домашнее задание
          </h2>

          <div
            className="rounded-2xl p-6 mb-6 text-left"
            style={{
              background: "rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,215,0,0.2)",
            }}
          >
            <p
              className="text-yellow-400 mb-3"
              style={{ fontFamily: "Roboto, sans-serif", fontWeight: 700, fontSize: "1.1rem" }}
            >
              «5 ИИ-решений, на которые у бизнеса есть дикий спрос и их покупают от 150 000 ₽ за решение»
            </p>
            <p
              className="text-gray-300 leading-relaxed"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Это полностью готовые архитектуры решений — схемы, которые можно развернуть за 2 дня и продавать бизнесу.
            </p>
          </div>

          <div
            className="inline-flex flex-wrap items-center gap-3 px-6 py-3 rounded-xl"
            style={{
              background: "rgba(255,215,0,0.1)",
              border: "1px solid rgba(255,215,0,0.3)",
            }}
          >
            <span className="text-2xl">💎</span>
            <div className="text-left">
              <p className="text-gray-400 text-xs" style={{ fontFamily: "Roboto, sans-serif" }}>
                Ценность набора
              </p>
              <p
                style={{
                  fontFamily: "Roboto Condensed, Roboto, sans-serif",
                  fontSize: "1.3rem",
                  fontWeight: 900,
                  color: "#FFD700",
                }}
              >
                более 750 000 ₽
              </p>
              <p className="text-gray-500 text-xs" style={{ fontFamily: "Roboto, sans-serif" }}>
                если внедрять самостоятельно
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}