import { consistentGradient } from '../../helpers/globalVar';

export const serviceBlocks = [
  {
    id: "zovnishni-elektrichni-merezhi",
    title: "Зовнішні електричні мережі",
    description: "Проектування та монтаж зовнішніх електричних мереж різної складності та потужності.",
    details: [
      "Повітряні лінії електропередач 0,4-10 кВ",
      "Кабельні лінії різних напруг",
      "Монтаж вуличного освітлення",
      "Розподільні мережі населених пунктів",
      "Промислові електричні мережі"
    ],
    backgroundImage: '/external-electricai-networks.png',
    gradient: consistentGradient, // Use the consistent gradient
  },
  {
    id: "vstanovlennia-opor",
    title: "Встановлення опор",
    description: "Професійне встановлення опор електропередач різних типів та висот з використанням спецтехніки.",
    details: [
      "залізобетонні стійки СВ-9.5 – СВ-10.5",
      "Металеві опори різних конструкцій",
      "Анкерні та проміжні опори"
    ],
    backgroundImage: '/installation.png',
    gradient: consistentGradient, // Use the consistent gradient
  },
  {
    id: "kabel-v-zemliu",
    title: "Прокладання кабелю в землі",
    description: "Підземна прокладка кабельних ліній з дотриманням всіх норм безпеки та захисту.",
    details: [
      "Траншейна прокладка з піщаною подушкою",
      "Горизонтально-направлене буріння",
      "Захист кабелів плитами та трубами",
      "Прокладка в кабельних каналах"
    ],
    backgroundImage: '/undeground-cable.png',
    gradient: consistentGradient, // Use the consistent gradient
  },
  {
    id: "transformatorni-pidstantsii",
    title: "Трансформаторні підстанції",
    description: "Встановлення та підключення трансформаторних підстанцій різної потужності та типу.",
    details: [
      "КТП (комплектні трансформаторні підстанції)",
      "Стовпові трансформатори",
      "Підстанції 10/0,4 кВ",
      "Розподільні пункти РП-10"
    ],
    backgroundImage: '/electrical-substation.png',
    gradient: consistentGradient, // Use the consistent gradient
  },
  {
    id: "generatory",
    title: "Генератори",
    description: "Встановлення та підключення генераторних установок для резервного електропостачання.",
    details: [
      "Дизельні генератори різної потужності",
      "Газові генераторні установки",
      "Системи автоматичного запуску АВР",
      "Підключення до мережі будівлі"
    ],
    backgroundImage: '/generator.png',
    gradient: consistentGradient, // Use the consistent gradient
  },
  {
    id: "elektropostachannia-budivel",
    title: "Електропостачання будівель",
    description: "Комплексне електропостачання житлових, комерційних та промислових об'єктів.",
    details: [
      "Підключення до мереж електропостачання",
      "Встановлення вводно-розподільних пристроїв",
      "Монтаж внутрішніх електромереж",
      "Облікові щити та лічильники",
      "Системи резервного живлення"
    ],
    backgroundImage: '/electro-build.png',
    gradient: consistentGradient, // Use the consistent gradient
  },
];
