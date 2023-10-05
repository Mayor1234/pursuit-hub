import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Script from 'next/script';
const inter = Inter({ subsets: ['latin'] });

import GoogleAnalytics from '@/GoogleAnalytics';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Pursuit Hubs',
  description: 'pursuit hubs Blog',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'production' && (
          <Script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7340391734743825"
            crossOrigin="anonymous"
            strategy="lazyOnload"
          />
        )}
      </head>
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Header />
        {children}
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
