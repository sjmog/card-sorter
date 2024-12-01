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
  title: "TechMap | Sorter",
  description:
    "Interactive game where you learn about AI team roles by sorting tasks and technologies. Race against time to match deliverables with the right roles and discover how AI teams work.",
  keywords: [
    "TechMap",
    "AI Roles",
    "Team Structure",
    "Task Sorting",
    "Tech Stack",
    "Learning Game",
    "Data Engineer",
    "ML Engineer",
    "MLOps Engineer",
    "AI Engineer",
    "Prompt Engineer",
    "AI Ethics Specialist",
    "Educational Game",
    "AI Tools",
    "Tech Skills",
  ],
  authors: [{ name: "TechMap" }],
  openGraph: {
    title: "TechMap | Sorter",
    description:
      "Learn about AI team roles through an interactive sorting game. Match tasks and technologies to roles while racing against time!",
    type: "website",
    locale: "en_US",
    siteName: "TechMap | Sorter",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMap | Sorter",
    description:
      "Learn about AI team roles through an interactive sorting game. Match tasks and technologies to roles while racing against time!",
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
