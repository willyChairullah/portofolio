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
      <span className="text-sm font-medium text-gray-500 mb-2 relative overflow-hidden group">
        <span className="inline-block">{subtitle}</span>
      </span>
      <h2 className="text-4xl font-bold text-gray-800 mb-10 relative">
        {title}
      </h2>
    </div>
  );
}
