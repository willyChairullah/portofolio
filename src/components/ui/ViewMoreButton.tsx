import Link from "next/link";

interface ViewMoreButtonProps {
  href: string;
  text: string;
}

export default function ViewMoreButton({ href, text }: ViewMoreButtonProps) {
  return (
    <div className="mt-16 flex justify-center">
      <Link
        href={href}
        className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold rounded-lg text-[#1A1A1A] bg-[#E8E8E8] border-2 border-[#E8E8E8]/80 hover:border-[#E8E8E8] transition-all duration-300"
      >
        <span className="absolute inset-0 w-full h-full bg-[#E8E8E8] opacity-80 group-hover:opacity-100 transition-opacity duration-500"></span>
        <span className="relative inline-flex items-center">
          <span>{text}</span>
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
      </Link>
    </div>
  );
}
