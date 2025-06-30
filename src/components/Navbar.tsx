import ThemeToggle from "./ThemeToggle";
import { useCallback, useEffect, useState } from "react";

interface NavbarProps {
  isLightSection: boolean;
}

export default function Navbar({ isLightSection }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
      e.preventDefault();

      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      // Posisi target relatif terhadap dokumen
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      // Posisi awal scroll
      const startPosition = window.scrollY;
      // Jarak yang perlu di-scroll
      const distance = targetPosition - startPosition;

      // Durasi animasi dalam ms (1000ms = 1 detik)
      const duration = 800;
      let start: number | null = null;

      // Fungsi animasi
      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1);

        // Fungsi easing untuk animasi lebih halus (easeInOutQuad)
        const ease = (t: number) =>
          t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        window.scrollTo(0, startPosition + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    },
    []
  );

  // Menambahkan smooth scroll untuk hash URLs saat halaman dimuat
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  // Add a function to detect which section is currently in viewport
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "project", "openSource", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const topOffset = top + window.scrollY;
          const bottomOffset = bottom + window.scrollY;

          if (scrollPosition >= topOffset && scrollPosition <= bottomOffset) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once on mount to set initial active section
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-14 flex justify-between items-center z-50 transition-colors duration-300 ${
        isLightSection ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <div className="w-[50px] items-center ml-5">
        <img src="next.svg" alt="logo" srcSet="vercel.svg" />
      </div>
      <div className="flex items-center space-x-15 mx-5">
        <div className="flex items-center space-x-16">
          <a
            href="#home"
            onClick={e => handleNavClick(e, "home")}
            className={`font-inter font-extrabold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all ${
              activeSection === "home"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            } ${
              isLightSection
                ? "text-gray-600 hover:text-gray-900 after:bg-current"
                : "text-gray-400 hover:text-gray-100 after:bg-current"
            }`}
          >
            Home
          </a>
          <a
            href="#project"
            onClick={e => handleNavClick(e, "project")}
            className={`font-inter font-extrabold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all ${
              activeSection === "project"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            } ${
              isLightSection
                ? "text-gray-600 hover:text-gray-900 after:bg-current"
                : "text-gray-400 hover:text-gray-100 after:bg-current"
            }`}
          >
            Project
          </a>
          <a
            href="#openSource"
            onClick={e => handleNavClick(e, "openSource")}
            className={`font-inter font-extrabold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all ${
              activeSection === "openSource"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            } ${
              isLightSection
                ? "text-gray-600 hover:text-gray-900 after:bg-current"
                : "text-gray-400 hover:text-gray-100 after:bg-current"
            }`}
          >
            Open Source
          </a>
          <a
            href="#contact"
            onClick={e => handleNavClick(e, "contact")}
            className={`font-inter font-extrabold transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:transition-all ${
              activeSection === "contact"
                ? "after:w-full"
                : "after:w-0 hover:after:w-full"
            } ${
              isLightSection
                ? "text-gray-600 hover:text-gray-900 after:bg-current"
                : "text-gray-400 hover:text-gray-100 after:bg-current"
            }`}
          >
            Contact
          </a>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
