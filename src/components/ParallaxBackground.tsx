import {
  FaGithub,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaPython,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
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
        className="absolute top-[10%] left-[10%] text-5xl text-gray-700/20 animate-float-slow transform"
        style={{
          transform: `rotate(-15deg) translate(${calculateMovement(20).x}px, ${
            calculateMovement(20).y
          }px)`,
        }}
      >
        <FaGithub />
      </div>
      <div
        className="absolute top-[20%] left-[80%] text-7xl text-gray-700/15 animate-float"
        style={{
          transform: `translate(${calculateMovement(25).x}px, ${
            calculateMovement(25).y
          }px)`,
        }}
      >
        <FaReact />
      </div>
      <div
        className="absolute top-[60%] left-[5%] text-6xl text-gray-700/20 animate-float-reverse transform"
        style={{
          transform: `rotate(12deg) translate(${calculateMovement(15).x}px, ${
            calculateMovement(15).y
          }px)`,
        }}
      >
        <FaNodeJs />
      </div>
      <div
        className="absolute top-[75%] left-[75%] text-4xl text-gray-700/15 animate-float-slow transform"
        style={{
          transform: `rotate(-8deg) translate(${calculateMovement(30).x}px, ${
            calculateMovement(30).y
          }px)`,
        }}
      >
        <SiNextdotjs />
      </div>
      <div
        className="absolute top-[40%] left-[30%] text-5xl text-gray-700/20 animate-float"
        style={{
          transform: `rotate(20deg) translate(${calculateMovement(18).x}px, ${
            calculateMovement(18).y
          }px)`,
        }}
      >
        <SiJavascript />
      </div>
      <div
        className="absolute top-[30%] left-[50%] text-7xl text-gray-700/15 animate-float-reverse"
        style={{
          transform: `translate(${calculateMovement(22).x}px, ${
            calculateMovement(22).y
          }px)`,
        }}
      >
        <SiTypescript />
      </div>
      <div
        className="absolute top-[80%] left-[40%] text-6xl text-gray-700/20 animate-float-slow transform"
        style={{
          transform: `rotate(-10deg) translate(${calculateMovement(12).x}px, ${
            calculateMovement(12).y
          }px)`,
        }}
      >
        <SiTailwindcss />
      </div>
      <div
        className="absolute top-[50%] left-[85%] text-5xl text-gray-700/15 animate-float transform"
        style={{
          transform: `rotate(15deg) translate(${calculateMovement(28).x}px, ${
            calculateMovement(28).y
          }px)`,
        }}
      >
        <FaPython />
      </div>
      <div
        className="absolute top-[15%] left-[30%] text-4xl text-gray-700/20 animate-float-reverse transform"
        style={{
          transform: `rotate(-25deg) translate(${calculateMovement(16).x}px, ${
            calculateMovement(16).y
          }px)`,
        }}
      >
        <FaDocker />
      </div>
      <div
        className="absolute top-[65%] left-[15%] text-6xl text-gray-700/15 animate-float-slow"
        style={{
          transform: `rotate(5deg) translate(${calculateMovement(24).x}px, ${
            calculateMovement(24).y
          }px)`,
        }}
      >
        <SiMongodb />
      </div>
    </div>
  );
}