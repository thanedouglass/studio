import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// To use Playfair Display and Satoshi, you would typically set them up here:
// import { Playfair_Display, Satoshi } from 'next/font/google'; // Example, ensure correct package if using next/font
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Example for Playfair Display (ensure you install the font or use a provider like Google Fonts)
// const playfairDisplay = Playfair_Display({
//   subsets: ['latin'],
//   variable: '--font-playfair-display',
//   weight: ['400', '700'], // specify weights you need
// });

// Example for Satoshi (often a local font or from a specific provider)
// const satoshi = localFont({ // if local
//   src: '../../fonts/Satoshi-Variable.woff2', // adjust path
//   variable: '--font-satoshi',
// });


export const metadata: Metadata = {
  title: 'The Nexus Research Collective - Veritas Hub',
  description: 'Open. Safe. Decentralized. Equitable Science for All. Discover research opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> {/* Theme is dark by default, new styles are light-dominant */}
      {/*
        To use Playfair Display and Satoshi, you'd add their variables to the className:
        className={`${playfairDisplay.variable} ${satoshi.variable} ${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-background text-foreground`}
        For now, sticking to Geist and generic serif/sans-serif fallbacks in globals.css
      */}
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
