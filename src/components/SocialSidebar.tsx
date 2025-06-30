import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

interface SocialSidebarProps {
  isLightSection: boolean;
}

export default function SocialSidebar({ isLightSection }: SocialSidebarProps) {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 z-20">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors hover:scale-110 transform duration-200 ${
          isLightSection
            ? "text-gray-600 hover:text-gray-900"
            : "text-gray-400 hover:text-gray-100"
        }`}
      >
        <FaGithub size={28} />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors hover:scale-110 transform duration-200 ${
          isLightSection
            ? "text-gray-600 hover:text-gray-900"
            : "text-gray-400 hover:text-gray-100"
        }`}
      >
        <FaLinkedin size={28} />
      </a>
      <a
        href="https://instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-colors hover:scale-110 transform duration-200 ${
          isLightSection
            ? "text-gray-600 hover:text-gray-900"
            : "text-gray-400 hover:text-gray-100"
        }`}
      >
        <FaInstagram size={28} />
      </a>
      <div
        className={`h-24 w-px mx-auto mt-2 transition-colors duration-300 ${
          isLightSection ? "bg-gray-500" : "bg-gray-500"
        }`}
      ></div>
    </div>
  );
}
