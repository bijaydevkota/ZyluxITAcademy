import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zylux IT Academy",
  description: "Learn frontend and backend development with Next.js",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}</body>
    </html>
  )
}

