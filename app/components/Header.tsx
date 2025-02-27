import Link from "next/link"
import Image from "next/image"


export default function Header() {
  return (
 <div className="fixed w-full z-50 ">
    <Link href={"/Pages/enroll"} className="bg-[#33c6f2] text-white flex justify-center underline">Enroll now for extra 20% off</Link>
    <header className="w-full py-4 bg-gray-50
    ">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo1.png" alt="Logo" height={50} width={50}/>        
          </Link>

        <nav className="hidden md:flex items-center space-x-8 text-[#33c6f2]">
          <Link href="/" className=" font-medium ">
            Home
          </Link>
          <Link href="/Pages/about" className=" font-medium">
            About
          </Link>
          <Link href="/Pages/courses" className=" font-medium ">
            Courses
          </Link>
          
          
          <Link href="/Pages/contact" className=" font-medium">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
         
          <Link
            href="/Pages/enroll"
            className="hidden md:flex items-center justify-center bg-[#33c6f2] text-white px-6 py-2 rounded-full font-medium"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </header>
    </div>
  )
}

