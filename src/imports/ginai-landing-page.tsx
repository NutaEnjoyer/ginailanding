You are an expert frontend developer and UI/UX designer. 
Create a full landing page for GinAI — an AI solutions company. 
Use React + Tailwind CSS. The page must be pixel-perfect, 
modern, fully responsive (mobile-first). 
Output complete, working code in a single file.

═══════════════════════════════════════
DESIGN SYSTEM
═══════════════════════════════════════

Colors:
  --bg-primary: #0D0F14        (main page background)
  --bg-card: #161A24           (card backgrounds)
  --bg-card-hover: #1E2433     (card hover state)
  --accent: #7C3AED            (primary accent — violet)
  --accent-light: #A855F7      (hover state for accent)
  --accent-blue: #3B82F6       (secondary accent — blue, for ORBI)
  --text-primary: #F8FAFC      (main text)
  --text-secondary: #94A3B8    (secondary text / subtitles)
  --text-muted: #475569        (muted labels)
  --border: #1E2D3D            (card borders)
  --gradient-hero: linear-gradient(135deg, #0D0F14 0%, #1a1040 50%, #0D0F14 100%)

Typography:
  Font: 'Inter', sans-serif (import from Google Fonts)
  H1: 64px / font-weight 800 / line-height 1.1 / letter-spacing -0.02em
  H2: 42px / font-weight 700 / line-height 1.2 / letter-spacing -0.01em
  H3: 24px / font-weight 600 / line-height 1.3
  Body: 17px / font-weight 400 / line-height 1.65
  Caption: 14px / font-weight 500 / color var(--text-secondary)
  Mobile H1: 38px, Mobile H2: 28px

Shadows:
  --shadow-card: 0 4px 32px rgba(124, 58, 237, 0.10)
  --shadow-card-hover: 0 8px 48px rgba(124, 58, 237, 0.22)
  --shadow-blue: 0 4px 32px rgba(59, 130, 246, 0.12)
  --shadow-cta: 0 0 40px rgba(124, 58, 237, 0.35)

Borders: border-radius 16px for cards, 10px for buttons, 8px for chips
Spacing between sections: 120px desktop / 64px mobile
Container: max-width 1200px, centered, padding 0 24px

Buttons:
  Primary (filled): bg #7C3AED → hover #A855F7, text white, height 52px, 
    padding 0 32px, border-radius 10px, font-weight 600, font-size 16px,
    transition all 0.2s ease, box-shadow var(--shadow-cta) on hover
  Secondary (outlined): border 1.5px solid #7C3AED, text #A855F7, 
    bg transparent → hover bg rgba(124,58,237,0.1), same sizing
  Blue (for ORBI sections): bg #3B82F6 → hover #60A5FA, same sizing

═══════════════════════════════════════
SECTION 1 — HERO (first screen, full viewport height)
═══════════════════════════════════════

Background: gradient var(--gradient-hero) with a subtle 
radial glow in top-right corner: 
  radial-gradient(ellipse 800px 600px at 80% 20%, rgba(124,58,237,0.15), transparent)

Layout: centered column, max-width 800px, text-align center, 
vertically centered with padding-top 100px padding-bottom 80px.

Top badge (chip):
  Text: "ИИ-решения для бизнеса"
  Style: border 1px solid rgba(124,58,237,0.5), bg rgba(124,58,237,0.1),
  border-radius 100px, padding 6px 18px, font-size 13px, 
  color #A855F7, font-weight 500, margin-bottom 28px, display inline-block

H1 text (two lines):
  Line 1: "GinAI —" (color #F8FAFC)
  Line 2: "ИИ, которые работают" (color #F8FAFC)
  Line 3: "на ваш бизнес" (color #A855F7, italic style for this line only)

Subtitle (p tag, max-width 560px, centered, margin-top 24px):
  Text: "Разрабатываем готовые ИИ-продукты и кастомные решения, 
  которые помогают бизнесу зарабатывать больше и тратить меньше"
  Color: #94A3B8, font-size 18px

CTA buttons row (margin-top 40px, gap 16px, justify center, flex-wrap):
  Button 1 (Primary): "Смотреть продукты"
  Button 2 (Secondary): "Заказать разработку"

Client logos strip (margin-top 64px):
  Label above: "Нам доверяют" — color #475569, font-size 13px, 
  text-transform uppercase, letter-spacing 0.1em
  Below: a horizontal flex row of 5 placeholder boxes, each 
  120px × 36px, bg #1E2433, border-radius 8px, gap 24px, 
  opacity 0.6. Add caption text inside each: "Логотип клиента"
  color #475569, font-size 11px, text-align center.

═══════════════════════════════════════
SECTION 2 — TWO DIRECTIONS (two columns)
═══════════════════════════════════════

Section label (centered, margin-bottom 16px):
  "ДВА НАПРАВЛЕНИЯ" — color #7C3AED, font-size 12px, 
  font-weight 600, letter-spacing 0.15em, text-transform uppercase

H2 (centered, margin-bottom 56px):
  "Выберите то, что подходит вашему бизнесу"

Two cards side by side (grid 2 columns, gap 24px, 
on mobile stack to 1 column):

  Card Left — "Готовые продукты":
    bg: linear-gradient(135deg, #161A24 0%, #1a1535 100%)
    border: 1px solid rgba(124,58,237,0.25)
    border-radius: 20px
    padding: 40px
    box-shadow: var(--shadow-card)
    Top icon block: 56px × 56px square, bg rgba(124,58,237,0.15), 
      border-radius 12px, centered inside place a "🟣" or "⚡" emoji, font-size 28px
    H3 (margin-top 24px): "Готовые продукты"
    Subtitle (margin-top 8px, color #94A3B8): 
      "Решения без аналогов — запускаются быстро"
    List (margin-top 24px, list-style none, flex column, gap 12px):
      Each item: flex row, gap 12px, align-items flex-start
      Bullet: 20px circle, bg rgba(124,58,237,0.2), 
        inside "✓" symbol, color #A855F7, font-size 11px
      Items text (color #CBD5E1, font-size 15px):
        "HALO — ИИ для работы с клиентами"
        "ORBI — контроль доставок без ручного труда"
        "Быстрый запуск без долгой интеграции"
        "Готовая функциональность с первого дня"
    Bottom CTA link (margin-top 32px): 
      "Смотреть продукты →" color #A855F7, font-size 15px, 
      font-weight 600, no underline, hover underline

  Card Right — "Кастомная разработка":
    Same structure but accent color: #3B82F6 (blue) everywhere
    bg: linear-gradient(135deg, #161A24 0%, #0f1f35 100%)
    border: 1px solid rgba(59,130,246,0.25)
    box-shadow: var(--shadow-blue)
    Top icon: bg rgba(59,130,246,0.15), emoji "🔧" or "⚙️"
    H3: "Кастомная разработка"
    Subtitle: "Под задачи вашего бизнеса — с гарантией результата"
    List items:
      "Чат-боты и голосовые ИИ-агенты"
      "Аналитика данных и BI-дашборды"
      "Автоматизация бизнес-процессов"
      "Интеграция с 1С, Bitrix, amoCRM"
    Bottom CTA: "Обсудить задачу →" color #60A5FA

═══════════════════════════════════════
SECTION 3 — PRODUCT HALO (full-width section)
═══════════════════════════════════════

Section label: "ПРОДУКТ" — same chip style as Section 2 label, violet

H2 (centered, max-width 700px, margin auto, margin-bottom 16px):
  "HALO — ИИ, который полностью берёт на себя работу с клиентами"
  Span "HALO" inside H2: color #A855F7

Subtitle (centered, max-width 580px, color #94A3B8, margin-bottom 56px):
  "Омниканальная ИИ-система. Звонит, пишет, фиксирует, 
  интегрируется — без участия менеджера"

Main HALO card (bg #161A24, border 1px solid rgba(124,58,237,0.2), 
border-radius 24px, padding 56px, box-shadow var(--shadow-card)):

  Two-column layout inside card (gap 48px, on mobile stack):
  
    Left column (flex: 1.2):
      Large image placeholder:
        Width: 100%, aspect-ratio 4/3, bg #1E2433, border-radius 16px,
        border: 2px dashed #2D3748
        Centered text inside: "📸 Место для скриншота HALO" 
          color #475569, font-size 14px
        Below image: caption "Интерфейс системы HALO"
          color #475569, font-size 12px, margin-top 12px, text-align center

    Right column (flex: 1):
      Label: "Что умеет HALO" — color #7C3AED, font-size 12px, 
        font-weight 600, letter-spacing 0.12em, text-transform uppercase, 
        margin-bottom 24px

      Feature list (flex column, gap 20px):
        Each feature item: flex row, gap 16px, align-items flex-start
        Icon container: 44px × 44px, bg rgba(124,58,237,0.12), 
          border-radius 10px, flex-shrink 0, display flex, 
          align-items center, justify-content center
        
        Feature 1: icon "📞", title "Телефонные звонки", 
          desc "Разговаривает с клиентами по телефону вместо менеджера"
        Feature 2: icon "💬", title "Чаты и мессенджеры", 
          desc "Продолжает диалог в любых каналах — WhatsApp, Telegram, сайт"
        Feature 3: icon "🗃️", title "Работа с базой данных", 
          desc "Обращается к данным, находит нужную информацию мгновенно"
        Feature 4: icon "✅", title "Фиксация результата", 
          desc "Записывает итог каждого контакта в CRM автоматически"
        Feature 5: icon "🔗", title "Интеграции", 
          desc "1С, Bitrix24, amoCRM и другие — подключается без разработки"

        Title style: color #F8FAFC, font-size 16px, font-weight 600, 
          margin-bottom 4px
        Desc style: color #94A3B8, font-size 14px, line-height 1.5

      CTA button (margin-top 36px):
        Primary button full-width: "Узнать больше о HALO →"
        href: "https://halo-ai.ru/"
        target: "_blank"
        Below button: small text "Переход на сайт halo-ai.ru" 
          color #475569, font-size 12px, text-align center, margin-top 8px

═══════════════════════════════════════
SECTION 4 — PRODUCT ORBI (same structure, blue accent)
═══════════════════════════════════════

Section label: "ПРОДУКТ" — same chip style, but blue #3B82F6

H2 (centered):
  "ORBI — контроль доставок без ручного труда"
  Span "ORBI": color #60A5FA

Subtitle (centered, color #94A3B8):
  "Предиктивный мониторинг логистики. 
  Выявляем риски задержек до нарушения SLA"

Main ORBI card (bg #161A24, border 1px solid rgba(59,130,246,0.2),
border-radius 24px, padding 56px, box-shadow var(--shadow-blue)):

  Two-column layout (reverse order — features left, image right):
  
    Left column (features):
      Label: "Что делает ORBI" — color #3B82F6, same chip style

      Feature list (gap 20px):
        Each item structure same as HALO but icon container 
          bg rgba(59,130,246,0.12)
        
        Feature 1: icon "📦", title "Все ТК в одном окне", 
          desc "Единый дашборд для всех транспортных компаний и отправлений"
        Feature 2: icon "⚠️", title "Риск до нарушения SLA", 
          desc "Система предупреждает о задержке ДО того, как она случилась"
        Feature 3: icon "🤖", title "Автоконтроль перевозчиков", 
          desc "ORBI сам следит за ТК и отправляет уведомления при отклонениях"
        Feature 4: icon "💰", title "Претензии без менеджера", 
          desc "Автоматический расчёт и подача компенсационных претензий"

      CTA button (margin-top 36px):
        Blue Primary button full-width: "Попробовать ORBI →"
        href: "https://orbi-ai.ru/"
        target: "_blank"
        Below: "Переход на сайт orbi-ai.ru" — same small caption style

    Right column (image):
      Image placeholder same style as HALO but caption:
        "📸 Место для скриншота ORBI"

═══════════════════════════════════════
SECTION 5 — CUSTOM DEVELOPMENT
═══════════════════════════════════════

Full-width section, bg: subtle gradient 
  linear-gradient(180deg, #0D0F14 0%, #0f1525 50%, #0D0F14 100%)

Section label: "РАЗРАБОТКА ПОД ЗАКАЗ"

H2 (centered, max-width 650px):
  "Решение под ваш бизнес — с гарантией результата"

Subtitle (centered, color #94A3B8, max-width 540px):
  "Снимаем головную боль бизнеса. 
  Строим ИИ-экосистемы, которые работают"

Grid of 4 service cards (2×2, on mobile 1 column, gap 20px, margin-top 48px):

  Each card: bg #161A24, border 1px solid #1E2D3D, 
    border-radius 16px, padding 28px,
    transition all 0.25s ease
    hover: border-color rgba(124,58,237,0.4), 
      transform translateY(-4px), box-shadow var(--shadow-card)

  Card 1:
    Icon: "💬" in 48px icon block (violet bg)
    Title (H3): "Чат-боты и голосовые ИИ"
    Text: "Обрабатывают обращения клиентов 24/7. 
      Интегрируются в ваши каналы за недели, не месяцы"
  
  Card 2:
    Icon: "📊"
    Title: "Аналитика и BI-системы"
    Text: "Превращаем данные вашего бизнеса в 
      чёткие инсайты и управленческие решения"
  
  Card 3:
    Icon: "⚙️"
    Title: "Автоматизация процессов"
    Text: "Убираем ручной труд из рутинных операций. 
      Сотрудники фокусируются на важном"
  
  Card 4:
    Icon: "🔌"
    Title: "Интеграции и экосистемы"
    Text: "Связываем CRM, ERP, базы данных 
      в единую умную инфраструктуру"

CTA block (margin-top 56px, text-align center):
  H3: "Есть задача? Обсудим бесплатно" — color #F8FAFC
  Subtitle: "Опишите проблему — предложим решение за 24 часа" 
    color #94A3B8, margin-top 8px
  Primary Button (margin-top 24px): "Обсудить задачу"

═══════════════════════════════════════
SECTION 6 — CEO VIDEO (welcome video)
═══════════════════════════════════════

Section label: "ОТ РУКОВОДИТЕЛЯ"

H2 (centered): "Почему мы строим именно такие продукты"

Two-column layout (gap 48px, on mobile stack):

  Left — Video placeholder:
    Container: width 100%, aspect-ratio 16/9, bg #161A24, 
      border-radius 20px, border 2px dashed #2D3748,
      position relative, overflow hidden
    Centered inside:
      Play button circle: width 72px, height 72px, 
        bg rgba(124,58,237,0.9), border-radius 50%,
        display flex, align-items center, justify-content center
        Inside: right-pointing triangle ▶ color white, font-size 24px,
        margin-left 4px (visual optical correction)
      Box shadow on circle: 0 0 32px rgba(124,58,237,0.5)
      Below play button: text "▶ Приветственное видео"
        color #94A3B8, font-size 14px, margin-top 16px
      Small note below: "Видео будет добавлено позже"
        color #475569, font-size 12px, margin-top 8px

  Right — Text content:
    Quote mark (decorative): " large quote ", 
      color rgba(124,58,237,0.3), font-size 80px, 
      line-height 1, margin-bottom -16px
    Quote text (color #CBD5E1, font-size 18px, 
      line-height 1.7, font-style italic):
      "Мы строим не просто ИИ-инструменты — мы строим 
      конкурентные преимущества для нашего бизнеса. 
      Каждый продукт GinAI решает реальную боль предпринимателей."
    
    Author block (margin-top 32px, flex row, gap 16px, align-items center):
      Photo placeholder: 
        56px × 56px circle, bg #1E2433, 
        border: 2px solid rgba(124,58,237,0.4)
        Inside: "👤" emoji, centered, font-size 24px
        Caption: "Фото руководителя"
          color #475569, font-size 9px, text-align center
      Text column:
        Name: "Максим [Фамилия]" — color #F8FAFC, font-size 16px, 
          font-weight 600 (PLACEHOLDER — замените на реальное имя)
        Role: "Основатель GinAI" — color #94A3B8, font-size 14px
    
    Telegram link (margin-top 24px):
      Flex row, gap 10px, align-items center
      Telegram icon (circle 36px, bg rgba(59,130,246,0.15)):
        "✈" styled symbol inside, color #60A5FA, font-size 16px
      Text link: "@aimixwell" color #60A5FA, font-size 15px, 
        font-weight 500, href "https://t.me/aimixwell", target "_blank"

═══════════════════════════════════════
SECTION 7 — TEAM (team faces)
═══════════════════════════════════════

Section label: "КОМАНДА GINAI"

H2 (centered): "Люди, которые делают продукт"

Subtitle (centered, color #94A3B8):
  "Эксперты в области ИИ, разработки и бизнеса"

Team grid (5 cards, flex row, flex-wrap wrap, 
justify-content center, gap 24px, margin-top 48px):

  Each team card:
    Width: 200px (on mobile 140px)
    bg: #161A24
    border: 1px solid #1E2D3D
    border-radius: 20px
    padding: 28px 20px
    text-align: center
    transition: all 0.25s ease
    hover: border-color rgba(124,58,237,0.35), 
      transform translateY(-6px),
      box-shadow var(--shadow-card)
    
    Photo placeholder:
      Width: 96px, height 96px, border-radius 50%
      bg: linear-gradient(135deg, #1E2433, #2D3748)
      border: 2px solid rgba(124,58,237,0.3)
      margin: 0 auto 16px
      display flex, align-items center, justify-content center
      Text inside: "👤" font-size 36px
      Small label below circle: "Фото" 
        color #475569, font-size 10px
    
    Name: "Имя Фамилия" — color #F8FAFC, 
      font-size 15px, font-weight 600, margin-bottom 6px
      (5 placeholders: "Член команды 1", "Член команды 2", 
       "Член команды 3", "Член команды 4", "Член команды 5")
    
    Role: "Роль в команде" — color #94A3B8, 
      font-size 13px, line-height 1.4
      (5 placeholders: "ИИ-разработчик", "Продуктовый менеджер", 
       "Backend-инженер", "ML-инженер", "Дизайнер")

═══════════════════════════════════════
SECTION 8 — CLIENT RESULTS (social proof)
═══════════════════════════════════════

Section label: "РЕЗУЛЬТАТЫ КЛИЕНТОВ"

H2 (centered): "Реальные цифры, реальный бизнес"

Three case cards (grid 3 columns, gap 24px, on mobile 1 column):

  Each case card:
    bg: #161A24
    border-top: 3px solid #7C3AED (violet top border, like an accent line)
    border-left/right/bottom: 1px solid #1E2D3D
    border-radius: 0 0 16px 16px (flat top, rounded bottom due to top border)
    padding: 32px

    Industry chip (top): eg "Ритейл" — small chip,
      bg rgba(124,58,237,0.1), border 1px solid rgba(124,58,237,0.3),
      border-radius 100px, padding 4px 12px, font-size 12px, 
      color #A855F7, margin-bottom 20px, display inline-block

    Metric (big number): 
      font-size 52px, font-weight 800, color #A855F7,
      line-height 1, margin-bottom 8px

    Metric label: 
      color #F8FAFC, font-size 16px, font-weight 600, margin-bottom 12px

    Description:
      color #94A3B8, font-size 14px, line-height 1.6

    Company placeholder (bottom, margin-top 24px, 
    padding-top 20px, border-top 1px solid #1E2D3D):
      flex row, gap 12px, align-items center
      Logo box: 40px × 24px, bg #1E2433, border-radius 4px, 
        text inside "лого" color #475569, font-size 9px, text-align center
      Company name: "Название компании" color #475569, font-size 13px

  Card 1: chip "Продажи", metric "+47%", 
    label "рост конверсии в продажи",
    desc "После внедрения HALO менеджеры закрывают 
    вдвое больше сделок при том же трафике"

  Card 2: chip "Логистика", metric "−68%", 
    label "задержек по доставкам",
    desc "ORBI выявил риски по 340 отправлениям 
    в первый же месяц, вернул деньги по 12 претензиям"

  Card 3: chip "Автоматизация", metric "×3", 
    label "ускорение обработки заявок",
    desc "Кастомный ИИ-агент обрабатывает заявки 
    вместо 4 сотрудников, без ошибок и выходных"

═══════════════════════════════════════
SECTION 9 — SCHOOL (learning block)
═══════════════════════════════════════

Full-width section with distinctive bg:
  bg: linear-gradient(135deg, #0f0d1f 0%, #1a1040 100%)
  border-top: 1px solid rgba(124,58,237,0.2)
  border-bottom: 1px solid rgba(124,58,237,0.2)

Section label: "ОБУЧЕНИЕ"

Two-column layout (gap 56px, on mobile stack):

  Left — Text:
    H2: "GinAI School — обучаем работе с ИИ"
      Span "GinAI School": color #A855F7
    
    Subtitle (margin-top 16px, color #94A3B8, font-size 17px):
      "Подписывайтесь на наши каналы — делимся 
      кейсами, инструментами и инсайтами 
      о применении ИИ в бизнесе"
    
    Two channel buttons (flex column, gap 16px, margin-top 36px):
    
      Channel button 1 (Telegram):
        Full card-style button: 
        bg rgba(59,130,246,0.08), border 1px solid rgba(59,130,246,0.25),
        border-radius 14px, padding 20px 24px,
        flex row, gap 16px, align-items center,
        transition all 0.2s ease,
        hover: bg rgba(59,130,246,0.15), border-color rgba(59,130,246,0.5)
        href: "https://t.me/aimixwell" target "_blank"
        
        Icon block: 44px × 44px, bg rgba(59,130,246,0.15), 
          border-radius 10px, centered "✈" Telegram icon, 
          color #60A5FA, font-size 20px
        
        Text column:
          Title: "Telegram-канал" — color #F8FAFC, font-weight 600, font-size 15px
          Subtitle: "@aimixwell — ИИ для бизнеса" 
            color #94A3B8, font-size 13px, margin-top 2px
        
        Arrow: "→" color #60A5FA, margin-left auto, font-size 18px

      Channel button 2 (Max.ru):
        Same structure but:
        bg rgba(124,58,237,0.08), border rgba(124,58,237,0.25)
        hover: bg rgba(124,58,237,0.15)
        href: "https://max.ru/id263408896872_biz" target "_blank"
        
        Icon: "М" letter styled, bg rgba(124,58,237,0.15), 
          color #A855F7, font-weight 700, font-size 20px
        
        Text: Title "Max.ru канал", 
          Subtitle "GinAI на платформе Max.ru"
        Arrow: color #A855F7

  Right — Decorative visual:
    Large card with glow effect:
    bg rgba(124,58,237,0.05), border 1px solid rgba(124,58,237,0.15),
    border-radius 24px, padding 40px, text-align center,
    position relative, overflow hidden
    
    Background glow: pseudo-element, 
      width 300px, height 300px, border-radius 50%,
      bg radial-gradient(circle, rgba(124,58,237,0.15), transparent),
      position absolute, top -50px, right -50px
    
    Emoji decoration: "🎓" font-size 64px, margin-bottom 24px
    
    Stat row (three mini stats, flex row, justify center, gap 24px):
      Each: flex column, align center
        Number: color #A855F7, font-size 28px, font-weight 800
        Label: color #94A3B8, font-size 12px, text-align center, margin-top 4px
      
      Stat 1: "50+" / "видео и статей"
      Stat 2: "1000+" / "предпринимателей"  
      Stat 3: "2 канала" / "с контентом"

═══════════════════════════════════════
SECTION 10 — FAQ
═══════════════════════════════════════

Section label: "ВОПРОСЫ И ОТВЕТЫ"

H2 (centered, max-width 500px):
  "Отвечаем на частые вопросы"

FAQ accordion (max-width 760px, margin 0 auto, margin-top 48px):

  Each FAQ item:
    bg: #161A24
    border: 1px solid #1E2D3D
    border-radius: 14px
    margin-bottom: 12px
    overflow: hidden
    transition: all 0.25s ease

  Question row (padding 24px 28px, flex row, 
    justify-content space-between, align-items center, cursor pointer):
    Text: color #F8FAFC, font-size 16px, font-weight 500
    Toggle icon: "+" / "−", color #7C3AED, font-size 24px, 
      font-weight 300, flex-shrink 0

  Answer (padding 0 28px 24px, color #94A3B8, 
    font-size 15px, line-height 1.7):
    First item open by default, others closed.
    When open: border-color rgba(124,58,237,0.3)

  7 FAQ items:
    Q1: "Чем HALO отличается от обычного чат-бота?"
    A1: "HALO — это полноценная омниканальная система, а не просто бот. 
    Она совершает реальные звонки голосом, ведёт диалог в чатах, 
    обращается к вашей базе данных и сама фиксирует результат в CRM. 
    Обычный чат-бот так не умеет."

    Q2: "Сколько стоит внедрение HALO или ORBI?"
    A2: "Стоимость зависит от масштаба и конфигурации. 
    Оставьте заявку — мы проведём бесплатную консультацию 
    и рассчитаем стоимость под вашу задачу."

    Q3: "Как быстро можно запустить ORBI?"
    A3: "ORBI разворачивается за 1–3 рабочих дня. 
    Подключаете ваши транспортные компании и 
    сразу видите все отправления в едином окне."

    Q4: "Вы делаете кастомные решения? Как это работает?"
    A4: "Да. Мы проводим брифинг, определяем задачу и KPI, 
    предлагаем архитектуру решения. Работаем с гарантией результата — 
    прописываем метрики в договоре."

    Q5: "Какие интеграции поддерживает HALO?"
    A5: "1С, Bitrix24, amoCRM, и другие CRM/ERP-системы. 
    Для нестандартных интеграций используем API."

    Q6: "Мы небольшая компания — нам подойдёт ORBI?"
    A6: "ORBI подходит для любого бизнеса, который 
    работает с доставками. Даже 20 отправлений в месяц 
    окупают систему за счёт возвращённых компенсаций."

    Q7: "Как начать работу с GinAI?"
    A7: "Просто оставьте заявку в форме ниже или напишите 
    нам в Telegram. Мы ответим в течение часа 
    в рабочее время и назначим бесплатную встречу."

═══════════════════════════════════════
SECTION 11 — FINAL CTA
═══════════════════════════════════════

Full-width section:
  bg: linear-gradient(135deg, #1a1040 0%, #0D0F14 100%)
  border-top: 1px solid rgba(124,58,237,0.25)
  padding: 100px 24px
  text-align: center
  position: relative
  overflow: hidden

Background decorative glow (position absolute, pointer-events none):
  Two circles:
  Circle 1: 500px × 500px, bg radial-gradient(circle, rgba(124,58,237,0.12), transparent),
    top -100px, left 50%, transform translateX(-50%)
  Circle 2: 300px × 300px, bg radial-gradient(circle, rgba(59,130,246,0.08), transparent),
    bottom -80px, right 10%

Content (position relative, z-index 1):
  H2 (font-size 48px on desktop, 32px mobile, max-width 600px, margin 0 auto):
    "Готовы автоматизировать бизнес?"
  
  Subtitle (margin-top 16px, color #94A3B8, font-size 18px, max-width 480px, margin auto):
    "Оставьте заявку — мы свяжемся в течение часа 
    и предложим решение под вашу задачу"

  Form (margin-top 40px, max-width 480px, margin-left auto, margin-right auto):
    bg: rgba(22,26,36,0.8)
    backdrop-filter: blur(12px)
    border: 1px solid rgba(124,58,237,0.25)
    border-radius: 20px
    padding: 36px
    
    Input 1:
      Placeholder: "Ваше имя"
      Style: width 100%, bg #0D0F14, border 1px solid #1E2D3D, 
        border-radius 10px, padding 14px 18px, color #F8FAFC,
        font-size 15px, outline none, margin-bottom 12px
        focus: border-color #7C3AED, box-shadow 0 0 0 3px rgba(124,58,237,0.15)
    
    Input 2:
      Placeholder: "Телефон или Telegram"
      Same style, margin-bottom 12px
    
    Input 3 (select/input):
      Placeholder: "Что вас интересует?"
      Same style, margin-bottom 20px
    
    Submit Button:
      Text: "Получить консультацию бесплатно"
      Style: Primary button, width 100%, font-size 16px, height 54px
      box-shadow: var(--shadow-cta)
    
    Fine print below button:
      "Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности"
      color: #475569, font-size 12px, margin-top 12px, text-align center

  Telegram alternative (margin-top 28px):
    Text: "Или напишите сразу в Telegram:" color #94A3B8, font-size 14px
    Link: "@aimixwell" — color #60A5FA, font-weight 600,
      href "https://t.me/aimixwell", target "_blank"

═══════════════════════════════════════
STICKY HEADER (fixed top navigation)
═══════════════════════════════════════

Position: fixed, top 0, width 100%, z-index 1000
bg: rgba(13,15,20,0.85), backdrop-filter blur(16px)
border-bottom: 1px solid rgba(255,255,255,0.06)
height: 68px
padding: 0 24px

Inner (max-width 1200px, margin 0 auto, 
  flex row, justify-content space-between, align-items center):

  Logo (left):
    Text: "GinAI" — color #F8FAFC, font-size 22px, font-weight 800
    Before text: small violet square 8px × 8px, bg #7C3AED, 
      border-radius 3px, margin-right 10px, display inline-block

  Nav links (center, flex row, gap 32px, 
    hide on mobile with hamburger instead):
    "Продукты" / "Разработка" / "Команда" / "Обучение"
    Each: color #94A3B8, font-size 14px, font-weight 500,
    hover: color #F8FAFC, transition 0.2s ease, no underline

  Right CTA:
    Small primary button: "Оставить заявку"
    Height: 40px, padding: 0 20px, font-size 14px

═══════════════════════════════════════
FOOTER
═══════════════════════════════════════

bg: #0A0C10
border-top: 1px solid #1E2D3D
padding: 56px 24px 32px

Inner grid (3 columns on desktop, 1 on mobile, max-width 1200px, margin auto):

  Column 1 — Brand:
    Logo "GinAI" same as header style, font-size 20px
    Below (margin-top 12px, color #475569, font-size 14px, 
      line-height 1.6, max-width 240px):
      "ИИ-решения для бизнеса. 
      Готовые продукты и кастомная разработка."
    Social links row (margin-top 20px, flex row, gap 12px):
      Telegram icon link: href "https://t.me/aimixwell" 
      Max.ru icon link: href "https://max.ru/id263408896872_biz"
      Each: 36px × 36px circle, bg #161A24, 
        border 1px solid #1E2D3D, flex center,
        hover: border-color #7C3AED

  Column 2 — Products:
    Label: "Продукты" — color #F8FAFC, font-size 14px, 
      font-weight 600, margin-bottom 16px
    Links (flex column, gap 10px):
      "HALO" → href "https://halo-ai.ru/" target "_blank"
      "ORBI" → href "https://orbi-ai.ru/" target "_blank"
      "Кастомная разработка" → href "#"
    Each link: color #94A3B8, font-size 14px, 
      hover: color #F8FAFC, no underline

  Column 3 — Contact:
    Label: "Связаться" — same style
    Items (flex column, gap 10px, color #94A3B8, font-size 14px):
      "Telegram: @aimixwell" → href "https://t.me/aimixwell"
      "Max.ru канал" → href "https://max.ru/id263408896872_biz"
      "halo-ai.ru" → href "https://halo-ai.ru/" target "_blank"
      "orbi-ai.ru" → href "https://orbi-ai.ru/" target "_blank"

Bottom bar (margin-top 48px, padding-top 24px, 
  border-top 1px solid #1E2D3D,
  flex row, justify-content space-between, flex-wrap wrap, gap 12px):
  Left: "© 2026 GinAI. Все права защищены" 
    color #475569, font-size 13px
  Right: "Политика конфиденциальности" 
    color #475569, font-size 13px, hover color #94A3B8

═══════════════════════════════════════
RESPONSIVE RULES
═══════════════════════════════════════

Breakpoint mobile: max-width 768px
- All multi-column grids → 1 column
- H1: 38px, H2: 28px, H3: 20px
- Section padding: 64px 20px
- Hero padding-top: 100px (for sticky header)
- Buttons: full-width where they are solo CTA
- Team grid: 2 columns (flex-wrap)
- Nav links: hidden, show hamburger menu icon

═══════════════════════════════════════
INTERACTIONS
═══════════════════════════════════════

- Smooth scroll for anchor nav links (scroll-behavior: smooth)
- FAQ accordion: toggle open/close on click, animate height
- Cards: hover lift (translateY -4px to -6px) + shadow change
- All links with href open correctly (external links in new tab)
- Form inputs: focus ring with violet glow
- Buttons: scale(0.98) on active/click

═══════════════════════════════════════
IMPORTANT NOTES
═══════════════════════════════════════

1. All placeholder images/photos have dashed border containers 
   with descriptive centered labels — they will be replaced later
2. All external links must use target="_blank" rel="noopener noreferrer"
3. Use semantic HTML: header, main, section, footer, nav, h1-h3, p, ul
4. No external image dependencies — only CSS and emojis as decorations
5. Import Inter font from Google Fonts in the <head>
6. The page must look polished even with placeholder content
7. Section IDs for nav anchors: 
   #products, #development, #team, #school, #faq, #contact


Apply the following updates and additions to the landing page above:

═══════════════════════════════════════
‼️ ВАЖНОЕ ОБНОВЛЕНИЕ ОБЩЕЙ КОНЦЕПЦИИ
═══════════════════════════════════════

После просмотра лендинга у посетителя должно сложиться 
чёткое трёхуровневое впечатление:
  1. «У них есть готовые AI-продукты» → HALO + ORBI
  2. «Они делают сложные AI-системы под заказ» → кастомная разработка
  3. «И они ещё обучают тех, кто это внедряет» → GINAI Academy
Итог в голове: «Это серьёзная компания»

Эту логику отражает порядок секций:
  Hero → Два направления → HALO → ORBI → 
  Кастомная разработка → Кейсы клиентов → 
  CEO видео → Команда → GINAI Academy (академия) → 
  Почему мы учим (смысловой блок) → School-каналы → FAQ → CTA

═══════════════════════════════════════
ОБНОВЛЕНИЕ SECTION 8 — CLIENT RESULTS
(заменяет предыдущую версию Section 8)
═══════════════════════════════════════

Section label: "КЕЙСЫ И РЕЗУЛЬТАТЫ"

H2 (centered, max-width 640px):
  "Реальные цифры от реальных компаний"

Subtitle (centered, color #94A3B8, margin-bottom 16px):
  "Внедряем — и замеряем результат. 
  Каждый кейс подкреплён цифрами"

CLIENT LOGOS STRIP (margin-bottom 56px):
  Label: "НАМ ДОВЕРЯЮТ" — color #475569, font-size 12px, 
    font-weight 600, letter-spacing 0.15em, 
    text-transform uppercase, text-align center, margin-bottom 20px
  
  Horizontal flex row (justify-content center, 
    flex-wrap wrap, gap 16px, align-items center):
    8 logo placeholder cards, each:
      width: 130px, height: 44px
      bg: #161A24
      border: 1px solid #1E2D3D
      border-radius: 10px
      display: flex, align-items center, justify-content center
      text inside: "Клиент" color #2D3748, font-size 11px
      hover: border-color rgba(124,58,237,0.3), 
        opacity change 0.6 → 1.0
    Note: these are placeholders for real client logos

THREE CASE CARDS (grid 3 columns, gap 24px, on mobile 1 column):

  Each case card:
    bg: #161A24
    border-top: 3px solid #7C3AED
    border-left/right/bottom: 1px solid #1E2D3D
    border-radius: 0 0 16px 16px
    padding: 32px
    transition: all 0.25s ease
    hover: transform translateY(-4px), box-shadow var(--shadow-card)

  Card 1: chip "Продажи", metric "+47%", 
    label "рост конверсии в продажи",
    desc "После внедрения HALO менеджеры закрывают 
    вдвое больше сделок при том же трафике",
    company placeholder: "Ритейл-компания"

  Card 2: chip "Логистика", metric "−68%", 
    label "задержек по доставкам",
    desc "ORBI выявил риски по 340 отправлениям 
    в первый месяц, вернул деньги по 12 претензиям",
    company placeholder: "Логистический оператор"

  Card 3: chip "Автоматизация", metric "×3", 
    label "ускорение обработки заявок",
    desc "Кастомный ИИ-агент обрабатывает заявки 
    вместо 4 сотрудников — без ошибок и выходных",
    company placeholder: "E-commerce"

  Chip style: bg rgba(124,58,237,0.1), 
    border 1px solid rgba(124,58,237,0.3),
    border-radius 100px, padding 4px 12px, 
    font-size 12px, color #A855F7, margin-bottom 20px

  Metric number: font-size 52px, font-weight 800, 
    color #A855F7, line-height 1, margin-bottom 8px

  Metric label: color #F8FAFC, font-size 16px, 
    font-weight 600, margin-bottom 12px

  Description: color #94A3B8, font-size 14px, 
    line-height 1.6, margin-bottom 20px

  Company placeholder row (padding-top 16px, 
    border-top 1px solid #1E2D3D,
    flex row, gap 10px, align-items center):
    Logo box: 40px × 24px, bg #1E2433, border-radius 4px,
      text "лого" color #475569, font-size 9px, text-align center
    Name: color #475569, font-size 13px

PHOTO GALLERY ROW (margin-top 56px):
  Label (centered, margin-bottom 24px): 
    "КАК МЫ РАБОТАЕМ" — same uppercase label style

  Horizontal strip of 4 photo placeholders (grid 4 columns, 
    gap 16px, on mobile 2 columns):
    Each placeholder:
      aspect-ratio: 4/3
      bg: linear-gradient(135deg, #161A24, #1E2433)
      border: 2px dashed #2D3748
      border-radius: 16px
      display: flex, flex-direction column, 
        align-items center, justify-content center, gap 8px
      
      Emoji inside: "📸" font-size 28px
      Text: "Фото команды за работой" 
        color #475569, font-size 12px, text-align center
      Small note: "Будет добавлено" 
        color #2D3748, font-size 10px

═══════════════════════════════════════
NEW SECTION A — GINAI ACADEMY (главный блок)
Вставить ПОСЛЕ Section 8 (кейсы) и ПЕРЕД CEO видео
═══════════════════════════════════════

Full-width section with distinctive premium bg:
  bg: linear-gradient(180deg, #0D0F14 0%, #0f0d1f 40%, #0D0F14 100%)
  position: relative, overflow: hidden

Decorative background element (position absolute, 
  pointer-events none, z-index 0):
  Large circle: width 800px, height 800px,
    bg radial-gradient(circle, rgba(124,58,237,0.07), transparent),
    top -200px, right -200px, border-radius 50%

Content (position relative, z-index 1):

TOP BADGE (centered):
  Chip text: "GINAI ACADEMY"
  Style: bg rgba(124,58,237,0.15), 
    border 1.5px solid rgba(124,58,237,0.5),
    border-radius 100px, padding 8px 24px,
    font-size 13px, font-weight 700, color #C084FC,
    letter-spacing 0.08em, text-transform uppercase,
    display inline-block, margin-bottom 24px

H2 (centered, max-width 760px, font-size 44px on desktop,
  28px on mobile):
  "Мы готовим AI-инженеров, которые"
  Line 2: "внедряют ИИ в бизнес"
  Span line 2: color #A855F7

Subtitle (centered, max-width 600px, color #94A3B8, 
  font-size 18px, margin-top 20px, margin-bottom 56px):
  "Обучаем не теории — практической работе 
  с AI-продуктами, экосистемами и реальными бизнес-задачами"

THREE FORMAT CARDS (grid 3 columns, gap 20px, 
  margin-bottom 56px, on mobile 1 column):

  Each format card:
    bg: #161A24
    border: 1.5px solid rgba(124,58,237,0.2)
    border-radius: 20px
    padding: 36px 28px
    transition: all 0.3s ease
    hover: border-color rgba(124,58,237,0.5),
      transform translateY(-6px),
      box-shadow: 0 12px 48px rgba(124,58,237,0.18)

    Number badge (top-left inline):
      "01" / "02" / "03"
      Style: font-size 12px, font-weight 700, color rgba(124,58,237,0.5),
        letter-spacing 0.1em, margin-bottom 20px, display block

    Icon block: 52px × 52px, bg rgba(124,58,237,0.12), 
      border-radius 12px, display flex, align-items center, 
      justify-content center, margin-bottom 20px

    H3: color #F8FAFC, font-size 20px, font-weight 700, 
      margin-bottom 12px

    Description: color #94A3B8, font-size 14px, 
      line-height 1.65, margin-bottom 24px

    Tag chips row (flex row, flex-wrap wrap, gap 8px):
      Each tag: bg rgba(124,58,237,0.08), 
        border 1px solid rgba(124,58,237,0.2),
        border-radius 100px, padding 4px 12px,
        font-size 12px, color #A855F7

  Card 1 — "AI-инженер":
    icon: "⚡"
    H3: "AI-инженер"
    desc: "Полный курс подготовки специалиста, 
    который умеет строить и внедрять AI-решения 
    в реальный бизнес — от архитектуры до запуска"
    tags: "Реальные проекты", "HALO & ORBI", "Практика"

  Card 2 — "AI для бизнеса":
    icon: "📈"
    H3: "AI для бизнеса"
    desc: "Для предпринимателей и менеджеров. 
    Как применять AI-инструменты прямо сейчас, 
    чтобы сократить расходы и увеличить выручку"
    tags: "Без кода", "Кейсы", "Инструменты"

  Card 3 — "AI для команд":
    icon: "🏢"
    H3: "AI для команд и компаний"
    desc: "Подготовка внутренних AI-специалистов. 
    Трансформируем сотрудников в экспертов, 
    которые автоматизируют процессы изнутри"
    tags: "Корпоратив", "Сертификат", "Под ключ"

STUDENT FLOW BLOCK (margin-top 0, margin-bottom 56px):
  Label (centered): "ПУТЬ ВЫПУСКНИКА" — uppercase chip style

  Horizontal steps flow (flex row, align-items center, 
    justify-content center, flex-wrap wrap, gap 0,
    max-width 900px, margin 32px auto 0):

  5 steps connected by arrows:

    Each step node:
      flex column, align-items center, text-align center,
      width: 160px (on mobile 130px)
      
      Circle: width 64px, height 64px, border-radius 50%,
        bg rgba(124,58,237,0.1),
        border: 2px solid rgba(124,58,237,0.3),
        display flex, align-items center, justify-content center,
        font-size 28px (emoji inside)
        margin-bottom 12px
      
      Step label: color #94A3B8, font-size 13px, 
        font-weight 500, line-height 1.4,
        max-width 130px

    Arrow between steps: 
      "→" color rgba(124,58,237,0.4), font-size 24px,
      margin-top -36px (aligned to circle center),
      flex-shrink 0
      Hide arrows on mobile

    Step 1: emoji "📚", label "Проходишь обучение"
    Arrow →
    Step 2: emoji "🛠️", label "Работаешь на реальных проектах"
    Arrow →
    Step 3: emoji "🤖", label "Внедряешь HALO / ORBI / кастом"
    Arrow →
    Step 4: emoji "📊", label "Получаешь результат в цифрах"
    Arrow →
    Step 5: emoji "🏆", label "AI-специалист с кейсами"

CTA BUTTONS ROW (flex row, gap 16px, justify-content center,
  flex-wrap wrap, margin-top 48px):

  Button 1 (Primary, large): 
    "Перейти в GINAI Academy →"
    height: 56px, padding 0 40px, font-size 17px
    (href: "#" — placeholder, заменить на реальную ссылку на академию)
  
  Button 2 (Secondary):
    "Узнать формат обучения"
    Same sizing

SOCIAL PROOF STRIP (margin-top 48px, 
  bg rgba(124,58,237,0.05),
  border-top 1px solid rgba(124,58,237,0.1),
  border-bottom 1px solid rgba(124,58,237,0.1),
  padding 28px 0):

  Flex row (justify-content center, gap 48px, 
    flex-wrap wrap, max-width 700px, margin 0 auto):

  3 mini-stats:
    Each: flex column, align-items center, gap 4px

    Stat 1:
      Number: "200+" — color #A855F7, font-size 36px, 
        font-weight 800, line-height 1
      Label: "выпускников" — color #94A3B8, font-size 14px

    Stat 2:
      Number: "3" — same style
      Label: "формата обучения"

    Stat 3:
      Number: "100%" — same style
      Label: "практика на реальных кейсах"

  Dividers between stats: 
    1px solid rgba(255,255,255,0.06), height 40px, 
    display on desktop only

═══════════════════════════════════════
NEW SECTION B — WHY WE TEACH
(смысловой блок доверия)
Вставить СРАЗУ ПОСЛЕ Section A (академия)
═══════════════════════════════════════

Compact section (padding: 80px 24px):
bg: #0D0F14 (standard dark)

Two-column layout (max-width 1000px, margin 0 auto,
  gap 64px, align-items center, on mobile stack):

  Left column (flex: 1):
    Section label: "ПОЧЕМУ МЫ УЧИМ"
    
    H2 (font-size 36px, margin-top 16px, max-width 420px):
      "Мы обучаем, потому что"
      Line 2: "понимаем ИИ изнутри"

    Three statement blocks (flex column, gap 28px, margin-top 36px):
      Each block: flex row, gap 16px, align-items flex-start

      Icon: 40px × 40px, bg rgba(124,58,237,0.1), 
        border-radius 10px, flex-shrink 0,
        display flex, align-items center, 
        justify-content center, font-size 20px

      Text column:
        Title: color #F8FAFC, font-size 16px, 
          font-weight 600, margin-bottom 6px
        Body: color #94A3B8, font-size 14px, 
          line-height 1.6

      Statement 1: 
        icon "🔬", 
        title "Продукты создаём сами",
        body "HALO и ORBI — это наши собственные 
        решения, не перепродажа. Мы знаем каждый 
        болт изнутри"

      Statement 2:
        icon "🎯",
        title "Учим тому, что работает",
        body "Каждый модуль Academy построен 
        на реальных кейсах внедрения — 
        не на теоретических моделях"

      Statement 3:
        icon "🔄",
        title "Замкнутый цикл экспертизы",
        body "Наши выпускники внедряют ИИ в бизнес. 
        Это резко повышает доверие ко всем 
        направлениям GinAI"

  Right column (flex: 1):
    Large quote card:
      bg: linear-gradient(135deg, #161A24 0%, #1a1535 100%)
      border: 1px solid rgba(124,58,237,0.2)
      border-radius: 24px
      padding: 44px
      position: relative
      overflow: hidden

      Decorative quote symbol:
        " (open quote) — position absolute, 
        top 16px, right 24px,
        font-size 120px, line-height 1,
        color rgba(124,58,237,0.08),
        font-family Georgia, serif,
        pointer-events none

      Quote text (color #CBD5E1, font-size 18px, 
        font-style italic, line-height 1.75, 
        margin-bottom 28px):
        "Мы обучаем AI-инженеров, потому что понимаем 
        ИИ изнутри. Наши продукты и экосистемы 
        создаются теми, кто сам прошёл путь внедрения."

      Author row (flex row, gap 16px, align-items center):
        Photo placeholder: 
          52px × 52px, border-radius 50%,
          bg #1E2433,
          border: 2px solid rgba(124,58,237,0.4),
          display flex, align-items center, 
          justify-content center,
          "👤" emoji font-size 22px

        Author text:
          Name: color #F8FAFC, font-size 15px, 
            font-weight 600
            text: "Максим [Фамилия]" (placeholder)
          Role: color #94A3B8, font-size 13px, 
            margin-top 3px
            text: "Основатель GinAI"

      Bottom metric row (margin-top 28px, 
        padding-top 24px, border-top 1px solid #1E2D3D,
        flex row, gap 24px):
        
        Each micro-metric (flex column):
          Number: color #A855F7, font-size 24px, 
            font-weight 700
          Label: color #475569, font-size 12px, 
            margin-top 2px

        Metric 1: "3+" / "года опыта внедрений"
        Metric 2: "50+" / "AI-проектов"
        Metric 3: "2" / "продукта без аналогов"

═══════════════════════════════════════
Вот точечная правка для блока команды. Вставляй её как замену секции 7 во все предыдущие промпты:

text
═══════════════════════════════════════
SECTION 7 — TEAM 
═══════════════════════════════════════

Section label: "КОМАНДА GINAI"
  Style: color #7C3AED, font-size 12px, font-weight 600, 
    letter-spacing 0.15em, text-transform uppercase,
    text-align center, margin-bottom 16px

H2 (centered, margin-bottom 12px):
  "Люди, которые делают продукт"

Subtitle (centered, color #94A3B8, max-width 460px, 
  margin-bottom 48px):
  "Эксперты в области ИИ, разработки и бизнеса"

TEAM GRID:
  flex row, flex-wrap wrap, justify-content center,
  gap 24px, max-width 1100px, margin 0 auto

  Each team card:
    width: 180px (on mobile: calc 50% - 12px, max 2 per row)
    bg: #161A24
    border: 1px solid #1E2D3D
    border-radius: 20px
    padding: 28px 16px 24px
    text-align: center
    transition: all 0.25s ease
    hover:
      border-color: rgba(124,58,237,0.4)
      transform: translateY(-6px)
      box-shadow: 0 12px 40px rgba(124,58,237,0.14)

    PHOTO CIRCLE:
      Container: 
        width: 96px, height: 96px
        border-radius: 50%
        margin: 0 auto 16px
        overflow: hidden
        border: 2px solid rgba(124,58,237,0.25)
        bg: linear-gradient(135deg, #1E2433, #2D3748)
        display: flex, align-items: center, justify-content: center
      
      Inside (placeholder until real photo added):
        "👤" emoji, font-size: 38px
      
      NOTE: when real photo is added, it replaces the emoji
        with <img> tag, width: 100%, height: 100%, object-fit: cover

    NAME:
      color: #F8FAFC
      font-size: 15px
      font-weight: 600
      line-height: 1.3
      margin-bottom: 0
      
      Placeholders (will be replaced with real names):
        Card 1: Михаил Ляшенко, CEO, основатель GINAI
        Card 2: "Имя Отчество", Руководитель регионального офиса
        Card 3: "Имя Отчество", Программист
        Card 4: "Имя Отчество", Менеджер
        Card 5: "Имя Отчество", Партнер по развитию
	   Card 6: "Имя Отчество", Куратор направления GINAI Academy

  IMPORTANT: 
    — NO social media icons
    — NO subtitles, chips, or any other elements
    — Keep card compact and clean

  6 cards total, centered in row.
  On mobile: 2 cards per row (flex-wrap), last card centered.


═══════════════════════════════════════
ОБНОВЛЕНИЕ SECTION 9 — SCHOOL CHANNELS
(дополнение к предыдущей версии)
═══════════════════════════════════════

REPLACE the Section 9 entirely with this version:

Section label: "ОБУЧЕНИЕ И СООБЩЕСТВО"

H2 (centered):
  "GinAI School — подписывайтесь, учитесь, внедряйте"
  Span "GinAI School": color #A855F7

Subtitle (centered, color #94A3B8, max-width 520px):
  "Контент о реальном применении ИИ в бизнесе. 
  Кейсы, инструменты, разборы — бесплатно"

TWO-COLUMN LAYOUT (gap 48px, on mobile stack):

  Left — Content:
    Two channel cards (gap 16px):

      Channel card 1 (Telegram):
        bg: rgba(29,155,240,0.06)
        border: 1.5px solid rgba(29,155,240,0.2)
        border-radius: 16px, padding: 24px
        flex row, gap 16px, align-items center
        transition: all 0.2s ease
        hover: bg rgba(29,155,240,0.12), 
          border-color rgba(29,155,240,0.4),
          transform translateY(-2px)
        href: "https://t.me/aimixwell", target "_blank"

        Icon: 48px × 48px circle, 
          bg rgba(29,155,240,0.15), border-radius 12px,
          "✈" symbol, color #38BDF8, font-size 22px,
          display flex, align-items center, justify-content center

        Text column (flex: 1):
          Title: "Telegram-канал @aimixwell" 
            color #F8FAFC, font-weight 600, font-size 16px
          Subtitle: "ИИ для бизнеса — кейсы и инструменты"
            color #94A3B8, font-size 13px, margin-top 4px
          
          Stats row (flex row, gap 16px, margin-top 12px):
            Stat chip (bg rgba(29,155,240,0.1), 
              border-radius 100px, padding 3px 10px,
              font-size 12px, color #38BDF8):
              "📊 Кейсы"
            Second chip: "🛠 Инструменты"
            Third chip: "🆓 Бесплатно"

        Arrow: "→" color #38BDF8, font-size 20px, 
          flex-shrink 0

      Channel card 2 (Max.ru):
        Same structure with violet accent:
        bg: rgba(124,58,237,0.06)
        border: 1.5px solid rgba(124,58,237,0.2)
        hover: bg rgba(124,58,237,0.12)
        href: "https://max.ru/id263408896872_biz", target "_blank"

        Icon: "М" styled in 48px block,
          bg rgba(124,58,237,0.15), color #A855F7,
          font-size 22px, font-weight 700

        Title: "Max.ru — GinAI" color #F8FAFC
        Subtitle: "Официальный канал GinAI на платформе Max.ru"

        Stats row chips (violet):
          "📹 Видео", "💡 Разборы", "🏢 Бизнес"

    Small note below channels (margin-top 16px,
      text-align center, color #475569, font-size 13px):
      "Присоединились уже более 1000 предпринимателей"

  Right — Visual card:
    bg: linear-gradient(135deg, #0f0d1f, #1a1535)
    border: 1px solid rgba(124,58,237,0.2)
    border-radius: 24px, padding: 40px
    text-align: center, position relative, overflow hidden

    Glow: same radial gradient bg decoration as before

    Emoji: "🎓" font-size 56px, margin-bottom 20px

    H3: "Обучение + продукты + разработка"
      color #F8FAFC, font-size 20px, font-weight 700,
      margin-bottom 12px, max-width 220px, margin-left auto,
      margin-right auto, line-height 1.35

    Description (color #94A3B8, font-size 14px, 
      line-height 1.65, margin-bottom 28px):
      "Три направления GinAI усиливают друг друга. 
      Обучение подтверждает экспертизу продуктов. 
      Продукты доказывают качество обучения."

    Stats grid (3 items):
      Same style as before:
      "50+" / "материалов"
      "1000+" / "в сообществе"
      "2" / "канала"

    Bottom link to Academy (margin-top 24px):
      Primary button full-width: "Открыть Academy →"
      font-size 15px, height 48px

═══════════════════════════════════════
ОБНОВЛЕНИЕ SECTION 10 — FAQ
(добавить 2 новых вопроса про Academy)
═══════════════════════════════════════

ADD these 2 items to the existing 7 FAQ items (total 9):

  Q8: "Для кого GINAI Academy — нужно ли техническое образование?"
  A8: "Нет. У нас есть форматы как для разработчиков, 
  так и для предпринимателей без технического бэкграунда. 
  Главное — желание применять ИИ в реальных задачах."

  Q9: "Как Academy связана с продуктами HALO и ORBI?"
  A9: "Выпускники Academy работают с нашими продуктами 
  на практике. Вы не просто учитесь — вы сразу внедряете 
  реальные AI-системы в реальный бизнес. 
  Это главное отличие от обычных курсов."

═══════════════════════════════════════
ОБНОВЛЕНИЕ НАВИГАЦИИ (sticky header)
═══════════════════════════════════════

Update nav links to include Academy:
"Продукты" / "Разработка" / "Academy" / "Команда" / "FAQ"

Academy link: color #A855F7 (highlighted, 
  slightly brighter than other nav items to draw attention)
On hover: color #C084FC

═══════════════════════════════════════
SECTION IDs (обновлённые якоря)
═══════════════════════════════════════

#products    → Section HALO + ORBI
#development → Custom Dev section
#academy     → GINAI Academy section
#team        → Team section
#school      → School channels section
#faq         → FAQ section
#contact     → Final CTA form

═══════════════════════════════════════
ИТОГОВЫЙ ПОРЯДОК ВСЕХ СЕКЦИЙ
═══════════════════════════════════════

1. STICKY HEADER (nav с Academy)
2. SECTION 1 — Hero
3. SECTION 2 — Два направления
4. SECTION 3 — Продукт HALO
5. SECTION 4 — Продукт ORBI
6. SECTION 5 — Кастомная разработка
7. SECTION 8 — Кейсы + логотипы клиентов + фото
8. SECTION A — GINAI Academy (НОВЫЙ)
9. SECTION B — Почему мы учим (НОВЫЙ)
10. SECTION 6 — CEO видео
11. SECTION 7 — Команда + фото коллег
12. SECTION 9 — School-каналы
13. SECTION 10 — FAQ (9 вопросов)
14. SECTION 11 — Финальный CTA + форма
15. FOOTER

