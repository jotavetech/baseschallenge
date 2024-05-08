import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "../components/providers/theme-provider";
import { Roboto_Mono } from "next/font/google";
import {
  NextIntlClientProvider,
  useMessages,
  useTranslations,
} from "next-intl";

const font = Roboto_Mono({ subsets: ["latin"] });

export default function PagesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  const messages = useMessages();

  return (
    <html lang={params.locale} suppressHydrationWarning>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4086113605281721"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={font.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <main className="bg-app-bg dark:bg-app-bg-dark">
            <NextIntlClientProvider locale={params.locale} messages={messages}>
              <Header />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
