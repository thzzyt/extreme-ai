import type { Metadata } from "next";
import { Fustat, Onest } from "next/font/google";
import "./globals.css";

const fustat = Fustat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abacate Chat",
  description: "Assitente virtual da Abacate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fustat.className} antialiased`}>{children}</body>
    </html>
  );
}
