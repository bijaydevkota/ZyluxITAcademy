"use client";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-20 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
    >
      <Link href={"/Pages/enroll"}
        
        className="p-1 flex justify-center text-white bg-[#33c6f2] cursor-pointer underline"
      >
        Enroll now for extra 20% off
      </Link>

      <nav className="text-white container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-[#33c6f2] font-bold">Zylux IT Academy</Link>
        <ul className="flex ">
          <motion.li className="flex gap-4 items-center">
            <Link href="/" className="hover:text-[#33c6f2] transition-colors">
              Home
            </Link>
            <Link
              href="/Pages/about"
              className="hover:text-[#33c6f2] transition-colors"
            >
              About
            </Link>
            <Link
              href="/Pages/contact"
              className="hover:text-[#33c6f2] transition-colors"
            >
              Contact
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Courses</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col cursor-pointer space-y-4 p-2">
                    <Link href="/Pages/frontend-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">Frontend</Link>
                    <Link href="/Pages/backend-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">Backend</Link>
                    <Link  href="/Pages/fullstack-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">FullStack</Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
           
        
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
