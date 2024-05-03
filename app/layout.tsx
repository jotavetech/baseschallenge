import type { Metadata } from "next";
import "./globals.css";


import customMetadata from "./metadata";


export const metadata: Metadata = customMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
