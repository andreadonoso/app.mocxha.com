import { Inter } from 'next/font/google';
import localFont from 'next/font/local'

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const switzer = localFont({
  src: [
    {
      path: "../../public/fonts/Switzer-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
});

