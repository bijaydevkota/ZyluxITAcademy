"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-20 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
    >
      <Link
        href={"/Pages/enroll"}
        className="p-1 flex justify-center text-white bg-[#33c6f2] cursor-pointer underline"
      >
        Enroll now for extra 20% off
      </Link>

      <nav className="text-white container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-[#33c6f2] font-bold">
          Zylux IT Academy
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:gap-4 md:items-center fixed md:static top-16 left-0 w-full bg-gray-900 md:bg-transparent p-4 md:p-0 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 flex justify-end"
          }`}
        >
          <li>
            <Link href="/" className="hover:text-[#33c6f2] transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/Pages/about" className="hover:text-[#33c6f2] transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/Pages/contact" className="hover:text-[#33c6f2] transition-colors">
              Contact
            </Link>
          </li>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Courses
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col cursor-pointer space-y-4 p-2">
                  <Link href="/Pages/frontend-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">
                    Frontend
                  </Link>
                  <Link href="/Pages/backend-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">
                    Backend
                  </Link>
                  <Link href="/Pages/fullstack-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">
                    FullStack
                  </Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
