import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@common/components/Navbar";
import { AuthProvider } from "@common/auth/AuthProvider";
import { headers } from 'next/headers';

import { cookieToInitialState } from 'wagmi';

import { config } from '@common/config';
import { ContextProvider } from '@common/context';

const metadata = {
  title: "USDC: powered by Circle",
  name: 'USDC: powered by Circle',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <ContextProvider initialState={initialState}>
        <AuthProvider>
          <body>
            <Navbar />
            {children}
          </body>
        </AuthProvider>
      </ContextProvider>
    </html>
  );
}
