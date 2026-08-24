import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Spotlight from "./components/Spotlight";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abdullah Alhodar | AI, Data & UI/UX Portfolio",
  description:
    "Abdullah Alhodar — Computer Science graduate specializing in AI, UI/UX design, and data analysis. Explore projects, skills, and ways to get in touch.",
  metadataBase: new URL("https://abdullah-alhodar.dev"),
  icons: {
    icon: "/img/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <div className="grain" />
        <Spotlight />
        {children}
      </body>
    </html>
  );
}
