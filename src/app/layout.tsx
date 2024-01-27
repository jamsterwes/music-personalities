import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "MTTI (Music Taste Type Indicator)",
  description: "Made with love by Wes Taylor <3",
};

// Function to generate the link to authorize with Spotify
function getSpotifyAuthLink() {
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className + " bg-black"}>
        <div className="flex flex-col items-center py-4">
          <header className="mb-12 flex flex-col items-center">
            <h1 className="text-white text-7xl font-black mb-2">mtti</h1>
            <p className="text-black bg-red-500 text-2xl font-bold px-2 mb-2">music taste type indicator</p>
            <div className="flex text-lg justify-around font-light gap-2 text-white">
              <a className="underline cursor-pointer hover:text-red-200">
                find your type
              </a> 
              &bull;
              <a className="underline cursor-pointer hover:text-red-200">
                read about the types
              </a>
            </div>
          </header>
          <main>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
