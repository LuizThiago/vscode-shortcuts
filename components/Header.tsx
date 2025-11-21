import { OS } from "@/data/shortcuts";
import { cn } from "@/lib/utils";
import { Monitor, Command, Terminal, ContactRound } from "lucide-react";

interface HeaderProps {
  currentOS: OS;
  onOSChange: (os: OS) => void;
}

export function Header({ currentOS, onOSChange }: HeaderProps) {
  return (
    <header className="flex flex-col lg:flex-row items-center justify-between py-4 lg:py-8 gap-4 lg:gap-6">
      {/* Logo - Left on desktop, center on mobile */}
      <div className="flex items-center gap-4 w-full lg:w-auto">
        <div className="text-center lg:text-left w-full lg:w-auto">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-[#8c59e2] bg-clip-text text-transparent">
            VS Code Shortcuts
          </h1>
          <p className="text-muted-foreground mt-1 text-xs md:text-sm hidden md:block">
            Master your editor with these essential keybindings
          </p>
        </div>
      </div>

      {/* OS Selector + Profile Icon - Stack on mobile, inline on desktop */}
      <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 w-full lg:w-auto">
        {/* OS Selector */}
        <div className="flex items-center bg-card/50 backdrop-blur-md border border-border rounded-full p-1.5 shadow-lg shadow-black/20 w-full sm:w-auto">
          <button
            onClick={() => onOSChange("win")}
            className={cn(
              "flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-1 sm:flex-initial justify-center",
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
              "flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-1 sm:flex-initial justify-center",
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
              "flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 flex-1 sm:flex-initial justify-center",
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
            className="w-8 h-8 sm:w-10 sm:h-10 text-muted-foreground group-hover:text-[#8c59e2] transition-colors duration-300"
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
