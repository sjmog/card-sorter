import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TechMap | AI Team Roles Explorer",
  description:
    "Interactive guide to understanding roles and responsibilities in modern AI teams. Explore how Data Engineers, ML Engineers, AI Engineers, and other specialists work together.",
  keywords: [
    "TechMap",
    "AI teams",
    "Machine Learning roles",
    "Data Engineer",
    "ML Engineer",
    "MLOps Engineer",
    "AI Engineer",
    "Prompt Engineer",
    "AI Ethics Specialist",
    "AI Product Manager",
    "AI team structure",
    "AI careers",
  ],
  authors: [{ name: "TechMap" }],
  openGraph: {
    title: "TechMap | AI Team Roles Explorer",
    description:
      "Interactive guide to understanding roles and responsibilities in modern AI teams",
    type: "website",
    locale: "en_US",
    siteName: "TechMap | AI Team Roles Explorer",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMap | AI Team Roles Explorer",
    description:
      "Interactive guide to understanding roles and responsibilities in modern AI teams",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
