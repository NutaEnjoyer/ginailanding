import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const details = [
  { icon: "📅", label: "Когда", value: "14, 15, 16 апреля в 19:00 по Москве" },
  { icon: "💻", label: "Где", value: "Онлайн-трансляция (ссылка придёт в Telegram после регистрации)" },
  { icon: "🎯", label: "Формат", value: "Живые эфиры + практические ДЗ с разбором" },
  { icon: "🎁", label: "Бонусы", value: "Все бонусы остаются с вами навсегда" },
];

interface Props {
  onOpenModal: () => void;
}

export function RegistrationInfoSection({ onOpenModal }: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080c12 0%, #050508 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
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
            Детали мероприятия
          </span>
          <h2
            className="text-white"
            style={{
              fontFamily: "Roboto Condensed, Roboto, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
            }}
          >
            Даты и регистрация
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {details.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-6 flex gap-4 items-start"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <span className="text-3xl flex-shrink-0">{d.icon}</span>
                <div>
                  <p
                    className="text-xs mb-1 uppercase tracking-wider"
                    style={{ color: "#00D4FF", fontFamily: "Roboto, sans-serif", fontWeight: 600 }}
                  >
                    {d.label}
                  </p>
                  <p
                    className="text-gray-200"
                    style={{ fontFamily: "Roboto, sans-serif", lineHeight: 1.5 }}
                  >
                    {d.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto inline-block px-10 py-5 rounded-2xl text-black"
              style={{
                background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 700,
                fontSize: "1.05rem",
                boxShadow: "0 0 40px rgba(255,215,0,0.4), 0 8px 32px rgba(0,0,0,0.3)",
              }}
            >
              👉 ЗАБРОНИРОВАТЬ МЕСТО БЕСПЛАТНО
            </motion.button>
            <p className="mt-4 text-gray-500 text-sm" style={{ fontFamily: "Roboto, sans-serif" }}>
              <a
                href="https://ginai.ru/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-300 transition-colors"
                style={{ color: "#00D4FF" }}
              >
                Политика конфиденциальности
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}