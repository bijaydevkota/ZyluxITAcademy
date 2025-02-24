"use client";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-20 bg-gray-900 bg-opacity-90 backdrop-blur-sm"
    >
      <p
        
        className="p-1 flex justify-center text-white bg-[#33c6f2] cursor-pointer"
      >
        Enroll now for extra 20% off
      </p>

      <nav className="text-white container mx-auto px-6 py-3 flex justify-between items-center">
        <a href="/" className="text-[#33c6f2] font-bold">Zylux IT Academy</a>
        <ul className="flex ">
          <motion.li className="flex gap-4 items-center">
            <a href="/" className="hover:text-[#33c6f2] transition-colors">
              Home
            </a>
            <a
              href="/about"
              className="hover:text-[#33c6f2] transition-colors"
            >
              About
            </a>
            <a
              href="/contact"
              className="hover:text-[#33c6f2] transition-colors"
            >
              Contact
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">Courses</NavigationMenuTrigger>
                  <NavigationMenuContent className="flex flex-col cursor-pointer space-y-4 p-2">
                    <NavigationMenuLink href="/frontend-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">Frontend</NavigationMenuLink>
                    <NavigationMenuLink href="/backend-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">Backend</NavigationMenuLink>
                    <NavigationMenuLink  href="/fullstack-course" className="hover:bg-gray-200 px-4 py-2 rounded-md">FullStack</NavigationMenuLink>
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
