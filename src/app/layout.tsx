import type { Metadata } from "next";
import { Fraunces, Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stanley Aketch — Biochemist in the making",
  description:
    "Portfolio of Stanley Aketch, B.Sc. Biochemistry (Moi University). Clinical diagnostics, food analysis and health data — turning messy samples into clean, trustworthy numbers.",
  keywords: [
    "biochemistry",
    "clinical biochemistry",
    "nutrition",
    "food analysis",
    "public health",
    "data analysis",
    "quality control",
    "Kenya",
  ],
  authors: [{ name: "Stanley Aketch" }],
  openGraph: {
    title: "Stanley Aketch — Biochemist in the making",
    description:
      "Clinical diagnostics, food analysis and health data. I turn messy samples into clean, trustworthy numbers.",
    type: "profile",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fraunces.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased bg-paper text-ink`}
      >
        {children}
      </body>
    </html>
  );
}
