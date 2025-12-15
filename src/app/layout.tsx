import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Wave Clothing | Premium Streetwear",
  description: "Oversized t-shirts, hoodies, and custom prints directly to you.",
};

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
