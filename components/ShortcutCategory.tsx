import { ShortcutCategory as IShortcutCategory, OS } from "@/data/shortcuts";
import { ShortcutItem } from "./ShortcutItem";

interface ShortcutCategoryProps {
  category: IShortcutCategory;
  os: OS;
}

export function ShortcutCategory({ category, os }: ShortcutCategoryProps) {
  return (
    <div className="mb-0 break-inside-avoid w-80">
      <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
        {category.title}
      </h3>
      <div className="bg-card rounded-xl border border-border p-2 shadow-sm">
        {category.shortcuts.map((shortcut) => (
          <ShortcutItem key={shortcut.id} shortcut={shortcut} os={os} />
        ))}
      </div>
    </div>
  );
}
