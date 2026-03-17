import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import review1 from "../../assets/404d5bc8df076169325059d74a870023673e4afd.png";
import review2 from "../../assets/721531667c1b0fe3896f7c18f8a120a175579513.png";
import review3 from "../../assets/8b3418b1f656adf5a381b5164c84b76f128872dc.png";
import review4 from "../../assets/a22242b59ce3578b065b95c818ef66d95613cbbd.png";
import review5 from "../../assets/57075dddca8a5b62bf832293b12807b1c77a64c0.png";
import review6 from "../../assets/457859320454928fec939c84e068ec8652d23b77.png";
import review7 from "../../assets/7f9e42b83c0afaabf2c704d1f9eba80370a62c27.png";

const reviews = [review1, review2, review3, review4, review5, review6, review7];

function ReviewCard({ src, index }: { src: string; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
      className="rounded-2xl overflow-hidden group relative"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      <img
        src={src}
        alt={`Отзыв ${index + 1}`}
        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        style={{ display: "block" }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: "inset 0 0 0 2px rgba(0,212,255,0.3)" }}
      />
    </motion.div>
  );
}

export function ReviewsSection() {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #050508 0%, #080c12 100%)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255,20,147,0.04) 0%, transparent 70%)",
        }}
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
              background: "rgba(255,20,147,0.08)",
              border: "1px solid rgba(255,20,147,0.25)",
              color: "#FF1493",
              fontFamily: "Roboto, sans-serif",
            }}
          >
            Реальные отзывы
          </span>
          <h2
            className="text-white"
            style={{
              fontFamily: "Roboto Condensed, Roboto, sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 900,
            }}
          >
            Отзывы с прошлых мастер-классов
          </h2>
          <p
            className="text-gray-400 mt-3"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Люди, которые уже прошли этот путь
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviews.map((src, i) => (
            <div key={i} className="break-inside-avoid mb-5">
              <ReviewCard src={src} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
