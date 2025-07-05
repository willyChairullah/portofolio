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
      className={`relative w-full pt-6 px-6 pb-14 flex ${
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
          className={`absolute bottom-18 ${
            isEven ? "left-0" : "right-0"
          } flex items-center justify-center font-extrabold text-[12rem] text-gray-400 group-hover:text-white transition-colors duration-500 delay-600 ease-linier filter drop-shadow-[0_12px_12px_rgba(0,0,0,0.8)]`}
        >
          {project.id < 10 ? `0${project.id}` : String(project.id)}
        </div>
      </div>

      {/* Kartu Project */}
      <div className="relative w-[95%] aspect-[16/8] overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1 shadow-[0_4px_20px_rgba(0,0,0,0.3)] group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
        {/* Background image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gray-300 relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Overlay gelap */}
            <div className="absolute inset-0 bg-black/60 transition-all duration-700 group-hover:bg-black/35"></div>
          </div>
        </div>

        {/* Overlay Geser */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute inset-y-0 left-0 w-full h-full bg-gradient-to-r from-black/90 via-black/80 to-black/60 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out origin-left"></div>
        </div>

        {/* Konten Teks */}
        <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 pb-10 text-white ...">
          <div
            className={`pl-10 pr-10 pb-6 ${
              isEven ? "text-right" : "text-left"
            }`}
          >
            <h3 className={`text-4xl md:text-5xl font-bold mb-3 ...`}>
              {project.title}
            </h3>
            <p className={`text-lg md:text-xl text-gray-200 mb-4 ...`}>
              {project.description}
            </p>
            <Link href={project.detailLink}>
              <button className="bg-white text-gray-800 px-5 py-2.5 rounded ...">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
