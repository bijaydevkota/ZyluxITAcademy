import { CheckCircle } from "lucide-react"

export default function BackendCoursePage() {
  const sections = [
    {
      title: "Backend Fundamentals",
      description: "Master the core concepts of backend development",
      modules: ["Introduction to Server-Side Programming", "HTTP and RESTful APIs", "Databases and SQL Basics"],
    },
    {
      title: "Node.js and Express",
      description: "Build scalable web applications with Node.js",
      modules: ["Node.js Basics and Event Loop", "Express.js Framework", "Middleware and Routing"],
    },
    {
      title: "Database Management",
      description: "Work with various database systems",
      modules: ["Relational Databases (PostgreSQL)", "NoSQL Databases (MongoDB)", "ORM and Query Optimization"],
    },
    {
      title: "Authentication and Security",
      description: "Implement secure user authentication and authorization",
      modules: ["JWT and Session-based Auth", "OAuth and Social Login", "Security Best Practices and OWASP"],
    },
    {
      title: "API Development",
      description: "Design and build robust APIs",
      modules: ["RESTful API Design Principles", "GraphQL Fundamentals", "API Documentation and Versioning"],
    },
    {
      title: "Microservices Architecture",
      description: "Develop scalable and maintainable microservices",
      modules: ["Microservices Concepts", "Service Discovery and Load Balancing", "Message Queues (RabbitMQ, Kafka)"],
    },
    {
      title: "DevOps and Cloud Deployment",
      description: "Deploy and manage backend applications in the cloud",
      modules: ["Docker and Containerization", "CI/CD Pipelines", "Cloud Platforms (AWS, Google Cloud)"],
    },
    {
      title: "Performance and Scaling",
      description: "Optimize and scale backend applications",
      modules: ["Caching Strategies", "Database Indexing and Optimization", "Load Testing and Performance Tuning"],
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 mt-24">
          Backend Development <span className="text-[#33c6f2]">Mastery Course</span>
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

