import { consistentGradient } from '@/helpers/globalVar';

export const BlockData = [
  {
    id: 'zovnishnii-blyskaykozahyst',
    title: 'Зовнішній блискавкозахист',
    description: 'Влаштування зовнішньої системи блискавкозахисту (LPS), для захисту будівель від прямих ударів блискавки.',
    backgroundImage: '/flash-2.webp', // Path to your background image
    details: [
      "Системи перехоплення блискавки",
      "Стрижневі блискавкоприймачі різної висоти",
      "Тросові блискавкоприймачі для великих об'єктів",
      "Сітчасті блискавкоприймачі  для плоских дахів",
      "Системи доземних провідників",
      "Система земляного закінчення (заземлюючий пристрій)",
    ], gradient: consistentGradient, // Use the consistent gradient
  },
  {
    id: 'active-blyskaykozahyst',
    title: 'Активний зовнішній блискавкозахист',
    description: 'Влаштування зовнішньої системи блискавкозахисту (E.S.E.), для захисту будівель від прямих ударів блискавки.',
    backgroundImage: '/active-flesh-protection.webp', // Path to your background image
    details: [
      "Системи блискавкозахисту з випереджувальною стримерною емісією згідно СОУ NGA RAD 15158811.02:2021.",

    ], gradient: consistentGradient, // Use the consistent gradient
  },
  {
    id: 'docs-blyskaykozahyst',
    title: 'Технічна документація',
    description: 'Оформлення та видача технічної документації',
    backgroundImage: '/el-docs.webp', // Path to your background image
    details: [
      "Виготовлення проектної документації на систему блискавкозахисту",
      "Акт приймання системи блискавкозахисту",
      "Протокол вимірювання опору розтікання заземлюючих пристроїв",
      "Паспорт технічний на систему блискавкозахисту",
      "Акт на закриття прихованих робіт при монтажу системи блискавкозахисту"
    ], gradient: consistentGradient, // Use the consistent gradient
  },
];
