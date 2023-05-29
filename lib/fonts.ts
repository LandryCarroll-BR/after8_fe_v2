import { JetBrains_Mono as FontMono } from "next/font/google"
import localFont from "next/font/local"

export const fontSans = localFont({
  src: [
    {
      path: "../public/fonts/neuehaasdisplayroman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/neuehaasdisplaymedium.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const fontCaxton = localFont({
  src: "../public/fonts/caxton.woff2",
  display: "swap",
  variable: "--font-caxton",
})
