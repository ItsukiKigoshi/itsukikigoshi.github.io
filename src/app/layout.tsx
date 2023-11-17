import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itsuki Kigoshi",
  description: "This is the profile of Itsuki Kigoshi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* Add Footer w/ 特定商取引法に基づく表示 & link to the source */}
    </html>
  );
}
