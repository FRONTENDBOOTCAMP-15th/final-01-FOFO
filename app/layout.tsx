import SplashScreen from '@/components/common/SplashScreen';
import './globals.css';
import { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '포포(FoFo)-for four',
  description: '네 발 달린 가족을 위해, AI가 골라주는 반려동물 중고 용품',
  openGraph: {
    title: '포포(FoFo)-for four',
    description: 'The React Framework for the Web',
    url: 'https://fofo-forfour.vercel.app',
    siteName: '포포(FoFo)',
    images: {
      url: `/assets/fofo-splash.png`, // Must be an absolute URL
      width: 800,
      height: 600,
    },
    locale: 'ko_KR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Suspense fallback={<SplashScreen />}>{children}</Suspense>
      </body>
    </html>
  );
}
