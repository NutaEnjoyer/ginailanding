import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { AnimatedBackground } from "./AnimatedBackground";

interface Props {
  onOpenModal: () => void;
}

// Target: April 14, 2026 at 19:00 Moscow time (UTC+3 = 16:00 UTC)
const TARGET = new Date("2026-04-14T16:00:00Z").getTime();

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState(() => Math.max(0, TARGET - Date.now()));

  useEffect(() => {
    const tick = () => setTimeLeft(Math.max(0, TARGET - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const totalSeconds = Math.floor(timeLeft / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return [
    { label: "Дней",    value: pad(days) },
    { label: "Часов",   value: pad(hours) },
    { label: "Минут",   value: pad(minutes) },
    { label: "Секунд",  value: pad(seconds) },
  ];
}

export function FinalCTASection({ onOpenModal }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const countdown = useCountdown();

  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050508 0%, #0a0514 50%, #050508 100%)" }}
    >
      <AnimatedBackground />

      {/* Center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,215,0,0.07) 0%, rgba(255,20,147,0.04) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
            className="text-5xl mb-6"
          >
            🚀
          </motion.div>

          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "Roboto Condensed, Roboto, sans-serif",
              fontSize: "clamp(1.6rem, 4vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.2,
            }}
          >
            Не упустите возможность войти
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              в новую профессию без вложений
            </span>
          </h2>

          <p
            className="text-gray-400 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            14, 15, 16 апреля в 19:00 мск · Онлайн · Бесплатно
          </p>

          {/* Countdown */}
          <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
            {countdown.map((t, i) => (
              <motion.div
                key={t.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="rounded-xl px-3 py-3 sm:p-4 text-center min-w-[64px] sm:min-w-[80px]"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,215,0,0.2)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Roboto Condensed, Roboto, sans-serif",
                    fontSize: "clamp(1.4rem, 5vw, 2rem)",
                    fontWeight: 900,
                    color: "#FFD700",
                    fontVariantNumeric: "tabular-nums",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t.value}
                </p>
                <p className="text-gray-500 text-xs" style={{ fontFamily: "Roboto, sans-serif" }}>
                  {t.label}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.button
            onClick={onOpenModal}
            animate={{ boxShadow: ["0 0 30px rgba(255,215,0,0.4)", "0 0 60px rgba(255,215,0,0.7)", "0 0 30px rgba(255,215,0,0.4)"] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="w-full sm:w-auto px-10 py-5 rounded-2xl text-black mb-5 inline-block"
            style={{
              background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
              fontFamily: "Roboto, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            }}
          >
            👉 ЗАБРОНИРОВАТЬ МЕСТО БЕСПЛАТНО + ПОЛУЧИТЬ БОНУСЫ
          </motion.button>

          <p
            className="text-gray-500 text-sm"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            
          </p>
        </motion.div>
      </div>
    </section>
  );
}