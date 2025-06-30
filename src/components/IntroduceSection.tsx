"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import ParallaxBackground from "@/components/ParallaxBackground";
import HeroSection from "@/components/HeroSection";
import useParallaxEffect from "@/hooks/useParallaxEffect";
import { ThemeProvider, useTheme } from "@/context/ThemeContext";

// Internal component that contains the actual content
function IntroduceSectionContent() {
  const { isLightSection, calculateMovement } = useParallaxEffect();
  const { isDarkTheme } = useTheme();

  return (
    <section
      id="home"
      className={`w-full h-screen ${
        isDarkTheme ? "bg-[#1A1A1A]" : "bg-[#E8E8E8]"
      } relative overflow-hidden transition-colors duration-300`}
    >
      {/* Parallax Background Icons */}
      <ParallaxBackground calculateMovement={calculateMovement} />

      {/* Navbar */}
      <Navbar isLightSection={!isDarkTheme || isLightSection} />

      {/* Social Media Sidebar */}
      <SocialSidebar isLightSection={!isDarkTheme || isLightSection} />

      {/* Hero Section */}
      <HeroSection />

      {/* Simple Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Thin Line Divider */}
        <div
          className={`h-[1px] w-full ${
            isDarkTheme ? "bg-gray-700" : "bg-gray-300"
          } transition-colors duration-300`}
        ></div>

        {/* Center Accent Line */}
        <div className="flex justify-center">
          <div
            className={`w-24 h-1 rounded-full ${
              isDarkTheme ? "bg-gray-500" : "bg-gray-400"
            } -mt-[1px] transition-colors duration-300`}
          ></div>
        </div>
      </div>
    </section>
  );
}

// Wrap with ThemeProvider
function IntroduceSectionWithTheme() {
  return (
    <ThemeProvider>
      <IntroduceSectionContent />
    </ThemeProvider>
  );
}

// Export a dynamic version of the content component with SSR disabled
export default dynamic(() => Promise.resolve(IntroduceSectionWithTheme), {
  ssr: false,
});