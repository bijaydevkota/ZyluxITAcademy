"use client"
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 bg-white shadow-md">
      <Link href="/Pages/enroll" className="bg-[#33c6f2] text-white flex justify-center underline text-sm py-2">
        Enroll now for extra 20% off
      </Link>
      <header className="w-full py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="Logo" height={50} width={50} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#33c6f2] focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-[#33c6f2] font-medium">
            <Link href="/">Home</Link>
            <Link href="/Pages/about">About</Link>
            <Link href="/Pages/courses">Courses</Link>
            <Link href="/Pages/contact">Contact</Link>
          </nav>

          {/* Enroll Button (Desktop) */}
          <Link
            href="/Pages/enroll"
            className="hidden md:flex items-center justify-center bg-[#33c6f2] text-white px-6 py-2 rounded-full font-medium"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <nav className="md:hidden absolute top-20 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 text-center text-[#33c6f2]">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/Pages/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/Pages/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link href="/Pages/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link
              href="/Pages/enroll"
              className="bg-[#33c6f2] text-white px-6 py-2 rounded-full font-medium"
              onClick={() => setMenuOpen(false)}
            >
              Enroll Now
            </Link>
          </nav>
        )}
      </header>
    </div>
  );
}
