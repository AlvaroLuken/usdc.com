import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@common/components/Navbar";

export const metadata: Metadata = {
  title: "USDC: powered by Circle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar />
      {children}
      </body>
    </html>
  );
}
