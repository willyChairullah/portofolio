import Image from "next/image";

// Sample project data
const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description:
      "A fully responsive e-commerce platform built with Next.js and Tailwind CSS",
    image: "/images/project1.jpg", // Placeholder path, replace with your image
    detailLink: "/projects/ecommerce",
  },
  {
    id: 2,
    title: "Portfolio Dashboard",
    description:
      "Interactive dashboard showing data visualization using React and D3.js",
    image: "/images/project2.jpg", // Placeholder path, replace with your image
    detailLink: "/projects/dashboard",
  },
  {
    id: 3,
    title: "Mobile Application",
    description: "Cross-platform mobile app built with React Native",
    image: "/images/project3.jpg", // Placeholder path, replace with your image
    detailLink: "/projects/mobile-app",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="w-full min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-start pt-20 pb-16"
    >
      {/* Judul Section */}
      <div className="flex flex-col items-center">
        <span className="text-sm font-medium text-gray-500 mb-2 relative overflow-hidden group">
          <span className="inline-block">Commercial Project</span>
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mb-10 relative">
          Latest Works
        </h2>
      </div>

      {/* Project cards grid */}
      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div
              key={project.id}
              className="relative h-80 rounded-xl overflow-hidden group transform transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:-translate-y-1"
            >
              {/* Card content sparkle effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Background image */}
              <div className="absolute inset-0">
                {/* Replace with your actual images */}
                <div className="w-full h-full bg-gray-300 relative">
                  {/* Use Image component if you have actual images */}
                  {/* <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                  /> */}

                  {/* Fallback if you don't have images yet */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1 group-hover:from-indigo-600 group-hover:to-pink-500"></div>
                </div>

                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-all duration-500 group-hover:bg-opacity-65 backdrop-blur-0 group-hover:backdrop-blur-[2px]">
                  {/* Decorative elements that appear on hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-yellow-300 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 ease-in-out transform group-hover:translate-x-10 group-hover:translate-y-10"></div>
                  <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 ease-in-out transform group-hover:translate-x-10 group-hover:translate-y-10"></div>
                </div>
              </div>

              {/* Text content */}
              <div className="absolute bottom-0 left-0 p-6 text-white transition-all duration-500 ease-out transform group-hover:translate-y-[-8px]">
                <h3 className="text-xl font-bold mb-2 transition-all duration-300 transform origin-left group-hover:scale-110 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-200 mb-4 max-w-xs transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100 group-hover:text-white transform origin-left group-hover:translate-x-1">
                  {project.description}
                </p>
                <button className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-opacity-90 group-hover:bg-white group-hover:text-gray-900 transform group-hover:scale-105 hover:shadow-lg relative overflow-hidden">
                  <span className="relative z-10">View Details</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-lg text-[#1A1A1A] bg-[#E8E8E8] border-2 border-[#E8E8E8]/80 hover:border-[#E8E8E8] transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-[#E8E8E8] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></span>
            <span className="relative inline-flex items-center">
              <span>Explore All Projects</span>
              <svg
                className="ml-2 w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#1A1A1A] group-hover:w-full transition-all duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  );
}
