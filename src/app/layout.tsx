import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Era Engines | Developer-First SaaS Platform",
  description:
    "Era Engines is the all-in-one SaaS platform for engineering teams. CI/CD, monitoring, cloud infrastructure, and more — built for modern developers.",
  icons: {
    icon: "/800x800_white_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0b0b0d] text-white font-sans">
        {children}
      </body>
    </html>
  );
}
