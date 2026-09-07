import type { Metadata, Viewport } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const sans = Source_Sans_3({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const serif = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Jajan Yuks — Camilan Rumahan, Digoreng Tiap Hari",
  description: "Jajan Yuks: keripik, basreng, makaroni & camilan rumahan. Digoreng dadakan, kirim sore ini.",
  openGraph: { title: "Jajan Yuks", description: "Camilan rumahan, digoreng tiap hari", type: "website" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF7F2",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${sans.variable} ${serif.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-grain relative">
        <div className="relative z-10 flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
