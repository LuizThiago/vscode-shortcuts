import { OS } from "@/data/shortcuts";
import { cn } from "@/lib/utils";
import { Monitor, Command, Terminal, ContactRound } from "lucide-react";

interface HeaderProps {
  currentOS: OS;
  onOSChange: (os: OS) => void;
}

export function Header({ currentOS, onOSChange }: HeaderProps) {
  return (
    <header className="flex items-center justify-between py-8 gap-6">
      {/* Logo - Left */}
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-[#8c59e2] bg-clip-text text-transparent whitespace-nowrap">
            VS Code Shortcuts
          </h1>
          <p className="text-muted-foreground mt-1 text-sm hidden md:block">
            Master your editor with these essential keybindings
          </p>
        </div>
      </div>

      {/* OS Selector + Profile Icon - Right */}
      <div className="flex items-center gap-4">
        {/* OS Selector */}
        <div className="flex items-center bg-card/50 backdrop-blur-md border border-border rounded-full p-1.5 shadow-lg shadow-black/20">
          <button
            onClick={() => onOSChange("win")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              currentOS === "win"
                ? "bg-[#8c59e2] text-white shadow-md scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            <Monitor className="w-4 h-4" />
            <span>Windows</span>
          </button>
          <button
            onClick={() => onOSChange("mac")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              currentOS === "mac"
                ? "bg-[#8c59e2] text-white shadow-md scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            <Command className="w-4 h-4" />
            <span>Mac</span>
          </button>
          <button
            onClick={() => onOSChange("linux")}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              currentOS === "linux"
                ? "bg-[#8c59e2] text-white shadow-md scale-105"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            )}
          >
            <Terminal className="w-4 h-4" />
            <span>Linux</span>
          </button>
        </div>

        {/* Profile Icon */}
        <a
          href="https://luizthiago.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center transition-all duration-300"
          title="Luiz Thiago"
        >
          <ContactRound
            className="w-10 h-10 text-muted-foreground group-hover:text-[#8c59e2] transition-colors duration-300"
            strokeWidth={1.5}
          />

          {/* Tooltip */}
          <span className="absolute -bottom-10 right-0 bg-card/95 backdrop-blur-md border border-border rounded-lg px-3 py-1.5 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
            Luiz Thiago
          </span>
        </a>
      </div>
    </header>
  );
}
