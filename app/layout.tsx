import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashi Shekhar | Credit Risk Data Scientist",
  description:
    "Five years governing PD models across a $3B+ commercial lending portfolio. Extracting signals others overlook. Defending architecture in governance forums.",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Shashi Shekhar | Credit Risk Data Scientist",
    description:
      "Transforming raw financial signals into high-alpha, low-latency risk decisions.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashi Shekhar | Credit Risk Data Scientist",
    description:
      "Transforming raw financial signals into high-alpha, low-latency risk decisions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable} scroll-smooth antialiased`}
    >
      <body
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
        className="bg-[#0A0A0A] text-[#EDEDED] min-h-screen flex flex-col"
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
