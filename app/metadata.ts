import { Metadata } from "next";

const metadata: Metadata = {
  title: "baseschallenge",
  manifest: "/manifest.json",
  description: "A numeric base conversion challenge.",
  icons: {
    apple: "/favicon.ico",
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  creator: "João Vitor Gugel (jotavetech)",
  openGraph: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://raw.githubusercontent.com/jotavetech/baseschallenge/main/public/assets/banner.png",
        alt: "baseschallenge website cover",
      },
    ],
    locale: "en",
    title: "baseschallenge",
    siteName: "baseschallenge",
    description: "Train your skills in numeric systems in a fun way.",
    type: "website",
    url: "https://baseschallenge.vercel.app",
  },
  publisher: "Jotavetech",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://raw.githubusercontent.com/jotavetech/baseschallenge/main/public/assets/banner.png",
        alt: "baseschallenge website cover",
      },
    ],
    card: "summary_large_image",
    title: "baseschallenge",
    description: "Train your skills in numeric systems in a fun way.",
    site: "@jotavetech",
    creator: "João Vitor Gugel (jotavetech)",
  },
};

export default metadata;
