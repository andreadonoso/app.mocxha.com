import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter, switzer } from "@/app/ui/fonts";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

export const metadata: Metadata = {
  title: "Mocxha",
  description: "Automate Your Business In One Click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${switzer.variable} `}>
      <body className="app-canvas" aria-hidden="true">
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
