import { Metadata } from "next";

const metadata: Metadata = {
  title: "Bases Challange",
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
        url: "https://github.com/jotavetech/bases-challange/raw/main/public/assets/banner.png",
        alt: "bases-challange website cover",
      },
    ],
    locale: "en",
    title: "Bases Challange",
    siteName: "Bases Challange",
    description: "Train your skills in numeric systems in a fun way.",
    type: "website",
    url: "https://bases-challange.vercel.app",
  },
  publisher: "Jotavetech",
  twitter: {
    images: [
      {
        width: 1920,
        height: 1080,
        url: "https://github.com/jotavetech/bases-challange/raw/main/public/assets/banner.png",
        alt: "bases-challange website cover",
      },
    ],
    card: "summary_large_image",
    title: "bases-challange",
    description: "Train your skills in numeric systems in a fun way.",
    site: "@jotavetech",
    creator: "João Vitor Gugel (jotavetech)",
  },
};

export default metadata;
