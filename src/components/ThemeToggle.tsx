"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center transition-colors duration-300 focus:outline-none"
      aria-label={
        isDarkTheme ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {/* Track */}
      <div
        className={`absolute left-0 right-0 top-0 bottom-0 rounded-full ${
          isDarkTheme ? "bg-gray-700" : "bg-gray-300"
        } transition-colors duration-300`}
      ></div>

      {/* Thumb/Knob with icon */}
      <div
        className={`absolute w-5 h-5 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${
          isDarkTheme
            ? "translate-x-6 bg-indigo-600"
            : "translate-x-1 bg-yellow-400"
        }`}
      >
        {isDarkTheme ? (
          // Moon icon
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
        ) : (
          // Sun icon
          <svg
            className="w-3 h-3 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
