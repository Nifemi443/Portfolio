import type { Metadata } from "next";
import { Geist_Mono, Instrument_Serif, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ayo4dev.com"),
  title: "Akinwumi Oluwanifemi John — Software Engineer",
  description:
    "Full-stack software engineer based in Lagos, Nigeria. Building AI-powered products and scalable web systems.",
  openGraph: {
    title: "Akinwumi Oluwanifemi John — Software Engineer",
    description:
      "Full-stack software engineer based in Lagos, Nigeria. Building AI-powered products and scalable web systems.",
    url: "https://ayo4dev.com",
    siteName: "ayo4dev",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Akinwumi Oluwanifemi John portfolio preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ayo4dev",
    title: "Akinwumi Oluwanifemi John — Software Engineer",
    description:
      "Full-stack software engineer based in Lagos, Nigeria. Building AI-powered products and scalable web systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${instrumentSerif.variable} ${syne.variable} ${geistMono.variable}`}
    >
      <body>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              const storedTheme = localStorage.getItem("theme");
              const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
              const theme = storedTheme || (prefersDark ? "dark" : "light");
              document.documentElement.dataset.theme = theme;
            } catch {}
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
