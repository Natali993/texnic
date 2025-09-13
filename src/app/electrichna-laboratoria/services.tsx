export const services = [
  {
    id: "vymiriuvannia-oporu-izoliatsii",
    title: "Вимірювання опору ізоляції",
    description: "Професійні заміри опору ізоляції електричних мереж, кабелів та електрообладнання до 1000В та вище",
    // Add a specific background image for this service
    backgroundImage: '/electroteh-lab-vymiriuvannia-oporu-izoliatsii.webp',
    gradient: "bg-gradient-to-br from-cyan-500 to-teal-600",
    details: [
      "Вимірювання опору ізоляції кабельних ліній",
      "Перевірка ізоляції електродвигунів",
      "Контроль стану ізоляції трансформаторів",
      "Заміри опору ізоляції розподільних щитів"
    ]
  },
  {
    id: "vymiriuvannia-oporu-zazemlennia",
    title: "Вимірювання опору заземлення",
    description: "Точні заміри опору заземлюючих пристроїв та перевірка ефективності систем заземлення",
    // Add a specific background image for this service
    backgroundImage: '/opir-zazem.png',
    icon: (
      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    gradient: "bg-gradient-to-br from-teal-500 to-cyan-600",
    details: [
      "Вимірювання опору заземлення електроустановок",
      "Перевірка контуру заземлення будівель",
      "Контроль заземлення блискавкозахисту",
      "Заміри опору заземлення обладнання"
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
