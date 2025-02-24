
import { CheckCircle } from "lucide-react"
import Link from "next/link"

export default function CoursePage() {
  const sections = [
    {
      title: "Web Fundamentals",
      description: "Master the core technologies of the web",
      modules: ["HTML5 Structure and Semantics", "CSS3 Styling and Layouts", "JavaScript Basics and DOM Manipulation"],
    },
    {
      title: "Advanced CSS and Responsive Design",
      description: "Create beautiful, responsive layouts",
      modules: ["Flexbox and Grid Systems", "CSS Animations and Transitions", "Media Queries and Mobile-First Design"],
    },
    {
      title: "Modern JavaScript",
      description: "Explore advanced JavaScript concepts",
      modules: [
        "ES6+ Features",
        "Asynchronous JavaScript (Promises, Async/Await)",
        "JavaScript Modules and Build Tools",
      ],
    },
    {
      title: "React Fundamentals",
      description: "Build interactive UIs with React",
      modules: ["React Components and JSX", "State and Props Management", "Hooks and Functional Components"],
    },
    {
      title: "Next.js Essentials",
      description: "Create powerful React applications with Next.js",
      modules: [
        "Server-Side Rendering and Static Site Generation",
        "Routing in Next.js",
        "API Routes and Data Fetching",
      ],
    },
    {
      title: "Vite and Build Optimization",
      description: "Optimize your development workflow",
      modules: ["Introduction to Vite", "Configuring Vite for React Projects", "Build Optimization Techniques"],
    },
    {
      title: "SEO for Frontend Developers",
      description: "Optimize your web applications for search engines",
      modules: ["SEO Basics and Best Practices", "Metadata and Open Graph Tags", "Performance Optimization for SEO"],
    },
    {
      title: "Deployment and CI/CD",
      description: "Deploy and maintain your Next.js applications",
      modules: [
        "Deploying Next.js Apps to Vercel",
        "Environment Variables and Configuration",
        "Continuous Integration and Deployment Strategies",
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 mt-24">Frontend Development <span className="text-[#33c6f2]">Mastery Course</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <div key={index} className="hover:shadow-lg bg-gray-500 p-4 rounded-md transition-shadow duration-300">
              <div>
                <div className="font-semibold text-xl">{section.title}</div>
                <div className="opacity-50">{section.description}</div>
              </div>
              <div>
                <ul className="space-y-2 mt-2">
                  {section.modules.map((module, moduleIndex) => (
                    <li key={moduleIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#33c6f2] mr-2 mt-0.5" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href={"/Pages/enroll"} className="bg-[#33c6f2] px-6 py-4 rounded-md">Enroll Now</Link>
        </div>
      </div>
    </div>
  )
}

