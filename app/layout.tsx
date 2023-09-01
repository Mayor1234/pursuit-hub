import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

import GoogleAnalytics from '@/GoogleAnalytics';

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
      <body className={inter.className}>
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
