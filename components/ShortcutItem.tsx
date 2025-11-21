import { Shortcut, OS } from "@/data/shortcuts";
import { cn } from "@/lib/utils";

interface ShortcutItemProps {
  shortcut: Shortcut;
  os: OS;
}

export function ShortcutItem({ shortcut, os }: ShortcutItemProps) {
  const keys = shortcut.keys[os];

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-1.5 lg:py-2 border-b border-border/50 last:border-0 group hover:bg-[#8c59e2] hover:bg-opacity-10 hover:border-fuchsia-100 px-2 sm:px-3 rounded-lg transition-all duration-200 gap-1.5 sm:gap-0">
      <span className="text-xs lg:text-sm text-muted-foreground group-hover:text-black transition-colors font-medium">
        {shortcut.description}
      </span>
      <div className="flex gap-1 flex-wrap">
        {keys.map((key, index) => (
          <kbd
            key={index}
            className={cn(
              "px-1.5 py-0.5 text-xs font-semibold text-foreground group-hover:border-black/50 group-hover:text-black transition-colors bg-muted rounded border border-border border-[#8c59e2] min-w-6 text-center shadow-sm"
            )}
          >
            {key}
          </kbd>
        ))}
      </div>
    </div>
  );
}
