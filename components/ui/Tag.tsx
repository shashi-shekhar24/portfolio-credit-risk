import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "px-3 py-1.5 text-xs font-mono text-[#A1A1AA] bg-[#141414] border border-[#262626] rounded",
        className
      )}
    >
      {children}
    </span>
  );
}
