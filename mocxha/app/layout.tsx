import type { Metadata } from "next";
import "@/app/ui/globals.css";
import { inter, switzer } from "@/app/ui/fonts";

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
      <body>{children}</body>
    </html>
  );
}
