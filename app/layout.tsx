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
  title: "TechMap | Project Manager",
  description:
    "Interactive game where you play as a project manager, learning how different AI team roles work together by planning and organizing their deliverables.",
  keywords: [
    "TechMap",
    "Project Management",
    "AI Project Planning",
    "Team Coordination",
    "Project Timeline",
    "Gantt Chart",
    "Data Engineer",
    "ML Engineer",
    "MLOps Engineer",
    "AI Engineer",
    "Prompt Engineer",
    "AI Ethics Specialist",
    "AI Product Manager",
    "Project Dependencies",
    "Team Collaboration",
  ],
  authors: [{ name: "TechMap" }],
  openGraph: {
    title: "TechMap | Project Manager",
    description:
      "Learn AI project management through an interactive game where you coordinate team deliverables and manage timelines",
    type: "website",
    locale: "en_US",
    siteName: "TechMap | Project Manager",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechMap | Project Manager",
    description:
      "Learn AI project management through an interactive game where you coordinate team deliverables and manage timelines",
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
