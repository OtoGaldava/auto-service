import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto Emergency",
  icons: {
    icon: './autoEmergency.png'
  },
  description: "'Auto Emergency' მიზანია, რომ გზაზე დარჩენილი ავტომფლობელები არასოდეს დარჩნენ მარტო. ევაკუატორი, საბურავის შეცვლა, დაქოქვა, დიაგნოსტიკა და სხვა - ყველაფერი ერთ სივრცეში.",
  keywords: "Auto Emergency, avto daxmareba, evakuatori, manqana, diagnostika, saburavi, აუტო სერვისი, აუტო დახვმარება, საბურავი, ევაკუატორი, ავტო დახმარება, დიაგონსტიკა"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
