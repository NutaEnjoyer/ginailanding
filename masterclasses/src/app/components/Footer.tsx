export function Footer() {
  return (
    <footer
      className="py-8 border-t"
      style={{
        borderColor: "rgba(255,255,255,0.06)",
        background: "#050508",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            
            <span
              className="text-gray-400"
              style={{ fontFamily: "Roboto, sans-serif", fontSize: "0.9rem" }}
            >© 2026 CINAI. Все права защищены.</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://ginai.ru/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm underline"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              Политика конфиденциальности
            </a>
            <span className="text-gray-600">·</span>
            <a
              href="mailto:academy@ginai.ru"
              className="text-gray-500 hover:text-gray-300 transition-colors text-sm"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              academy@ginai.ru
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
