import { ShortcutCategory as IShortcutCategory, OS } from "@/data/shortcuts";
import { ShortcutCategory } from "./ShortcutCategory";

interface ShortcutListProps {
  categories: IShortcutCategory[];
  os: OS;
}

export function ShortcutList({ categories, os }: ShortcutListProps) {
  return (
    <>
      {categories.map((category) => (
        <ShortcutCategory key={category.title} category={category} os={os} />
      ))}
    </>
  );
}
