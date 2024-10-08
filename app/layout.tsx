import { Footer, Header } from '@/src/shared/ui';
import { ThemeProvider } from '@/src/shared/ui';

import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Home | Dictionary',
};

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full bg-white text-black max-md:text-[15px] max-sm:text-[2.308vw] 2xl:text-[1.041vw] dark:bg-black dark:text-white"
      suppressHydrationWarning
    >
      <body className={`${inter.className} h-full`}>
        <ThemeProvider defaultTheme="system" attribute="class">
          <div className="grid h-full grid-rows-[1fr_auto]">
            <div className="m-[0_auto] grid h-full w-[41.625rem] grid-rows-[auto_1fr] items-center pt-7">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
