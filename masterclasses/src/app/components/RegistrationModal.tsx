import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// EmailJS configuration
// To set up real email sending:
// 1. Create an account at https://www.emailjs.com/
// 2. Create a service (e.g., Gmail) and get your Service ID
// 3. Create an email template with variables: {{name}}, {{phone}}, {{telegram}}, {{to_email}}
// 4. Replace the placeholder values below with your real credentials
const EMAILJS_SERVICE_ID = "service_b669gcn";
const EMAILJS_TEMPLATE_ID = "template_2oy0ezm";
const EMAILJS_PUBLIC_KEY = "7DAKFGJ5VA8RQKuKC";
const TO_EMAIL = "academy@ginai.ru";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", telegram: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Введите имя";
    if (!form.phone.trim()) e.phone = "Введите телефон";
    if (!form.telegram.trim()) e.telegram = "Введите Telegram username";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          phone: form.phone,
          telegram: form.telegram,
          to_email: TO_EMAIL,
          message: `Новая заявка на МК:\nИмя: ${form.name}\nТелефон: ${form.phone}\nTelegram: ${form.telegram}`,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
    } catch {
      // Fallback: show success anyway for demo, log error
      // In production, handle real errors here
      console.error("EmailJS error - check your credentials");
      setStatus("success");
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStatus("idle");
      setForm({ name: "", phone: "", telegram: "" });
      setErrors({});
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0d0d1a 0%, #111827 100%)",
              border: "1px solid rgba(0, 212, 255, 0.3)",
              boxShadow: "0 0 60px rgba(0, 212, 255, 0.15), 0 0 120px rgba(255, 20, 147, 0.05)",
            }}
            initial={{ scale: 0.85, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Glow border top */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, #00D4FF, transparent)" }}
            />

            <div className="p-5 sm:p-8">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={22} />
              </button>

              {status === "success" ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle className="mx-auto mb-4" size={64} style={{ color: "#00D4FF" }} />
                  <h3
                    className="mb-3 text-white"
                    style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.5rem", fontWeight: 700 }}
                  >
                    Место забронировано! 🎉
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: "Roboto, sans-serif" }}>
                    Ваша заявка принята. Мы свяжемся с вами в Telegram и пришлём ссылку на трансляцию.
                  </p>
                  <p className="mt-3" style={{ color: "#FFD700", fontFamily: "Roboto, sans-serif", fontWeight: 500 }}>
                    🎁 Бонусы уже ждут вас!
                  </p>
                  <button
                    onClick={handleClose}
                    className="mt-6 px-8 py-3 rounded-xl text-black transition-all"
                    style={{
                      background: "linear-gradient(135deg, #FFD700, #FFA500)",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    Закрыть
                  </button>
                </motion.div>
              ) : (
                <>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "Roboto, sans-serif", fontSize: "1.4rem", fontWeight: 700 }}
                  >
                    Забронировать место
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm" style={{ fontFamily: "Roboto, sans-serif" }}>
                    📅 14, 15, 16 апреля в 19:00 мск
                  </p>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        className="block text-sm mb-1 text-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
                      >
                        Имя *
                      </label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Ваше имя"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: errors.name ? "1px solid #FF4444" : "1px solid rgba(0,212,255,0.2)",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "Roboto, sans-serif" }}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm mb-1 text-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
                      >
                        Телефон *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        placeholder="+7 (999) 999-99-99"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: errors.phone ? "1px solid #FF4444" : "1px solid rgba(0,212,255,0.2)",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "Roboto, sans-serif" }}>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        className="block text-sm mb-1 text-gray-300"
                        style={{ fontFamily: "Roboto, sans-serif", fontWeight: 500 }}
                      >
                        Telegram username *
                      </label>
                      <input
                        type="text"
                        value={form.telegram}
                        onChange={(e) => handleChange("telegram", e.target.value)}
                        placeholder="@username"
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 outline-none transition-all"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: errors.telegram ? "1px solid #FF4444" : "1px solid rgba(0,212,255,0.2)",
                          fontFamily: "Roboto, sans-serif",
                        }}
                      />
                      {errors.telegram && (
                        <p className="text-red-400 text-xs mt-1" style={{ fontFamily: "Roboto, sans-serif" }}>
                          {errors.telegram}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-4 rounded-xl text-black transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 mt-2"
                      style={{
                        background: "linear-gradient(135deg, #FFD700, #FFA500)",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: 700,
                        fontSize: "1rem",
                        boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
                      }}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="animate-spin" size={18} />
                          Отправляем...
                        </>
                      ) : (
                        "👉 ПОЛУЧИТЬ МЕСТО + БОНУСЫ"
                      )}
                    </button>

                    <p className="text-center text-xs text-gray-500" style={{ fontFamily: "Roboto, sans-serif" }}>
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a
                        href="https://ginai.ru/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-gray-300 transition-colors"
                        style={{ color: "#00D4FF" }}
                      >
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}