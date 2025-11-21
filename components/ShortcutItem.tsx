import { Shortcut, OS } from "@/data/shortcuts";
import { cn } from "@/lib/utils";

interface ShortcutItemProps {
  shortcut: Shortcut;
  os: OS;
}

export function ShortcutItem({ shortcut, os }: ShortcutItemProps) {
  const keys = shortcut.keys[os];

  return (
    <div className="flex items-center justify-between py-3 border-b border-border/50 last:border-0 group hover:bg-[#8c59e2] hover:bg-opacity-10 hover:border-fuchsia-100 px-3 rounded-lg transition-all duration-200">
      <span className="text-sm text-muted-foreground group-hover:text-black transition-colors font-medium">
        {shortcut.description}
      </span>
      <div className="flex gap-1.5">
        {keys.map((key, index) => (
          <kbd
            key={index}
            className={cn(
              "px-2 py-1 text-xs font-semibold text-foreground group-hover:border-black/50 group-hover:text-black transition-colors bg-muted rounded border border-border border-[#8c59e2] min-w-6 text-center shadow-sm"
            )}
          >
            {key}
          </kbd>
        ))}
      </div>
    </div>
  );
}
