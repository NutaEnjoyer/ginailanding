import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const audience = [
  {
    icon: "💼",
    title: "Фрилансер",
    desc: "Хочет уйти от микрозаработков и брать проекты от 150 000 ₽",
    color: "#00D4FF",
  },
  {
    icon: "📊",
    title: "Специалист",
    desc: "Маркетолог, аналитик, менеджер — желающий добавить ИИ в арсенал и стать незаменимым",
    color: "#FF1493",
  },
  {
    icon: "🏢",
    title: "Предприниматель",
    desc: "Хочет автоматизировать бизнес и сократить расходы с помощью ИИ",
    color: "#FFD700",
  },
  {
    icon: "🚀",
    title: "Новичок",
    desc: "Без технического бэкграунда — научим собирать решения по нашей методологии понятным языком без сложностей",
    color: "#8B5CF6",
  },
];

function AudienceCard({ item, index }: { item: typeof audience[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      className="relative rounded-2xl p-6 group hover:-translate-y-2 transition-transform duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        border: `1px solid ${item.color}30`,
        boxShadow: `0 0 30px ${item.color}10`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `0 0 40px ${item.color}20`, background: `${item.color}05` }}
      />

      <div
        className="text-4xl mb-4 w-16 h-16 flex items-center justify-center rounded-xl"
        style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
      >
        {item.icon}
      </div>
      <h3
        className="text-white mb-3"
        style={{
          fontFamily: "Roboto, sans-serif",
          fontSize: "1.2rem",
          fontWeight: 700,
          color: item.color,
        }}
      >
        {item.title}
      </h3>
      <p
        className="text-gray-400 leading-relaxed"
        style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.95rem" }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

export function AudienceSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050508 0%, #080c12 100%)" }}
    >
      {/* Decorative line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #00D4FF40, transparent)" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
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
            Целевая аудитория
          </span>
          <h2
            className="text-white"
            style={{
              fontFamily: "Roboto Condensed, Roboto, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
            }}
          >
            Этот МК для вас, если вы:
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((item, i) => (
            <AudienceCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #FF149340, transparent)" }}
      />
    </section>
  );
}
