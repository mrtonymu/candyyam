import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import SmoothScroll from "./components/SmoothScroll/SmoothScroll";
import FilmGrain from "./components/FilmGrain/FilmGrain";
import CustomCursor from "./components/CustomCursor/CustomCursor";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://candyyam.com'), // Replace with actual domain
  title: {
    default: "Candy 严悦心 | 灵芝健康引导师 - 用健康创造自由",
    template: "%s | Candy 严悦心",
  },
  description: "和更多人一起，用健康创造自由与自信。专注于灵芝健康引导，从面瘫走回健康，用真诚陪伴您的疗愈之旅。",
  keywords: [
    "Candy",
    "严悦心",
    "灵芝",
    "健康引导师",
    "自愈",
    "养生",
    "心理调适",
    "面瘫康复",
    "Malaysia Health Guide",
    "Lingzhi Expert",
    "Wellness Coach",
    "Organic Health",
  ],
  authors: [{ name: "Candy 严悦心" }],
  creator: "Candy 严悦心",
  publisher: "Candy 严悦心",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: ["en_US", "ms_MY"],
    url: "https://candyyam.com",
    siteName: "Candy 严悦心 | 灵芝健康引导师",
    title: "Candy 严悦心 | 灵芝健康引导师",
    description: "从面瘫走回健康，用真诚陪伴每个想改变的人。专注灵芝健康引导，创造自由与自信的疗愈之旅。",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Candy 严悦心 | 灵芝健康引导师",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Candy 严悦心 | 灵芝健康引导师",
    description: "从面瘫走回健康，用真诚陪伴每个想改变的人。",
    images: ["/opengraph-image"],
    creator: "@candyyam", // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`${lora.variable} ${raleway.variable} font-sans antialiased bg-cream text-forest selection:bg-forest/10 selection:text-forest`} style={{ cursor: 'none' }}>
        <SmoothScroll />
        <FilmGrain />
        <CustomCursor />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
