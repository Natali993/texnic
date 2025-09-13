import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

function getServiceName(service: string): string {
  const services: { [key: string]: string } = {
    'elektromontazh': 'Електромонтажні роботи',
    'laboratory': 'Електротехнічна лабораторія',
    'lightning': 'Блискавкозахист',
    'fireproof': 'Протипожежна обробка',
    'solar': 'Сонячні електростанції',
    'other': 'Інше'
  };
  return services[service] || service || 'Не вказано';
}

async function sendToTelegram(message: string): Promise<void> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    throw new Error('Telegram credentials not configured');
  }

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'HTML'
    }),
  });

  if (!response.ok) {
    throw new Error(`Telegram API error: ${response.status}`);
  }
}

async function sendEmail(name: string, phone: string, email: string, service: string, message: string): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY || "re_2HqbmmrB_Nxu5PZBNVBBdBpsTvRjibrj1"; // Replace with your Resend API key

  if (!resendApiKey) {
    console.log('⚠️ RESEND_API_KEY not configured, skipping email send');
    return;
  }

  const resend = new Resend(resendApiKey);

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #0891b2; margin-bottom: 20px; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
          🔔 Нова заявка з сайту
        </h2>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">👤 Ім'я:</strong>
          <span style="margin-left: 10px; color: #6b7280;">${name}</span>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">📞 Телефон:</strong>
          <span style="margin-left: 10px; color: #6b7280;">
            <a href="tel:${phone}" style="color: #0891b2; text-decoration: none;">${phone}</a>
          </span>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">📧 Email:</strong>
          <span style="margin-left: 10px; color: #6b7280;">
            ${email ? `<a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a>` : 'Не вказано'}
          </span>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">🔧 Послуга:</strong>
          <span style="margin-left: 10px; color: #6b7280;">${getServiceName(service)}</span>
        </div>

        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">💬 Повідомлення:</strong>
          <div style="margin-top: 10px; padding: 15px; background-color: #f3f4f6; border-radius: 5px; color: #6b7280;">
            ${message || 'Не вказано'}
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
          📅 Дата: ${new Date().toLocaleString('uk-UA')}<br>
          🌐 Джерело: Технік
        </div>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: '"Acme <onboarding@resend.dev>',
      to: ['texnik.ua@gmail.com'],
      subject: `🔔 Нова заявка від ${name}`,
      html: emailHtml,
    });

    console.log('✅ Email sent successfully via Resend');
  } catch (error) {
    console.error('❌ Failed to send email via Resend:', error);
    throw error;
  }
}

async function sendEmailViaGmail(name: string, phone: string, email: string, service: string, message: string): Promise<void> {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.log('⚠️ Gmail credentials not configured, skipping Gmail send');
    return;
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });

  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #0891b2; margin-bottom: 20px; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">
          🔔 Нова заявка з сайту
        </h2>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">👤 Ім'я:</strong>
          <span style="margin-left: 10px; color: #6b7280;">${name}</span>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">📞 Телефон:</strong>
          <span style="margin-left: 10px; color: #6b7280;">
            <a href="tel:${phone}" style="color: #0891b2; text-decoration: none;">${phone}</a>
          </span>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">📧 Email:</strong>
          <span style="margin-left: 10px; color: #6b7280;">
            ${email ? `<a href="mailto:${email}" style="color: #0891b2; text-decoration: none;">${email}</a>` : 'Не вказано'}
          </span>
        </div>

        <div style="margin-bottom: 15px;">
          <strong style="color: #374151;">🔧 Послуга:</strong>
          <span style="margin-left: 10px; color: #6b7280;">${getServiceName(service)}</span>
        </div>

        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">💬 Повідомлення:</strong>
          <div style="margin-top: 10px; padding: 15px; background-color: #f3f4f6; border-radius: 5px; color: #6b7280;">
            ${message || 'Не вказано'}
          </div>
        </div>

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af;">
          📅 Дата: ${new Date().toLocaleString('uk-UA')}<br>
          🌐 Джерело: Сайт srm-tomilovich.com
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Сайт СРМ Томилович" <${gmailUser}>`,
      to: 'texnik.ua@gmail.com',
      subject: `🔔 Нова заявка від ${name}`,
      html: emailHtml,
    });

    console.log('✅ Email sent successfully via Gmail');
  } catch (error) {
    console.error('❌ Failed to send email via Gmail:', error);
    throw error;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Ім\'я та телефон є обов\'язковими полями' },
        { status: 400 }
      );
    }

    // Create email content
    const emailContent = `
      Нова заявка з Технік:

      👤 Ім'я: ${name}
      📞 Телефон: ${phone}
      📧 Email: ${email || 'Не вказано'}
      🔧 Послуга: ${getServiceName(service)}
      💬 Повідомлення: ${message || 'Не вказано'}

      📅 Дата: ${new Date().toLocaleString('uk-UA')}
      🌐 Джерело: Сайт srm-tomilovich.com
    `.trim();

    // Log the email content for now
    console.log('📧 Email to send to texnik.ua@gmail.com:', emailContent);

    // Try to send email via Resend first, then Gmail as fallback
    let emailSent = false;

    try {
      await sendEmail(name, phone, email, service, message);
      emailSent = true;
    } catch (error) {
      console.error('❌ Failed to send email via Resend:', error);

      // Try Gmail as fallback
      try {
        await sendEmailViaGmail(name, phone, email, service, message);
        emailSent = true;
      } catch (gmailError) {
        console.error('❌ Failed to send email via Gmail:', gmailError);
      }
    }

    if (!emailSent) {
      console.log('⚠️ No email service configured or all failed');
    }

    // Try to send to Telegram if bot token is configured
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      try {
        await sendToTelegram(emailContent);
        console.log('✅ Message sent to Telegram');
      } catch (error) {
        console.error('❌ Failed to send to Telegram:', error);
      }
    }

    return NextResponse.json(
      {
        message: 'Заявка успішно відправлена! Ми зв\'яжемося з вами найближчим часом.',
        success: true
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending contact form:', error);
    return NextResponse.json(
      { error: 'Помилка відправки заявки. Спробуйте ще раз.' },
      { status: 500 }
    );
  }
}
