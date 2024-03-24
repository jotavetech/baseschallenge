import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

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
      <body className={font.className}>
        <main className="bg-app-bg dark:bg-app-bg-dark ">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
