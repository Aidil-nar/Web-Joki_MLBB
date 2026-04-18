import type { Metadata, Viewport } from 'next';
import './globals.css';

export const viewport: Viewport = {
  themeColor: '#0A0C12',
};

export const metadata: Metadata = {
  title: 'JokiMLBB.id — Joki Mobile Legends Profesional, Cepat & Aman',
  description:
    'Layanan joki Mobile Legends Bang Bang terpercaya. Naik rank dari Warrior hingga Mythical Glory dengan booster profesional. Akun aman, garansi rank, harga terjangkau.',
  keywords: [
    'joki mlbb',
    'joki mobile legends',
    'boost rank mlbb',
    'naik rank mobile legends',
    'joki rank aman',
    'joki mythic mlbb',
  ],
  openGraph: {
    title: 'JokiMLBB.id — Naik Rank MLBB Cepat & Aman',
    description:
      'Booster profesional, akun aman, garansi naik rank atau uang kembali.',
    type: 'website',
    locale: 'id_ID',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
