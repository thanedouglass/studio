import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
// To use Playfair Display and Satoshi, you would typically set them up here:
// import { Playfair_Display } from 'next/font/google';
// import localFont from 'next/font/local';
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
//   weight: ['400', '700'], 
//   display: 'swap',
// });

// Example for Satoshi (often a local font or from a specific provider)
// const satoshi = localFont({ 
//   src: [
//     { path: '../../public/fonts/Satoshi-Regular.woff2', weight: '400', style: 'normal' },
//     { path: '../../public/fonts/Satoshi-Medium.woff2', weight: '500', style: 'normal' },
//     { path: '../../public/fonts/Satoshi-Bold.woff2', weight: '700', style: 'normal' },
//   ],
//   variable: '--font-satoshi',
//   display: 'swap',
// });


export const metadata: Metadata = {
  title: 'The Nexus Research Collective',
  description: 'Open. Safe. Decentralized. Equitable Science for All. Discover research opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}
        // To use Playfair Display and Satoshi, ensure they are configured above and uncomment their variables here:
        // className={`${playfairDisplay.variable} ${satoshi.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen bg-background text-foreground`}
      >
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
