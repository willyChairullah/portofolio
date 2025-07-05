import { libre_baskerville, league_spartan } from "@/font/Font";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
  id?: string;
}

export default function SectionHeader({
  subtitle,
  title,
  className = "",
  id,
}: SectionHeaderProps) {
  return (
    <div id={id} className={`flex flex-col items-center ${className}`}>
      <span className={`text-sm font-bold text-[#B19386] mb-4 relative overflow-hidden group ${libre_baskerville.className}`}>
        <span className="inline-block">{subtitle}</span>
      </span>
      <h2 className={`text-4xl font-bold text-[#4A4A4A] mb-10 relative ${league_spartan.className}`}>
        {title}
      </h2>
    </div>
  );
}
