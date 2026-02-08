import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Oluwadamifogore Daramola — ML/AI Engineer",
    template: "%s | Oluwadamifogore Daramola",
  },
  description:
    "ML Engineer building production AI agents for cybersecurity, fintech, and healthcare. Specializing in LLM alignment, multi-agent systems, and embedded AI.",
  openGraph: {
    title: "Oluwadamifogore Daramola — ML/AI Engineer",
    description:
      "ML Engineer building production AI agents for cybersecurity, fintech, and healthcare.",
    url: "https://engineer-d.github.io",
    siteName: "Oluwadamifogore Daramola",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oluwadamifogore Daramola — ML/AI Engineer",
    description:
      "ML Engineer building production AI agents for cybersecurity, fintech, and healthcare.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
