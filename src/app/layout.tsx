import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/app/Layout/Footer";
import Navbar from "@/app/Layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Image Gallery | Summer",
  description: "A small cloud project to showcase images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-sans min-h-screen px-12 md:px-24 ${inter.className}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
