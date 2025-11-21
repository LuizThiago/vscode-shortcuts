import { Search } from "lucide-react";

interface CommandPaletteProps {
  value: string;
  onChange: (value: string) => void;
}

export function CommandPalette({ value, onChange }: CommandPaletteProps) {
  return (
    <div className="relative max-w-2xl mx-auto mb-12 group">
      <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search shortcuts... (e.g. 'copy', 'terminal', 'Ctrl+C')"
          className="w-full bg-card/50 backdrop-blur-xl border border-border rounded-xl py-4 pl-12 pr-4 text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-muted-foreground/50"
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
          <kbd className="hidden md:inline-flex h-6 items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
      </div>
    </div>
  );
}
