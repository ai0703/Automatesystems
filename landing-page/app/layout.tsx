import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Automate Systems | AI Automation Infrastructure for Revenue Teams",
  description:
    "AI Swarm handles the busywork behind revenue. Automate lead handling, enrichment, routing, CRM hygiene, and signal-based outreach so your team moves faster.",
  openGraph: {
    title: "Automate Systems | The Automation Layer Behind Modern Sales + Marketing",
    description:
      "We install AI Swarm, the automation infrastructure that eliminates ops busywork behind sales + marketing teams.",
    type: "website",
    url: "https://www.getautomatesystems.com",
  },
  icons: {
    icon: "/favicon.svg",
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
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
