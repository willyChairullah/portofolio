// import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";
import ProjectCard from "./ui/ProjectCard";
import ViewMoreButton from "./ui/ViewMoreButton";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Donghua MnY",
    description:
      "A Chinese animation (donghua) listing website with comprehensive information and viewing options",
    image: "/images/project1.jpg", // Placeholder path, replace with your image
    detailLink: "/projects/donghua-mny",
  },
  {
    id: 2,
    title: "Mini ATM Machine",
    description:
      "Desktop application for counter transactions with built-in payment processing features",
    image: "/images/project2.jpg", // Placeholder path, replace with your image
    detailLink: "/projects/mini-atm",
  },
  {
    id: 3,
    title: "ERP Procurement System",
    description:
      "Enterprise Resource Planning solution focusing on procurement management",
    image: "/images/project3.jpg", // Placeholder path, replace with your image
    detailLink: "/projects/erp-procurement",
  },
];

export default function ProjectSection() {
  return (
    <section
      id="project"
      className="w-full min-h-screen bg-[#E8E8E8] flex flex-col items-center justify-start pt-20 pb-16"
    >
      {/* Commercial Projects Section */}
      <SectionHeader subtitle="Commercial Project" title="Latest Works" />

      {/* Project cards grid */}
      <div className="w-full max-w-5xl px-4">
        <div className="flex flex-col space-y-12">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View More Projects Button */}
        <ViewMoreButton href="/projects" text="Explore All Projects" />
      </div>
    </section>
  );
}