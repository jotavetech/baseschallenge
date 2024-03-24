import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/header";
import Footer from "./components/footer";

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
    <html lang="en" className="">
      <body className={font.className}>
        <main className="bg-app-bg dark:bg-app-bg-dark ">
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
