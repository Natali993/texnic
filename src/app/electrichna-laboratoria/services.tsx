export const services = [
  {
    id: "vymiriuvannia-oporu-izoliatsii",
    title: "Вимірювання та випробування електричного устаткування електричних станцій та мереж, технологічного електрообладнання напругою понад 1000 В (до 10 кВ)",
    description: "",
    // Add a specific background image for this service
    backgroundImage: '/el-lab-incide-lab.webp',
        icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-cyan-500 to-teal-600",
    details: [
      "Силові трансформатори, автотрансформатори й масляні реактори",
      "Діелектрична міцність трансформаторного масла",
      "Вимірювальні трансформатори",
      "Комплектні розподільчі установки внутрішнього (КРУ) та зовнішнього  (КРУЗ) розташування",
      "Підвісні та опорні ізолятори, вводи і прохідні ізолятори",
      "Масляні та електромагнітні вимикачі, повітряні вимикачі та вимикачі навантаження",
      "Роз’єднувачі , короткозамикачі та відокремлювані",
      "Вентильні розрядники та обмежувачі перенапруги",
      "Силові кабельні лінії",
      "Заземлюючі пристрої "
    ]
  },
  {
    id: "vymiriuvannia-oporu-zazemlennia",
    title: "Вимірювання та випробування електроустановок напругою до 1 кВ",
    description: "",
    // Add a specific background image for this service
    backgroundImage: '/opir-zazem.png',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
    details: [
      "Вимірювання опору ізоляції електропроводки та кабельних ліній",
      "Випробування електропроводки підвищеною напругою",
      "Вимірювання опору заземлення електроустановок",
      "Перевірка контуру заземлення будівель",
      "Контроль заземлення блискавкозахисту",
      "Заміри опору заземлення обладнання",
      "Визначення питомого опору ґрунту",
      "Вимірювання повного опору петлі «Фаза-нуль»",
      "Перевірка правильності вибору апаратів захисту",
      "Перевірка спрацювання автоматичних вимикачів (струм та час спрацювання)",
      "Перевірка спрацювання ПЗВ (струм спрацювання, спрацювання «TEST»)"
    ]
  },
  {
    id: "vymiriuvannia-elecktro-zashysnykh-zasobiv",
    title: "Випробування електрозахисних засобів",
    description: "Точні заміри опору заземлюючих пристроїв та перевірка ефективності систем заземлення",
    // Add a specific background image for this service
    backgroundImage: '/electrotehnicna-lab.webp',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
    details: [
      "Покажчики напруги до та понад 1000 В",
      "Покажчики напруги для фазування",
      "Ізолювальні штанги",
      "Гумові діелектричні рукавички",
      "Діелектричні боти та діелектричні калоші",
      "Ізолювальний інструмент"
    ]
  },
];
