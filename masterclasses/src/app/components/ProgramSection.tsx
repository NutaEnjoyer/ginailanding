import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ScanSearch, Cpu, Workflow } from "lucide-react";

const days = [
  {
    day: "День 1",
    label: "14 апреля",
    title: "Диагноз",
    Icon: ScanSearch,
    color: "#00D4FF",
    description:
      "Научу за 15 минут находить точки утечки денег в любом бизнесе с помощью ИИ.",
    result:
      "Вы увидите, где сейчас бизнес теряет миллионы, и как это быстро остановить.",
  },
  {
    day: "День 2",
    label: "15 апреля",
    title: "Проектирование",
    Icon: Cpu,
    color: "#FF1493",
    description:
      "В прямом эфире соберу работающее ИИ-решение за 60 минут.",
    result:
      "Вы поймёте алгоритм: от проблемы до готового инструмента, который экономит деньги.",
  },
  {
    day: "День 3",
    label: "16 апреля",
    title: "Система",
    Icon: Workflow,
    color: "#FFD700",
    description:
      "Расскажу, как выстроить конвейер ИИ-прое��тов и выйти на пассивный доход.",
    result:
      "Вы получите схему, которая позволит масштабироваться и зарабатывать на повторяющихся решениях.",
  },
];

function DayCard({ day, index }: { day: typeof days[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      className="relative rounded-2xl p-5 sm:p-8 overflow-hidden group"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
        border: `1px solid ${day.color}25`,
      }}
    >
      {/* Number */}
      <div
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-5xl sm:text-7xl font-black opacity-5 select-none"
        style={{ fontFamily: "Roboto Condensed, sans-serif", color: day.color }}
      >
        {index + 1}
      </div>

      {/* Glow line top */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 opacity-60"
        style={{ background: `linear-gradient(90deg, transparent, ${day.color}, transparent)` }}
      />

      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `${day.color}15`, border: `1px solid ${day.color}30` }}
        >
          <day.Icon size={22} color={day.color} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-sm mb-1" style={{ color: day.color, fontFamily: "Roboto, sans-serif", fontWeight: 600 }}>
            {day.day} · {day.label}
          </p>
          <h3
            className="text-white"
            style={{ fontFamily: "Roboto Condensed, Roboto, sans-serif", fontSize: "1.5rem", fontWeight: 900 }}
          >
            {day.title}
          </h3>
        </div>
      </div>

      <p
        className="text-gray-300 mb-4 leading-relaxed"
        style={{ fontFamily: "Roboto, sans-serif", fontSize: "1rem" }}
      >
        {day.description}
      </p>

      <div
        className="rounded-xl p-4 flex gap-3"
        style={{ background: `${day.color}08`, border: `1px solid ${day.color}20` }}
      >
        <span style={{ color: day.color }}>👉</span>
        <p
          className="text-gray-300 text-sm leading-relaxed"
          style={{ fontFamily: "Roboto, sans-serif" }}
        >
          {day.result}
        </p>
      </div>
    </motion.div>
  );
}

export function ProgramSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080c12 0%, #050508 100%)" }}
    >
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
              background: "rgba(255,215,0,0.08)",
              border: "1px solid rgba(255,215,0,0.25)",
              color: "#FFD700",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            3 дня · 3 трансформации
          </span>
          <h2
            className="text-white"
            style={{
              fontFamily: "Roboto Condensed, Roboto, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
            }}
          >
            Программа мастер-класса
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {days.map((d, i) => (
            <DayCard key={i} day={d} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}