import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

const font = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bases Challange",
  description: "A numeric base conversion challenge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={font.className}>{children}</body>
    </html>
  );
}
