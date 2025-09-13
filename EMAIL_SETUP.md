# Налаштування відправки емейлів

## Поточний стан
✅ API роут створено: `/api/contact`
✅ Форма оновлена з обробкою статусів
✅ Email для отримання заявок: `texnik.ua@gmail.com`

## Варіанти безкоштовної відправки емейлів:

### 1. EmailJS (Рекомендовано - найпростіше)
**Переваги:** Безкоштовно до 200 емейлів/місяць, працює з фронтенду
**Налаштування:**
1. Зареєструйтеся на https://www.emailjs.com/
2. Створіть Email Service (Gmail)
3. Створіть Email Template
4. Отримайте Public Key, Service ID, Template ID
5. Додайте в `.env.local`:
```
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id  
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```

### 2. Resend (Альтернатива)
**Переваги:** 3000 безкоштовних емейлів/місяць
**Налаштування:**
1. Зареєструйтеся на https://resend.com/
2. Отримайте API ключ
3. Встановіть: `npm install resend`
4. Додайте в `.env.local`: `RESEND_API_KEY=your_api_key`

### 3. Nodemailer + Gmail App Password
**Переваги:** Повністю безкоштовно
**Налаштування:**
1. Увімкніть 2FA в Gmail
2. Створіть App Password
3. Встановіть: `npm install nodemailer`
4. Додайте в `.env.local`:
```
GMAIL_USER=texnik.ua@gmail.com
GMAIL_APP_PASSWORD=your_app_password
```

### 4. Telegram Bot (Найшвидше налаштування)
**Переваги:** Повністю безкоштовно, миттєві сповіщення
**Налаштування:**
1. Створіть бота через @BotFather в Telegram
2. Отримайте Bot Token
3. Додайте бота в групу або отримайте свій Chat ID
4. Додайте в `.env.local`:
```
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

## Поточна реалізація
✅ **Resend інтеграція готова!**
- Встановлено пакет `resend`
- Створено HTML шаблон емейлу
- Додано обробку помилок

## Швидке налаштування Resend (Рекомендовано):
1. Зареєструйтеся на https://resend.com/
2. Отримайте API ключ
3. Скопіюйте `.env.local.example` в `.env.local`
4. Додайте ваш API ключ:
```
RESEND_API_KEY=re_your_api_key_here
```
5. Перезапустіть сервер: `npm run dev`

**Важливо:** Для production потрібно налаштувати домен в Resend або змінити `from` адресу.

## Тестування
Форма готова! Після налаштування Resend емейли будуть відправлятися на `texnik.ua@gmail.com`.
