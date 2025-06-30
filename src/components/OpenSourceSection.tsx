import SectionHeader from "./ui/SectionHeader";
import OpenSourceCard from "./ui/OpenSourceCard";

// Open source projects data
const openSourceProjects = [
  {
    id: 1,
    title: "GitHub API Tool",
    description: "Open source utility for GitHub API interactions",
    gradient: "from-indigo-500 to-purple-500",
    hoverGradient: "from-indigo-600 to-purple-600",
    textColor: "text-indigo-600",
    tags: ["React", "TypeScript"],
  },
  {
    id: 2,
    title: "CSS Animation Library",
    description: "Lightweight animation toolkit for modern websites",
    gradient: "from-blue-500 to-teal-400",
    hoverGradient: "from-blue-600 to-teal-500",
    textColor: "text-blue-600",
    tags: ["CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "SVG Icon Pack",
    description: "Open source collection of customizable SVG icons",
    gradient: "from-red-500 to-yellow-500",
    hoverGradient: "from-red-600 to-yellow-600",
    textColor: "text-red-600",
    tags: ["SVG", "Design"],
  },
  {
    id: 4,
    title: "Markdown Editor",
    description: "Lightweight browser-based markdown editor with preview",
    gradient: "from-green-500 to-emerald-600",
    hoverGradient: "from-green-600 to-emerald-700",
    textColor: "text-green-600",
    tags: ["React", "Next.js"],
  },
];

export default function OpenSourceSection() {
  return (
    <section
      id="openSource"
      className="w-full min-h-screen bg-[#E0E0E0] flex flex-col items-center justify-start pt-20 pb-16"
    >
      {/* Open Source Section Title */}
      <SectionHeader subtitle="Experiments & Open Source" title="Web is Fun" />

      {/* Open Source Projects - Horizontal Cards */}
      <div className="w-full max-w-5xl px-4">
        <div className="w-full flex flex-wrap mt-6">
          {openSourceProjects.map(project => (
            <OpenSourceCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
