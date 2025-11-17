
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { ThemeProvider } from "@/contexts/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vibe Finance Hub",
  description: "데이터로 회계를 단순하게, 재무를 자동으로.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
        style={{ background: 'var(--background)', color: 'var(--foreground)' }}
      >
        <ThemeProvider>
          <Navigation />
          <main className="min-h-screen w-full">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
