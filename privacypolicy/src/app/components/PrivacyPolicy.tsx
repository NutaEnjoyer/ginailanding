import { useState, useEffect, useRef } from "react";

const navItems = [
  { id: "section-1", label: "Основные понятия", number: "1" },
  { id: "section-2", label: "Общие положения", number: "2" },
  { id: "section-3", label: "Предмет политики", number: "3" },
  { id: "section-4", label: "Цели сбора информации", number: "4" },
  { id: "section-5", label: "Защита персональных данных", number: "5" },
  { id: "section-6", label: "Способы и сроки обработки", number: "6" },
  { id: "section-7", label: "Права и обязанности", number: "7" },
  { id: "section-8", label: "Заключительные положения", number: "8" },
];

export function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("section-1");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 32;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMobileNavOpen(false);
  };

  return (
    <div
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#F9F9F9" }}
      className="min-h-screen"
    >
      {/* Page wrapper */}
      <div className="max-w-[1200px] mx-auto px-5 py-12 lg:py-16">
        {/* Document header */}
        <div className="mb-10 lg:mb-14">
          <p
            style={{ color: "#9CA3AF", letterSpacing: "0.06em" }}
            className="text-xs uppercase mb-2"
          >
            г. Москва · редакция от 01.01.2026
          </p>
          <h1
            style={{
              color: "#111827",
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
            }}
          >
            Политика конфиденциальности
          </h1>
          <p
            style={{ color: "#6B7280", lineHeight: 1.6 }}
            className="mt-3 text-sm max-w-[640px]"
          >
            Настоящая Политика конфиденциальности персональных данных действует
            в отношении всех персональных данных, которые Администрация сайта
            может получить о Пользователе во время использования сайта{" "}
            <a
              href="https://ginai.ru/"
              style={{ color: "#374151", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              https://ginai.ru/
            </a>
          </p>
          <div
            style={{ backgroundColor: "#E5E7EB" }}
            className="mt-6 h-px w-full"
          />
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row lg:gap-16 xl:gap-24">
          {/* ── MOBILE NAV (accordion) ── */}
          <div className="lg:hidden mb-8">
            <button
              onClick={() => setMobileNavOpen((v) => !v)}
              style={{
                color: "#111827",
                borderColor: "#E5E7EB",
                backgroundColor: "#FFFFFF",
              }}
              className="w-full flex items-center justify-between px-4 py-3 border rounded-lg text-sm"
            >
              <span style={{ fontWeight: 500 }}>Содержание документа</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{
                  transform: mobileNavOpen ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                  color: "#6B7280",
                }}
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {mobileNavOpen && (
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E5E7EB",
                }}
                className="mt-1 border rounded-lg overflow-hidden"
              >
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      style={{
                        color: isActive ? "#111827" : "#6B7280",
                        fontWeight: isActive ? 600 : 400,
                        backgroundColor: isActive ? "#F3F4F6" : "transparent",
                        borderLeft: isActive
                          ? "3px solid #111827"
                          : "3px solid transparent",
                      }}
                      className="w-full text-left px-4 py-3 text-sm transition-colors hover:bg-gray-50 flex items-center gap-3"
                    >
                      <span
                        style={{
                          color: isActive ? "#111827" : "#9CA3AF",
                          fontSize: "0.7rem",
                          fontWeight: 500,
                          minWidth: "16px",
                        }}
                      >
                        {item.number}
                      </span>
                      {item.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ── DESKTOP STICKY NAV ── */}
          <aside
            className="hidden lg:block"
            style={{ width: "260px", flexShrink: 0 }}
          >
            <div
              className="sticky"
              style={{ top: "32px" }}
            >
              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
                className="mb-4"
              >
                Содержание
              </p>
              <nav>
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => scrollToSection(item.id)}
                          className="w-full text-left flex items-start gap-3 py-2 px-3 rounded-md transition-all duration-150"
                          style={{
                            color: isActive ? "#111827" : "#6B7280",
                            fontWeight: isActive ? 600 : 400,
                            fontSize: "0.8125rem",
                            lineHeight: 1.5,
                            backgroundColor: isActive ? "#F3F4F6" : "transparent",
                          }}
                          onMouseEnter={(e) => {
                            if (!isActive)
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                "#F9FAFB";
                          }}
                          onMouseLeave={(e) => {
                            if (!isActive)
                              (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                                "transparent";
                          }}
                        >
                          <span
                            style={{
                              color: isActive ? "#374151" : "#D1D5DB",
                              fontSize: "0.7rem",
                              fontWeight: 600,
                              marginTop: "2px",
                              minWidth: "14px",
                              flexShrink: 0,
                            }}
                          >
                            {item.number}
                          </span>
                          <span>{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              {/* Thin vertical divider on the right */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: "1px",
                  height: "100%",
                  backgroundColor: "#E5E7EB",
                }}
              />
            </div>
          </aside>

          {/* ── MAIN CONTENT ── */}
          <main style={{ maxWidth: "780px", flex: 1 }}>
            <div className="space-y-14">
              {/* SECTION 1 */}
              <section id="section-1">
                <SectionHeading number="1" title="Основные понятия" />
                <p style={bodyStyle}>
                  Основные понятия, используемые в Политике конфиденциальности:
                </p>
                <DefinitionList>
                  <Definition term="1.1. Администрация сайта">
                    зарегистрированный в соответствии с российским
                    законодательством индивидуальный предприниматель Ляшенко
                    Татьяна Станиславовна, ОГРНИП 324265100172122, ИНН
                    263519494262, на которое зарегистрирован сайт с доменным
                    именем https://ginai.ru/
                  </Definition>
                  <Definition term="1.2. Конфиденциальность персональных данных">
                    обязательное для соблюдения Администрацией сайта или иным
                    получившим доступ к персональным данным лицом требование не
                    допускать их распространения без согласия субъекта
                    персональных данных или наличия иного законного основания.
                  </Definition>
                  <Definition term="1.3. Обработка персональных данных">
                    любое действие (операция) или совокупность действий
                    (операций), совершаемых Администрацией сайта с
                    использованием средств автоматизации или без использования
                    таких средств с персональными данными, включая сбор,
                    запись, систематизацию, накопление, хранение, уточнение
                    (обновление, изменение), извлечение, использование, передачу
                    (распространение, предоставление, доступ), обезличивание,
                    блокирование, удаление, уничтожение персональных данных, и
                    передачу третьим лицам в соответствии с договорными
                    отношениями с Администрацией сайта.
                  </Definition>
                  <Definition term="1.4. Персональные данные">
                    любая информация, относящаяся к прямо или косвенно
                    определенному или определяемому физическому лицу (субъекту
                    персональных данных).
                  </Definition>
                  <Definition term="1.5. Политика конфиденциальности">
                    настоящий документ со всеми изменениями и дополнениями,
                    расположенный в сети Интернет по адресу https://ginai.ru/privacy
                  </Definition>
                  <Definition term="1.6. Пользователь">
                    дееспособное физическое лицо достигшее 18 лет,
                    использующее Сайт в собственных интересах, или выступающее
                    от имени представляемого юридического лица.
                  </Definition>
                  <Definition term="1.7. Регистрация на сайте">
                    совокупность действий Пользователя в соответствии с
                    инструкциями, включая предоставление Учетных данных и иной
                    информации, с использованием специальной формы
                    пользовательского интерфейса Сайта в целях формирования
                    Личного кабинета и получения доступа к Закрытому разделу
                    сайта.
                  </Definition>
                  <Definition term="1.8. Сайт">
                    сайт, размещённый в сети интернет по адресу https://ginai.ru/
                  </Definition>
                  <Definition term="1.9. Товар">
                    товары (записи вебинаров, тренингов, мастер-классов,
                    интенсивов, электронные книги), продаваемые на сайте с
                    доменным именем https://ginai.ru/
                  </Definition>
                  <Definition term="1.10. Услуги">
                    услуги Администрации сайта, в том числе оказываемые на
                    безвозмездной основе, информация о которых представлена на
                    Сайте: https://ginai.ru/
                  </Definition>
                  <Definition term="1.11. Файлы Cookies">
                    небольшой фрагмент данных, отправленный веб-сервером и
                    хранимый на компьютере пользователя, который веб-клиент или
                    веб-браузер каждый раз пересылает веб-серверу в HTTP-запросе
                    при попытке открыть страницу соответствующего сайта.
                  </Definition>
                  <Definition term="1.12. IP-адрес">
                    у��икальный сетевой адрес узла в компьютерной сети,
                    построенной по протоколу IP.
                  </Definition>
                </DefinitionList>
              </section>

              <Divider />

              {/* SECTION 2 */}
              <section id="section-2">
                <SectionHeading number="2" title="Общие положения" />
                <Paragraph>
                  <strong>2.1.</strong> Настоящая Политика конфиденциальности
                  применяется только к информации, получаемой в ходе
                  использования сайта с доменным именем https://ginai.ru/privacy
                </Paragraph>
                <Paragraph>
                  <strong>2.2.</strong> Администрация сайта не проверяет
                  достоверность Персональных данных, предоставляемых
                  Пользователем.
                </Paragraph>
                <Paragraph>
                  <strong>2.3.</strong> Использование Пользователем Сайта
                  означает согласие с настоящей Политикой конфиденциальности и
                  условиями обработки персональных данных Пользователя.
                </Paragraph>
                <Paragraph>
                  <strong>2.4.</strong> Принимая данную Политику
                  конфиденциальности, Пользователь тем самым даёт своё согласие
                  Администрации сайта на обработку своих Персональных данных,
                  указанных в п.&nbsp;3.2.–3.6. данной Политики
                  конфиденциальности, в том числе сбор, запись, накопление,
                  хранение, уточнение (обновление, изменение), извлечение,
                  использование, передачу (распространение, предоставление,
                  доступ), обезличивание, блокирование, удаление, уничтожение
                  персональных данных в целях, указанных в настоящей Политике.
                </Paragraph>
                <Paragraph>
                  <strong>2.5.</strong> Также принимая данную Политику
                  конфиденциальности, Пользователь тем самым даёт своё согласие
                  Администрации сайта на передачу третьим лицам согласно
                  договорным отношениям следующих операций: сбор, запись,
                  накопление, хранение, уточнение (обновление, изменение),
                  извлечение, использование, передачу (распространение,
                  предоставление, доступ), обезличивание, блокирование,
                  удаление, уничтожение персональных данных.
                </Paragraph>
                <Paragraph>
                  <strong>2.6.</strong> Если Пользователь не согласен с
                  условиями Политики конфиденциальности, он обязан прекратить
                  использование Сайта.
                </Paragraph>
                <Paragraph>
                  <strong>2.7.</strong> Настоящая Политика конфиденциальности
                  опубликована по адресу: https://ginai.ru/privacy
                </Paragraph>
              </section>

              <Divider />

              {/* SECTION 3 */}
              <section id="section-3">
                <SectionHeading number="3" title="Предмет политики конфиденциальности" />
                <Paragraph>
                  <strong>3.1.</strong> Настоящая Политика конфиденциальности
                  устанавливает обязанности Администрации сайта по обработке
                  Персональных данных пользователей, их охране, в том числе
                  обеспечению режима защиты конфиденциальности Персональных
                  данных, которые Пользователь предоставляет Администрации сайта
                  в следующих случаях:
                </Paragraph>
                <BulletList
                  items={[
                    "при регистрации на Сайте,",
                    "при публикации сообщений, комментариев на Сайте,",
                    "при оставлении отзывов об услугах Администрации сайта,",
                    "при заполнении формы обратной связи на Сайте,",
                    "при получении доступа к Услугам Администрации сайта, оказываемых на безвозмездной основе.",
                  ]}
                />
                <Paragraph>
                  <strong>3.2.</strong> Администрация Сайта собирает два вида
                  информации о Пользователе:
                </Paragraph>
                <BulletList
                  items={[
                    "информацию, которую Пользователь сознательно предоставил Администрации Сайта в процессе использования Сайта;",
                    "техническую информацию, автоматически собираемую программным обеспечением Сайта во время его посещения Пользователем.",
                  ]}
                />
                <Paragraph>
                  <strong>3.3.</strong> Техническая информация, автоматически
                  собираемая программным обеспечением Сайта во время его
                  посещения Пользователем, включает:
                </Paragraph>
                <BulletList
                  items={[
                    "IP-адрес;",
                    "информацию из cookies;",
                    "информацию о браузере;",
                    "информацию о типе устройства (мобильное или ПК);",
                    "время доступа;",
                    "номер телефона пользователя.",
                  ]}
                />
                <Paragraph>
                  <strong>3.4.</strong> На Сайте реализована технология
                  идентификации Пользователей, основанная на использовании
                  файлов cookies. На устройстве, используемом Пользователем для
                  доступа на Сайт, могут быть записаны файлы cookies, которые в
                  дальнейшем будут использованы для автоматической авторизации,
                  для сбора статистических данных, в частности о посещаемости
                  Сайта. Принимая данную Политику конфиденциальности,
                  Пользователь даёт своё согласие Администрации сайта на
                  передачу технических данных, указанных в п.&nbsp;3.6.,
                  по сети Интернет через национальные границы.
                </Paragraph>
                <Paragraph>
                  <strong>3.5.</strong> Администрация Сайта не сохраняет
                  Персональные данные в файлах cookies. Администрация сайта
                  использует информацию, записанную в файлах cookies, которая не
                  идентифицирует индивидуальных Пользователей, для анализа
                  тенденций, администрирования Сайта, определения движений
                  Пользователей по Сайту и для сбора демографической информации
                  о базовом контингенте Пользователей в целом.
                </Paragraph>
                <Paragraph>
                  <strong>3.6.</strong> Если Пользователь не хочет, чтобы
                  Администрация сайта собирала техническую информацию о нём с
                  использованием файлов cookies, то Пользователь обязан
                  прекратить пользоваться Сайтом или запретить сохранение
                  файлов cookies на своём устройстве, соответствующим образом
                  настроив свой браузер. При этом следует иметь в виду, что
                  Сервисы сайта, использующие данную технологию, могут
                  оказаться недоступными.
                </Paragraph>
                <Paragraph>
                  <strong>3.7.</strong> Персональные данные сохраняются
                  Администрацией сайта в конфиденциальности за исключением
                  случаев, когда Пользователь добровольно разместил информацию
                  для общего доступа в комментариях, отзывах на Сайте.
                </Paragraph>
                <Paragraph>
                  <strong>3.8.</strong> Администрация Сайта гарантирует, что
                  никогда не предоставляет Персональные данные третьим лицам,
                  за исключением случаев, когда:
                </Paragraph>
                <BulletList
                  items={[
                    "этого прямо требует законодательство (например, по письменному запросу суда, правоохранительных органов);",
                    "пользователь дал согласие на передачу персональных данных;",
                    "передача необходима для оказания Услуг, заключения договоров;",
                    "передача происходит в рамках продажи или иной передачи бизнеса;",
                    "передача происходит в рамках переноса базы Персональных данных с одного сервиса на другой согласно договорным отношениям Администрации сайта;",
                    "это требу��тся для оказания поддержки обслуживания Пользователей или для помощи в защите и безопасности систем и услуг Администрации сайта.",
                  ]}
                />
              </section>

              <Divider />

              {/* SECTION 4 */}
              <section id="section-4">
                <SectionHeading number="4" title="Цели сбора персональной информации пользователя" />
                <Paragraph>
                  <strong>4.1.</strong> Администрация сайта использует
                  Персональные данные пользователей в следующих целях:
                </Paragraph>
                <BulletList
                  items={[
                    "для обратной связи;",
                    "для создания учётной записи Пользователя и Личного кабинета для доступа к Закрытому разделу сайта;",
                    "для предоставления Пользователям Услуг и Товаров;",
                    "для проведения маркетинговых исследований;",
                    "для оценки работы Сайта.",
                  ]}
                />
              </section>

              <Divider />

              {/* SECTION 5 */}
              <section id="section-5">
                <SectionHeading number="5" title="Меры для защиты персональных данных" />
                <Paragraph>
                  <strong>5.1.</strong> Администрация сайта осуществляет защиту
                  персональной информации Пользователя, применяя общепринятые
                  методы безопасности для обеспечения защиты информации от
                  потери, неправомерного или случайного доступа, искажения и
                  несанкционированного распространения, уничтожения, изменения,
                  блокирования, копирования, а также любых других неправомерных
                  действий с персональными данными третьих лиц. Безопасность
                  реализуется программными средствами сетевой защиты,
                  процедурами проверки доступа, применением криптографических
                  средств защиты информации, соблюдением политики
                  конфиденциальности.
                </Paragraph>
              </section>

              <Divider />

              {/* SECTION 6 */}
              <section id="section-6">
                <SectionHeading number="6" title="Способы и сроки обработки персональных данных" />
                <Paragraph>
                  <strong>6.1.</strong> Обработка Персональных данных,
                  предоставляемых при регистрации на Сайте, осуществляется в
                  срок с момента регистрации Пользователя и до момента удаления
                  его учётной записи. Обработка других Персональных данных
                  осуществляется до достижения цели обработки Персональных
                  данных.
                </Paragraph>
                <Paragraph>
                  <strong>6.2.</strong> Если Персональные данные были утрачены
                  либо разглашены, Администрация сайта обязана проинформировать
                  об этом Пользователя.
                </Paragraph>
                <Paragraph>
                  <strong>6.3.</strong> Администрация сайта совместно с
                  Пользователем принимает все необходимые меры по
                  предотвращению убытков или иных отрицательных последствий,
                  вызванных утратой или разглашением персональных данных
                  Пользователя.
                </Paragraph>
              </section>

              <Divider />

              {/* SECTION 7 */}
              <section id="section-7">
                <SectionHeading number="7" title="Права и обязанности" />
                <Paragraph>
                  <strong>7.1.</strong> Пользователь при пользовании Сайтом
                  обязан предоставить информацию о Персональных данных,
                  требуемую Администрацией сайта.
                </Paragraph>
                <Paragraph>
                  <strong>7.2.</strong> Пользователь вправе требовать от
                  Администрации сайта уточнения его Персональных данных, их
                  блокирования или уничтожения в случае, если Персональные
                  данные являются неполными, устаревшими, неточными, незаконно
                  полученными или не являются необходимыми для заявленной цели
                  обработки. Для этого необходимо написать письмо на адрес{" "}
                  <a
                    href="mailto:info@ginai.ru"
                    style={{ color: "#374151", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    info@ginai.ru
                  </a>
                </Paragraph>
                <Paragraph>
                  <strong>7.3.</strong> Администрация сайта гарантирует, что
                  никогда не предоставляет Персональные данные третьим лицам,
                  за исключением случаев, предусмотренных пунктом 3.8. данной
                  Политики конфиденциальности.
                </Paragraph>
                <Paragraph>
                  <strong>7.4.</strong> Администрация сайта обязана использовать
                  полученную информацию исключительно для целей, указанных в
                  п.&nbsp;4.1. настоящей Политики конфиденциальности.
                </Paragraph>
                <Paragraph>
                  <strong>7.5.</strong> Администрация сайта осуществляет
                  блокирование Персональных данных о Пользователе, с момента
                  обращения или запроса Пользователя или его законного
                  представителя либо уполномоченного органа по защите прав
                  субъектов персональных данных на период проверки, в случае
                  выявления недостоверных персональных данных или неправомерных
                  действий.
                </Paragraph>
                <Paragraph>
                  <strong>7.6.</strong> Пользователь даёт согласие на то, что
                  Администрация сайта будет направлять на указанный им адрес
                  электронной почты новости Сайта, информацию о новых Услугах,
                  спецпредложениях, рекламу, другую полезную информацию от
                  Администрации сайта или партнёров. Пользователь в любое время
                  может отказаться от получения писем, кликнув на ссылку для
                  отписки в каждом полученном письме, или путём отправки
                  уведомления в свободной форме на электронный адрес{" "}
                  <a
                    href="mailto:info@ginai.ru"
                    style={{ color: "#374151", textDecoration: "underline", textUnderlineOffset: "3px" }}
                  >
                    info@ginai.ru
                  </a>
                </Paragraph>
              </section>

              <Divider />

              {/* SECTION 8 */}
              <section id="section-8">
                <SectionHeading number="8" title="Заключительные положения" />
                <Paragraph>
                  <strong>8.1.</strong> Администрация сайта имеет право внести
                  любые изменения и дополнения в Политику конфиденциальности в
                  любой момент по своему усмотрению.
                </Paragraph>
                <Paragraph>
                  <strong>8.2.</strong> Изменения и дополнения вступают в силу
                  с момента размещения на Сайте Политики конфиденциальности с
                  изменениями и дополнениями.
                </Paragraph>
              </section>

              {/* Bottom spacer */}
              <div className="pb-8" />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

/* ── Sub-components ─────────────────────────────────── */

const bodyStyle: React.CSSProperties = {
  color: "#374151",
  fontSize: "0.9375rem",
  lineHeight: 1.7,
  marginBottom: "1rem",
};

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-5 flex items-baseline gap-3">
      <span
        style={{
          color: "#D1D5DB",
          fontSize: "0.75rem",
          fontWeight: 600,
          letterSpacing: "0.05em",
          flexShrink: 0,
          paddingTop: "2px",
        }}
      >
        {number}
      </span>
      <h2
        style={{
          color: "#111827",
          fontSize: "1.0625rem",
          fontWeight: 600,
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        color: "#374151",
        fontSize: "0.9375rem",
        lineHeight: 1.75,
        marginBottom: "0.875rem",
      }}
    >
      {children}
    </p>
  );
}

function DefinitionList({ children }: { children: React.ReactNode }) {
  return <dl className="mt-3 space-y-4">{children}</dl>;
}

function Definition({
  term,
  children,
}: {
  term: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        paddingLeft: "1rem",
        borderLeft: "2px solid #F3F4F6",
      }}
    >
      <dt
        style={{
          color: "#111827",
          fontSize: "0.9375rem",
          fontWeight: 500,
          lineHeight: 1.6,
          marginBottom: "0.2rem",
        }}
      >
        {term}
      </dt>
      <dd
        style={{
          color: "#6B7280",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        — {children}
      </dd>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      className="mt-1 mb-4"
      style={{ paddingLeft: "1rem", listStyle: "none" }}
    >
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            color: "#374151",
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            paddingLeft: "1.25rem",
            position: "relative",
            marginBottom: "0.25rem",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: 0,
              top: "0.65em",
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              backgroundColor: "#D1D5DB",
              flexShrink: 0,
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return (
    <div
      style={{
        height: "1px",
        backgroundColor: "#F3F4F6",
        margin: "0",
      }}
    />
  );
}
