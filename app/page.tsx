"use client";

import { useState, useEffect, useMemo } from "react";
import { shortcutsData, OS } from "@/data/shortcuts";
import { Header } from "@/components/Header";
import { CommandPalette } from "@/components/CommandPalette";
import { ShortcutList } from "@/components/ShortcutList";

export default function Home() {
  const [os, setOs] = useState<OS>("win");
  const [searchQuery, setSearchQuery] = useState("");

  // Detect OS on initial load
  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes("mac")) {
      setOs("mac");
    } else if (userAgent.includes("linux")) {
      setOs("linux");
    } else {
      setOs("win");
    }
  }, []);

  // Keyboard shortcut to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        const input = document.querySelector(
          "input[type='text']"
        ) as HTMLInputElement;
        if (input) {
          input.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return shortcutsData;

    const query = searchQuery.toLowerCase();

    return shortcutsData
      .map((category) => ({
        ...category,
        shortcuts: category.shortcuts.filter((shortcut) => {
          const matchDescription = shortcut.description
            .toLowerCase()
            .includes(query);
          const matchKeys = shortcut.keys[os].some((key) =>
            key.toLowerCase().includes(query)
          );
          return matchDescription || matchKeys;
        }),
      }))
      .filter((category) => category.shortcuts.length > 0);
  }, [searchQuery, os]);

  return (
    <div className="h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary flex flex-col overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 flex flex-col h-full max-w-full xl:max-w-[1280px]">
        <div className="flex-none">
          <Header currentOS={os} onOSChange={setOs} />
        </div>

        <main className="flex-1 flex flex-col min-h-0 mb-4 md:mb-8">
          <div className="flex-none">
            <CommandPalette value={searchQuery} onChange={setSearchQuery} />
          </div>

          <div className="flex-1 overflow-y-auto overflow-x-hidden pr-2">
            {filteredCategories.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 lg:gap-4 pb-4 auto-rows-min">
                <ShortcutList categories={filteredCategories} os={os} />
              </div>
            ) : (
              <div className="text-center py-20 w-full">
                <p className="text-muted-foreground text-lg">
                  No shortcuts found for "{searchQuery}"
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
