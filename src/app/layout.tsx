import type { Metadata } from "next";


import "./globals.css";
import Header from "@/app/Components/Header";
import Footer from "@/app/Components/Footer";
import { inter, poppins } from "@/app/fonts/fonts";



export const metadata: Metadata = {
  title: "Royal Class",
  description: "Ectomere website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${poppins.variable}`} lang="en">
      <body >
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
