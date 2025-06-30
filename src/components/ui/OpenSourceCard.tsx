interface OpenSourceCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    gradient: string;
    hoverGradient: string;
    textColor: string;
    tags: string[];
  };
}

export default function OpenSourceCard({ project }: OpenSourceCardProps) {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4 h-64 relative group overflow-hidden">
      {/* Background gradient with enhanced animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:${project.hoverGradient}`}
      ></div>
      <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>

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
