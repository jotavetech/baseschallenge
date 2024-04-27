import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

import { ThemeProvider } from "./components/providers/theme-provider";

import customMetadata from "./metadata";

const font = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = customMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="bg-app-bg dark:bg-app-bg-dark">
            <Header />
            {children}
            <Analytics />
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
