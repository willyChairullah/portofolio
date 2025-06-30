"use client";
import { useTheme } from "@/context/ThemeContext";

export default function HeroSection() {
  const { isDarkTheme } = useTheme();

  return (
    <div className="relative z-10">
      <div className="w-full h-screen flex items-center">
        <div className="ml-50 max-w-5xl mt-20">
          <h1
            className={`font-inter font-extrabold text-7xl ${
              isDarkTheme ? "text-white" : "text-[#1A1A1A]"
            } mb-2 transition-colors duration-300`}
          >
            Willu jago samal
          </h1>
          <p
            className={`italic font-inter font-semibold text-2xl ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            } my-3 transition-colors duration-300`}
          >
            Full Stack Web Developer
          </p>
          <button
            className={`${
              isDarkTheme
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            } font-inter text-l font-bold py-2 px-5 rounded-md transition-colors`}
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}
