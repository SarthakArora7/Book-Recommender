// app/layout.js
"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (href) =>
    `mx-5 mt-3 text-xl rounded-xl px-5 py-1 font-semibold text-gray-800 ${
      pathname === href ? "bg-orange-400" : "hover:bg-orange-300"
    }`;

  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <nav className="flex justify-center">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>
          <p className="mt-3 text-xl text-gray-400">|</p>
          <Link href="/history" className={linkClass("/history")}>
            History
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
