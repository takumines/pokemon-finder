import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import ThemeProvider from "@/app/components/theme-provider";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pokemon Finder",
  description: "Find your favorite Pokemon here!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
              <Link href="/">
                <h2 className="text-2xl text-bold">Pokemon Finder</h2>
              </Link>
            </div>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
