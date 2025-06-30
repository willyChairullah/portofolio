import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
  FaPhp,
  FaLaravel,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiCodeigniter,
  SiPostgresql,
} from "react-icons/si";

interface ParallaxBackgroundProps {
  calculateMovement: (depth: number) => { x: number; y: number };
}

export default function ParallaxBackground({
  calculateMovement,
}: ParallaxBackgroundProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div
        className="absolute top-[8%] left-[23%] text-5xl text-black/60 animate-float-slow transform"
        style={{
          transform: `rotate(-15deg) translate(${calculateMovement(20).x}px, ${
            calculateMovement(20).y
          }px)`,
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "50%",
          padding: "0.001em",
        }}
      >
        <FaGithub />
      </div>

      <div
        className="absolute top-[21%] left-[80%] text-7xl text-sky-500/20 animate-float"
        style={{
          transform: `translate(${calculateMovement(25).x}px, ${
            calculateMovement(25).y
          }px)`,
        }}
      >
        <FaReact />
      </div>

      <div
        className="absolute top-[78%] left-[12%] text-6xl text-gray-700/20 animate-float-reverse transform"
        style={{
          transform: `rotate(12deg) translate(${calculateMovement(15).x}px, ${
            calculateMovement(15).y
          }px)`,
        }}
      >
        <FaNodeJs />
      </div>

      <div
        className="absolute top-[28%] left-[22%] text-8xl text-black/70 animate-float-slow transform"
        style={{
          transform: `rotate(-8deg) translate(${calculateMovement(30).x}px, ${
            calculateMovement(30).y
          }px)`,
          background: "rgba(255, 255, 255, 0.01)",
          borderRadius: "50%",
          padding: "0.05em",
          zIndex: 5,
        }}
      >
        <SiNextdotjs />
      </div>

      <div
        className="absolute top-[65%] left-[45%] text-6xl text-yellow-400/30 animate-float"
        style={{
          transform: `rotate(20deg) translate(${calculateMovement(18).x}px, ${
            calculateMovement(18).y
          }px)`,
        }}
      >
        <SiJavascript />
      </div>

      <div
        className="absolute top-[25%] left-[53%] text-6xl text-blue-600/20 animate-float-reverse"
        style={{
          transform: `translate(${calculateMovement(22).x}px, ${
            calculateMovement(22).y
          }px)`,
        }}
      >
        <SiTypescript />
      </div>

      <div
        className="absolute top-[88%] left-[45%] text-6xl text-cyan-500/20 animate-float-slow transform"
        style={{
          transform: `rotate(-10deg) translate(${calculateMovement(12).x}px, ${
            calculateMovement(12).y
          }px)`,
        }}
      >
        <SiTailwindcss />
      </div>

      <div
        className="absolute top-[62%] left-[82%] text-5xl text-blue-500/20 animate-float transform"
        style={{
          transform: `rotate(15deg) translate(${calculateMovement(28).x}px, ${
            calculateMovement(28).y
          }px)`,
        }}
      >
        <FaPython />
      </div>

      <div
        className="absolute top-[10%] left-[48%] text-4xl text-blue-600/20 animate-float-reverse transform"
        style={{
          transform: `rotate(-25deg) translate(${calculateMovement(16).x}px, ${
            calculateMovement(16).y
          }px)`,
        }}
      >
        <FaDocker />
      </div>

      <div
        className="absolute top-[68%] left-[30%] text-6xl text-green-500/20 animate-float-slow"
        style={{
          transform: `rotate(5deg) translate(${calculateMovement(24).x}px, ${
            calculateMovement(24).y
          }px)`,
        }}
      >
        <SiMongodb />
      </div>

      <div
        className="absolute top-[92%] left-[88%] text-4xl text-blue-500/10 animate-float transform"
        style={{
          transform: `rotate(10deg) translate(${calculateMovement(26).x}px, ${
            calculateMovement(26).y
          }px)`,
        }}
      >
        <FaPhp />
      </div>

      <div
        className="absolute top-[15%] left-[8%] text-4xl text-red-500/10 animate-float-slow transform"
        style={{
          transform: `rotate(-12deg) translate(${calculateMovement(19).x}px, ${
            calculateMovement(19).y
          }px)`,
        }}
      >
        <FaLaravel />
      </div>

      <div
        className="absolute top-[83%] left-[70%] text-4xl text-red-600/10 animate-float-reverse transform"
        style={{
          transform: `rotate(5deg) translate(${calculateMovement(17).x}px, ${
            calculateMovement(17).y
          }px)`,
        }}
      >
        <SiCodeigniter />
      </div>

      <div
        className="absolute top-[55%] left-[68%] text-6xl text-blue-700/20 animate-float transform"
        style={{
          transform: `rotate(8deg) translate(${calculateMovement(21).x}px, ${
            calculateMovement(21).y
          }px)`,
        }}
      >
        <SiPostgresql />
      </div>
    </div>
  );
}
