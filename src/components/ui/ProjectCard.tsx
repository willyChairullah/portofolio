import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    detailLink: string;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // Determine if project ID is even - fixed to use correct logic
  const isEven = project.id % 2 === 0;

  return (
    <div
      className={`relative w-full pt-14 px-6 pb-14 flex ${
        isEven ? "justify-start" : "justify-end"
      } items-center group`}
    >
      {/* Numbered indicator with maximum size */}
      <div
        className={`absolute top-0 ${
          isEven ? "-left-0" : "-right-0"
        } w-72 h-72 opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-1000 ease-out z-10`}
      >
        <div
          className={`absolute bottom-10 ${
            isEven ? "left-0" : "right-0"
          } flex items-center justify-center font-extrabold text-[12rem] text-gray-400 group-hover:text-white transition-colors duration-500 delay-700 filter drop-shadow-[0_12px_12px_rgba(0,0,0,0.8)]`}
        >
          {project.id < 10 ? `0${project.id}` : String(project.id)}
        </div>
      </div>

      {/* Actual card within the larger container */}
      <div className="relative w-[95%] aspect-[16/8] overflow-hidden transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1">
        {/* Card content sparkle effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 blur opacity-0 group-hover:opacity-20 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

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
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-yellow-300 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 ease-in-out transform group-hover:translate-x-10 group-hover:translate-y-10"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-400 opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 ease-in-out transform group-hover:translate-x-10 group-hover:translate-y-10"></div>

            {/* Sliding overlay animation */}
            <div className="absolute inset-0 -left-full group-hover:left-0 bg-gradient-to-r from-white/30 via-white/10 to-transparent transition-all duration-1000 ease-in-out transform"></div>
          </div>
        </div>

        {/* Text content - with adjusted vertical spacing */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 pb-10 text-white transition-all duration-500 ease-out transform group-hover:translate-y-[-4px]">
          <div
            className={`pl-10 pr-10 pb-6 ${
              isEven ? "text-right" : "text-left"
            }`}
          >
            <h3
              className={`text-4xl md:text-5xl font-bold mb-3 transition-all duration-300 transform ${
                isEven
                  ? "origin-right group-hover:scale-105"
                  : "origin-left group-hover:scale-105"
              } group-hover:text-white`}
            >
              {project.title}
            </h3>
            <p
              className={`text-lg md:text-xl text-gray-200 mb-4 max-w-2xl transition-all duration-500 ease-in-out opacity-80 group-hover:opacity-100 group-hover:text-white ${
                isEven ? "text-right ml-auto" : "text-left"
              }`}
            >
              {project.description}
            </p>
            <div>
              <Link href={project.detailLink}>
                <button className="bg-white text-gray-800 px-5 py-2.5 rounded text-base font-medium transition-all duration-300 hover:bg-opacity-90 group-hover:bg-white group-hover:text-gray-900 transform group-hover:scale-105 hover:shadow-lg relative overflow-hidden">
                  <span className="relative z-10">View Details</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
