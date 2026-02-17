import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Leckerli_One } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-satoshi",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const leckerliOne = Leckerli_One({
  variable: "--font-leckerli",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pinpal.app"),
  title: "PinPal - Bowling League Management Made Simple",
  description: "The bowling league app built for secretaries who want to spend less time on paperwork and more time enjoying the game. Manage leagues, track scores, and calculate standings with ease.",
  keywords: ["bowling", "league management", "bowling secretary", "score tracking", "bowling app"],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/images/pinpal_logo.png",
    apple: "/images/pinpal_logo.png",
  },
  openGraph: {
    title: "PinPal - Bowling League Management Made Simple",
    description: "The bowling league app built for secretaries who want to spend less time on paperwork and more time enjoying the game.",
    url: "https://pinpal.app",
    siteName: "PinPal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PinPal - Bowling League Management Made Simple",
    description: "The bowling league app built for secretaries who want to spend less time on paperwork and more time enjoying the game.",
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
        className={`${inter.variable} ${jetbrainsMono.variable} ${leckerliOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
