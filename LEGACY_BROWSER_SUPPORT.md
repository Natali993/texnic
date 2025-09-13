# Підтримка старих браузерів

Цей проект включає систему fallback для підтримки старих браузерів, які не підтримують сучасні CSS властивості.

## Як це працює

### 1. Детекція браузера
Система автоматично визначає можливості браузера, перевіряючи підтримку:
- CSS Custom Properties (змінні)
- Flexbox
- CSS Grid
- CSS Gradients
- CSS Transforms
- Backdrop Filter

### 2. Автоматичне застосування fallback
Якщо браузер підтримує менше 4 з 6 сучасних функцій, він вважається "legacy" і автоматично отримує:
- Клас `legacy-browser` на `<html>`
- Клас `legacy-fallback` на `<body>`
- Спрощені стилі замість сучасних

### 3. Компоненти fallback
Для складних компонентів створені спрощені версії:
- `LegacyHeroSection` - спрощена версія головної секції
- `LegacySpecializedServicesSection` - спрощена версія секції послуг

## Файли системи

### Основні файли:
- `src/lib/browser-detection.ts` - TypeScript утиліти для детекції
- `src/components/BrowserDetection.tsx` - React компонент для ініціалізації
- `src/components/LegacyFallback.tsx` - компонент для умовного рендерингу
- `public/legacy-detection.js` - JavaScript скрипт для негайної детекції

### Стилі:
- `src/app/legacy-fallbacks.css` - fallback стилі для старих браузерів
- `src/app/globals.css` - оновлений з підтримкою legacy браузерів

### Legacy компоненти:
- `src/components/LegacyHeroSection.tsx`
- `src/components/LegacySpecializedServicesSection.tsx`

## Використання

### Автоматичне використання
Система працює автоматично після включення в `layout.tsx`:

```tsx
import BrowserDetection from "@/components/BrowserDetection";
import "./legacy-fallbacks.css";

// В компоненті:
<BrowserDetection />
```

### Умовний рендеринг компонентів
Використовуйте `LegacyFallback` для показу різного контенту:

```tsx
import { LegacyFallback } from '../components/LegacyFallback';
import { LegacyHeroSection } from '../components/LegacyHeroSection';

<LegacyFallback
  fallback={<LegacyHeroSection />}
>
  <HeroSection />
</LegacyFallback>
```

### Перевірка в коді
```tsx
import { useIsLegacyBrowser } from '../components/LegacyFallback';

const isLegacy = useIsLegacyBrowser();
if (isLegacy) {
  // Логіка для старих браузерів
}
```

## CSS класи для стилізації

### Приховування елементів:
```css
.modern-only {
  /* Приховано в legacy браузерах */
}

.legacy-only {
  /* Показано тільки в legacy браузерах */
}
```

### Fallback стилі:
```css
.legacy-fallback .your-class {
  /* Стилі для старих браузерів */
}
```

## Тестування

### Емуляція legacy браузера:
1. Відкрийте DevTools
2. Перейдіть в Console
3. Виконайте: `document.body.classList.add('legacy-fallback')`
4. Перезавантажте сторінку

### Браузери, які потребують fallback:
- Internet Explorer (всі версії)
- Chrome < 49
- Firefox < 31
- Safari < 9
- Edge < 16

## Переваги системи

1. **Автоматична детекція** - не потрібно вручну визначати браузери
2. **Прогресивне покращення** - сучасні браузери отримують повний функціонал
3. **Запобігання FOUC** - скрипт працює до рендерингу сторінки
4. **Гнучкість** - легко додавати нові fallback компоненти
5. **SEO-дружність** - контент доступний для всіх браузерів

## Додавання нових fallback компонентів

1. Створіть спрощену версію компонента (наприклад, `LegacyMyComponent.tsx`)
2. Використовуйте inline стилі замість сучасних CSS класів
3. Уникайте: CSS Grid, Flexbox, градієнтів, transforms
4. Використовуйте: `display: block/inline-block`, solid кольори, базові стилі
5. Обгорніть оригінальний компонент в `LegacyFallback`

Приклад:
```tsx
<LegacyFallback fallback={<LegacyMyComponent />}>
  <MyComponent />
</LegacyFallback>
```
