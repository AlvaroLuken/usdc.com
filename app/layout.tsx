"use client";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@common/components/Navbar";
import { AuthProvider } from "@common/auth/AuthProvider";

const metadata: Metadata = {
  title: "USDC: powered by Circle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Navbar />
          {children}
        </body>
      </AuthProvider>
    </html>
  );
}
