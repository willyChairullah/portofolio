import { useState, useEffect, useRef } from "react";

export default function useParallaxEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLightSection, setIsLightSection] = useState(false);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    // Only run client-side
    if (typeof window !== "undefined") {
      const handleMouseMove = (e: MouseEvent) => {
        if (isMounted.current) {
          setMousePosition({
            x: e.clientX,
            y: e.clientY,
          });
        }
      };

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;

        // Check if user has scrolled past the first section
        setIsLightSection(scrollPosition >= windowHeight * 0.8);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);

      return () => {
        isMounted.current = false;
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const calculateMovement = (depth: number) => {
    if (typeof window !== "undefined") {
      const x = (mousePosition.x - window.innerWidth / 2) / depth;
      const y = (mousePosition.y - window.innerHeight / 2) / depth;
      return { x, y };
    }
    return { x: 0, y: 0 }; // Default value when window is not available
  };

  return {
    isLightSection,
    calculateMovement,
  };
}
