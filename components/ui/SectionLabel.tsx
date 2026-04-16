interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#635BFF] uppercase tracking-widest mb-4">
      <span className="w-4 h-px bg-[#635BFF]" />
      {children}
    </span>
  );
}
