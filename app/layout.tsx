import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React
import Header from "./components/Header"
import Footer from "./components/Footer"
import CallToAction from "./components/CallToAction"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Zylux IT Academy",
  description: "A Perfect Destination for quality education",
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
        {children}
        <Footer/>
        <CallToAction />
        </body>
    </html>
  )
}

