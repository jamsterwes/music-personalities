import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MTTI (Music Taste Type Indicator)",
  description: "Made with love by Wes Taylor <3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className + " bg-black"}>
        <div className="grid grid-rows-[auto_1fr_1.5em] h-full w-screen justify-center items-start">
          <header className="mb-12 flex flex-col items-center pt-4">
            <Link href="/">
              <h1 className="text-white text-7xl font-black mb-2">
                mtti
              </h1>
            </Link>
            <Link href="/">
              <p className="text-black bg-red-500 text-2xl font-bold px-2 mb-1">
                music taste type indicator
              </p>
            </Link>
            <div className="flex text-lg justify-around font-light gap-2 text-white">
              <Link href="/quiz" className="underline cursor-pointer hover:text-red-200 active:text-red-300">
                find your type
              </Link> 
              &bull;
              <Link href="/the-types" className="underline cursor-pointer hover:text-red-200 active:text-red-300">
                read about the types
              </Link>
            </div>
          </header>
          <main className="w-screen">
            {children}
          </main>
          <div className="flex text-sm justify-center items-center font-medium text-white h-full">
            <span className="w-fit px-1 bg-blue-600">
              (made by <a href="https://github.com/jamsterwes" target="_blank" className="underline hover:text-blue-200 active:text-blue-300">wesley taylor</a>)
            </span>
          </div>
        </div>
      </body>
    </html>
  );
}
