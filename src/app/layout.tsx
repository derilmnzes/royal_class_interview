import type { Metadata } from "next";


import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { inter, poppins } from "./fonts/fonts";



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
