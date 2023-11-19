import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itsuki Kigoshi - Profile",
  description: "I'm not a robot.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta property="og:title" content="Itsuki Kigoshi - Profile" />
      <meta
        property="og:description"
        content={`Itsuki Kigoshi's Profile. I'm not a robot.`}
      />
      <meta property="og:image" content="/profile.jpg" />

      <body className={inter.className}>{children}</body>
    </html>
  );
}
