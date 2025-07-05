import Image from "next/image";

interface OpenSourceCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    gradient: string;
    hoverGradient: string;
    textColor: string;
    tags: string[];
    imageUrl?: string; // Optional image URL
  };
}

export default function OpenSourceCard({ project }: OpenSourceCardProps) {
  
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 h-64 relative group overflow-hidden">
      {/* Background gradient with enhanced animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:${project.hoverGradient}`}
      ></div>

      {/* Image with 16:9 aspect ratio, if provided */}
      {project.imageUrl ? (
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={800}
            height={450}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          {/* Fixed direct inline style approach for sliding animation */}
          <div
            className="absolute inset-0 bg-black"
            style={{
              width: "200%",
              left: "0",
              animation: "slideRight 8s linear infinite",
              background:
                "linear-gradient(to right, black, #333, black, #333, black)",
            }}
          ></div>
        </div>
      )}

      {/* Dark overlay (lighter if there's an image) */}
      <div
        className={`absolute inset-0 bg-black ${
          project.imageUrl ? "opacity-10" : "opacity-30"
        } group-hover:opacity-50 transition-opacity duration-300`}
      ></div>

      {/* Number indicator that appears on hover */}
      <div className="absolute -top-14 -right-14 w-28 h-28 opacity-0 group-hover:opacity-100 transform rotate-0 group-hover:rotate-12 transition-all duration-500 ease-out">
        <div
          className={`absolute bottom-0 right-0 bg-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-2xl ${project.textColor} shadow-lg`}
        >
          {project.id.toString().padStart(2, "0")}
        </div>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-xl font-bold text-white mb-1 transform transition-transform duration-300 group-hover:translate-y-[-5px]">
          {project.title}
        </h3>
        <p className="text-sm text-gray-200 mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
        <div className="flex space-x-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-white bg-opacity-20 rounded-md text-xs text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
