import { CheckCircle } from "lucide-react"

export default function FullStackCoursePage() {
  const sections = [
    {
      title: "Full-Stack Foundations",
      description: "Understand the full-stack development landscape",
      modules: ["Web Architecture Overview", "Client-Server Communication", "Introduction to Full-Stack Frameworks"],
    },
    {
      title: "Frontend Essentials",
      description: "Master core frontend technologies",
      modules: ["HTML5, CSS3, and Responsive Design", "Modern JavaScript (ES6+)", "React Fundamentals"],
    },
    {
      title: "Backend Fundamentals",
      description: "Build robust server-side applications",
      modules: ["Node.js and Express.js", "RESTful API Development", "Database Management (SQL and NoSQL)"],
    },
    {
      title: "Full-Stack JavaScript",
      description: "Develop end-to-end applications with JavaScript",
      modules: [
        "MERN Stack (MongoDB, Express, React, Node.js)",
        "State Management with Redux",
        "Server-Side Rendering with Next.js",
      ],
    },
    {
      title: "API Integration and Authentication",
      description: "Connect frontend and backend securely",
      modules: ["RESTful and GraphQL API Integration", "JWT Authentication", "OAuth and Social Login"],
    },
    {
      title: "Database Design and ORM",
      description: "Master data modeling and database interactions",
      modules: [
        "Relational vs NoSQL Database Design",
        "ORM with Sequelize and Mongoose",
        "Database Migrations and Versioning",
      ],
    },
    {
      title: "DevOps for Full-Stack",
      description: "Deploy and manage full-stack applications",
      modules: ["Docker and Containerization", "CI/CD for Full-Stack Apps", "Cloud Deployment (AWS, Heroku)"],
    },
    {
      title: "Advanced Full-Stack Topics",
      description: "Explore cutting-edge full-stack development",
      modules: ["Real-time Applications with WebSockets", "Serverless Architecture", "Progressive Web Apps (PWAs)"],
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 mt-24">
          Full-Stack Development <span className="text-[#33c6f2]">Mastery Course</span>
        </h1>
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
          <a className="bg-[#33c6f2] px-6 py-4 rounded-md">Enroll Now</a>
        </div>
      </div>
    </div>
  )
}

