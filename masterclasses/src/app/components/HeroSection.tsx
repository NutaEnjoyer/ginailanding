import { motion } from "motion/react";
import { AnimatedBackground } from "./AnimatedBackground";
import heroImage from "../../assets/7e55c7c15babde9d9672c725d0544c4422ae66ef.png";

interface Props {
  onOpenModal: () => void;
}

const floatAnim = {
  y: [0, -12, 0],
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" as const },
};

export function HeroSection({ onOpenModal }: Props) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050508 0%, #0a0a14 50%, #080d18 100%)" }}
    >
      <AnimatedBackground />

      {/* Hero image — right side, large */}
      <div
        className="absolute inset-y-0 right-0 pointer-events-none"
        style={{ width: "55%", zIndex: 2 }}
      >
        {/* gradient overlay — left fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #050508 0%, rgba(5,5,8,0.85) 20%, rgba(5,5,8,0.3) 50%, transparent 100%)",
            zIndex: 3,
          }}
        />
        {/* bottom fade */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, #050508 0%, transparent 30%)",
            zIndex: 3,
          }}
        />
        <img
          src={heroImage}
          alt="Михаил Ляшенко"
          className="w-full h-full object-cover object-top"
          style={{ filter: "saturate(1.2) contrast(1.05)" }}
        />
      </div>

      {/* Mobile image — top, smaller */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none md:hidden"
        style={{ height: "45vh", zIndex: 2 }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(5,5,8,0.2) 0%, #050508 100%)",
            zIndex: 3,
          }}
        />
        <img
          src={heroImage}
          alt="Михаил Ляшенко"
          className="w-full h-full object-cover object-top"
          style={{ filter: "saturate(1.2) contrast(1.05)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-0 mt-[40vh] md:mt-0">
        <div className="max-w-xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span
              className="inline-block px-3 py-1 rounded-full"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#A1A1AA",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "0.8rem",
                letterSpacing: "0.02em",
              }}
            >
              Бесплатный 3-дневный мастер-класс
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white mb-5"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
            }}
          >
            Забей на фриланс 2.0. Бери от 150к за{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #38BDF8 0%, #818CF8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              ИИ-проекты
            </span>{" "}
            для бизнеса
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mb-10"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "1.1rem",
              fontWeight: 400,
              color: "#A1A1AA",
              lineHeight: 1.6,
            }}
          >
            Без сложных технических навыков
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44 }}
            className="mb-5"
          >
            <motion.button
              onClick={onOpenModal}
              whileHover={{ scale: 1.03, boxShadow: "0 0 48px rgba(56,189,248,0.55), 0 8px 32px rgba(56,189,248,0.25)" }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden w-full sm:w-auto"
              style={{
                background: "linear-gradient(135deg, #0EA5E9 0%, #6366F1 100%)",
                color: "#ffffff",
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                fontSize: "1rem",
                padding: "14px 32px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 28px rgba(56,189,248,0.35), 0 4px 20px rgba(99,102,241,0.2)",
                letterSpacing: "0.01em",
              }}
            >
              Забронировать место бесплатно
            </motion.button>
          </motion.div>

          {/* Date line */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.52 }}
            className="mb-10"
            style={{
              fontFamily: "Roboto, sans-serif",
              fontSize: "0.875rem",
              color: "#CBD5E1",
              fontWeight: 500,
            }}
          >
            📅 14, 15, 16 апреля · 19:00 мск · Онлайн
          </motion.p>

          {/* Bonuses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.62 }}
            className="rounded-xl p-5"
            style={{
              background: "#111318",
            }}
          >
            <p
              className="mb-4"
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                color: "#94A3B8",
                textTransform: "uppercase",
                letterSpacing: "0.07em",
              }}
            >
              Сразу после регистрации
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="8" cy="8" r="7.5" stroke="#38BDF8" strokeOpacity="0.5"/>
                  <path d="M5 8L7 10L11 6" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.875rem", color: "#CBD5E1", lineHeight: 1.5 }}>
                  Инструкция «7 сигналов, что бизнес теряет деньги» — ваш рентген-аппарат для бизнеса
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="8" cy="8" r="7.5" stroke="#38BDF8" strokeOpacity="0.5"/>
                  <path d="M5 8L7 10L11 6" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.875rem", color: "#CBD5E1", lineHeight: 1.5 }}>
                  Чек-лист «20 вопросов, которые обезоруживают клиента» (за приглашение друга)
                </span>
              </li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #050508 0%, transparent 100%)",
          zIndex: 5,
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div
          className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-2"
          style={{ borderColor: "rgba(0,212,255,0.4)" }}
        >
          <div
            className="w-1 h-3 rounded-full"
            style={{ background: "#00D4FF" }}
          />
        </div>
      </motion.div>
    </section>
  );
}