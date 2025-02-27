import Image from "next/image"
import Link from "next/link"

export default function ProcessSection() {

  return (
    <section className=" bg-white py-12">
      <div className="container mx-auto px-4">
        {/* <div className="flex flex-col items-center text-center mb-12">
          
          <p className="text-[#33c6f2] text-sm tracking-wider uppercase mb-2">Welcome To</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#33c6f2]">Zylux IT Academy</h2>
        </div> */}

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Process Steps */}
          <div className="space-y-8">
           <p className="text-5xl text-[#33c6f2]">Empowering Future <span className="flex">Developers</span></p> 
           <p className="text-xl">Learn MERN Stack & Build Your Career!</p> 
           <div><Link href={"/Pages/enroll"} className="bg-[#33c6f2] text-white px-4 py-2 rounded-full">Apply Now</Link></div>
          </div>

          {/* Image Section */}
          <div className="relative">
            {/* Decorative Shapes */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#33c6f2] rounded-full -translate-y-4 translate-x-4" />
            <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#33c6f2] rounded-full translate-y-4 -translate-x-4" />
            <div className="absolute top-1/2 right-0 w-10 h-10 border-2 border-[#33c6f2] rotate-45 translate-x-6" />
            <div className="absolute top-1/4 left-0 w-8 h-8 bg-[#33c6f2] rounded-sm -translate-x-4 rotate-12" />

            {/* Main Image */}
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Team collaboration"
                width={500}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  )
}

