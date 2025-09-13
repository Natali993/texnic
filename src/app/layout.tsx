import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./legacy-fallbacks.css";
import SessionProvider from "@/components/SessionProvider";
import BrowserDetection from "@/components/BrowserDetection";
import BrowserTestPanel from "@/components/BrowserTestPanel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Технік",
  description: "Електромонтажні послуги",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        {/* Legacy browser detection script - runs immediately to prevent FOUC */}
        <script src="/legacy-detection.js" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BrowserDetection />
        <SessionProvider>
          {children}
        </SessionProvider>
        {process.env.NODE_ENV === 'development' && <BrowserTestPanel />}
      </body>
    </html>
  );
}
