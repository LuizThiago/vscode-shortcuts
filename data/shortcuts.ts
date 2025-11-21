export type OS = "win" | "mac" | "linux";

export interface Shortcut {
  id: string;
  description: string;
  keys: {
    win: string[];
    mac: string[];
    linux: string[];
  };
}

export interface ShortcutCategory {
  title: string;
  shortcuts: Shortcut[];
}

export const shortcutsData: ShortcutCategory[] = [
  {
    title: "General",
    shortcuts: [
      {
        id: "command_palette",
        description: "Show Command Palette",
        keys: {
          win: ["Ctrl", "Shift", "P"],
          mac: ["Cmd", "Shift", "P"],
          linux: ["Ctrl", "Shift", "P"],
        },
      },
      {
        id: "quick_open",
        description: "Quick Open, Go to File",
        keys: {
          win: ["Ctrl", "P"],
          mac: ["Cmd", "P"],
          linux: ["Ctrl", "P"],
        },
      },
      {
        id: "new_window",
        description: "New window/instance",
        keys: {
          win: ["Ctrl", "Shift", "N"],
          mac: ["Cmd", "Shift", "N"],
          linux: ["Ctrl", "Shift", "N"],
        },
      },
      {
        id: "close_window",
        description: "Close window/instance",
        keys: {
          win: ["Ctrl", "Shift", "W"],
          mac: ["Cmd", "Shift", "W"],
          linux: ["Ctrl", "Shift", "W"],
        },
      },
      {
        id: "user_settings",
        description: "User Settings",
        keys: {
          win: ["Ctrl", ","],
          mac: ["Cmd", ","],
          linux: ["Ctrl", ","],
        },
      },
    ],
  },
  {
    title: "Basic Editing",
    shortcuts: [
      {
        id: "cut_line",
        description: "Cut line (empty selection)",
        keys: {
          win: ["Ctrl", "X"],
          mac: ["Cmd", "X"],
          linux: ["Ctrl", "X"],
        },
      },
      {
        id: "copy_line",
        description: "Copy line (empty selection)",
        keys: {
          win: ["Ctrl", "C"],
          mac: ["Cmd", "C"],
          linux: ["Ctrl", "C"],
        },
      },
      {
        id: "move_line_up",
        description: "Move line up",
        keys: {
          win: ["Alt", "Up"],
          mac: ["Opt", "Up"],
          linux: ["Alt", "Up"],
        },
      },
      {
        id: "move_line_down",
        description: "Move line down",
        keys: {
          win: ["Alt", "Down"],
          mac: ["Opt", "Down"],
          linux: ["Alt", "Down"],
        },
      },
      {
        id: "copy_line_up",
        description: "Copy line up",
        keys: {
          win: ["Shift", "Alt", "Up"],
          mac: ["Shift", "Opt", "Up"],
          linux: ["Shift", "Alt", "Up"],
        },
      },
      {
        id: "copy_line_down",
        description: "Copy line down",
        keys: {
          win: ["Shift", "Alt", "Down"],
          mac: ["Shift", "Opt", "Down"],
          linux: ["Shift", "Alt", "Down"],
        },
      },
    ],
  },
  {
    title: "Multi-Cursor and Selection",
    shortcuts: [
      {
        id: "insert_cursor",
        description: "Insert cursor",
        keys: {
          win: ["Alt", "Click"],
          mac: ["Opt", "Click"],
          linux: ["Alt", "Click"],
        },
      },
      {
        id: "insert_cursor_above",
        description: "Insert cursor above",
        keys: {
          win: ["Ctrl", "Alt", "Up"],
          mac: ["Cmd", "Opt", "Up"],
          linux: ["Shift", "Alt", "Up"],
        },
      },
      {
        id: "insert_cursor_below",
        description: "Insert cursor below",
        keys: {
          win: ["Ctrl", "Alt", "Down"],
          mac: ["Cmd", "Opt", "Down"],
          linux: ["Shift", "Alt", "Down"],
        },
      },
      {
        id: "undo_last_cursor",
        description: "Undo last cursor operation",
        keys: {
          win: ["Ctrl", "U"],
          mac: ["Cmd", "U"],
          linux: ["Ctrl", "U"],
        },
      },
    ],
  },
  {
    title: "Search and Replace",
    shortcuts: [
      {
        id: "find",
        description: "Find",
        keys: {
          win: ["Ctrl", "F"],
          mac: ["Cmd", "F"],
          linux: ["Ctrl", "F"],
        },
      },
      {
        id: "replace",
        description: "Replace",
        keys: {
          win: ["Ctrl", "H"],
          mac: ["Cmd", "Opt", "F"],
          linux: ["Ctrl", "H"],
        },
      },
      {
        id: "find_next",
        description: "Find next",
        keys: {
          win: ["F3"],
          mac: ["Cmd", "G"],
          linux: ["F3"],
        },
      },
      {
        id: "find_previous",
        description: "Find previous",
        keys: {
          win: ["Shift", "F3"],
          mac: ["Shift", "Cmd", "G"],
          linux: ["Shift", "F3"],
        },
      },
    ],
  },
  {
    title: "Rich Languages Editing",
    shortcuts: [
      {
        id: "trigger_suggestion",
        description: "Trigger suggestion",
        keys: {
          win: ["Ctrl", "Space"],
          mac: ["Cmd", "Space"],
          linux: ["Ctrl", "Space"],
        },
      },
      {
        id: "format_document",
        description: "Format document",
        keys: {
          win: ["Shift", "Alt", "F"],
          mac: ["Shift", "Opt", "F"],
          linux: ["Ctrl", "Shift", "I"],
        },
      },
    ],
  },
  {
    title: "Navigation",
    shortcuts: [
      {
        id: "show_all_symbols",
        description: "Show all symbols",
        keys: {
          win: ["Ctrl", "T"],
          mac: ["Cmd", "T"],
          linux: ["Ctrl", "T"],
        },
      },
      {
        id: "go_to_line",
        description: "Go to Line...",
        keys: {
          win: ["Ctrl", "G"],
          mac: ["Ctrl", "G"],
          linux: ["Ctrl", "G"],
        },
      },
      {
        id: "navigate_history_back",
        description: "Navigate history back",
        keys: {
          win: ["Alt", "Left"],
          mac: ["Ctrl", "-"],
          linux: ["Ctrl", "Alt", "-"],
        },
      },
      {
        id: "navigate_history_forward",
        description: "Navigate history forward",
        keys: {
          win: ["Alt", "Right"],
          mac: ["Ctrl", "Shift", "-"],
          linux: ["Ctrl", "Shift", "-"],
        },
      },
    ],
  },
  {
    title: "Editor Management",
    shortcuts: [
      {
        id: "close_editor",
        description: "Close editor",
        keys: {
          win: ["Ctrl", "W"],
          mac: ["Cmd", "W"],
          linux: ["Ctrl", "W"],
        },
      },
      {
        id: "split_editor",
        description: "Split editor",
        keys: {
          win: ["Ctrl", "\\"],
          mac: ["Cmd", "\\"],
          linux: ["Ctrl", "\\"],
        },
      },
      {
        id: "toggle_sidebar",
        description: "Toggle Sidebar visibility",
        keys: {
          win: ["Ctrl", "B"],
          mac: ["Cmd", "B"],
          linux: ["Ctrl", "B"],
        },
      },
    ],
  },
  {
    title: "File Management",
    shortcuts: [
      {
        id: "new_file",
        description: "New File",
        keys: {
          win: ["Ctrl", "N"],
          mac: ["Cmd", "N"],
          linux: ["Ctrl", "N"],
        },
      },
      {
        id: "open_file",
        description: "Open File...",
        keys: {
          win: ["Ctrl", "O"],
          mac: ["Cmd", "O"],
          linux: ["Ctrl", "O"],
        },
      },
      {
        id: "save",
        description: "Save",
        keys: {
          win: ["Ctrl", "S"],
          mac: ["Cmd", "S"],
          linux: ["Ctrl", "S"],
        },
      },
      {
        id: "save_as",
        description: "Save As...",
        keys: {
          win: ["Ctrl", "Shift", "S"],
          mac: ["Cmd", "Shift", "S"],
          linux: ["Ctrl", "Shift", "S"],
        },
      },
    ],
  },
  {
    title: "Display",
    shortcuts: [
      {
        id: "toggle_full_screen",
        description: "Toggle full screen",
        keys: {
          win: ["F11"],
          mac: ["Ctrl", "Cmd", "F"],
          linux: ["F11"],
        },
      },
      {
        id: "zoom_in",
        description: "Zoom in",
        keys: {
          win: ["Ctrl", "="],
          mac: ["Cmd", "="],
          linux: ["Ctrl", "="],
        },
      },
      {
        id: "zoom_out",
        description: "Zoom out",
        keys: {
          win: ["Ctrl", "-"],
          mac: ["Cmd", "-"],
          linux: ["Ctrl", "-"],
        },
      },
    ],
  },
  {
    title: "Debug",
    shortcuts: [
      {
        id: "toggle_breakpoint",
        description: "Toggle breakpoint",
        keys: {
          win: ["F9"],
          mac: ["F9"],
          linux: ["F9"],
        },
      },
      {
        id: "start_continue",
        description: "Start / Continue",
        keys: {
          win: ["F5"],
          mac: ["F5"],
          linux: ["F5"],
        },
      },
      {
        id: "step_into",
        description: "Step into",
        keys: {
          win: ["F11"],
          mac: ["F11"],
          linux: ["F11"],
        },
      },
      {
        id: "step_out",
        description: "Step out",
        keys: {
          win: ["Shift", "F11"],
          mac: ["Shift", "F11"],
          linux: ["Shift", "F11"],
        },
      },
      {
        id: "step_over",
        description: "Step over",
        keys: {
          win: ["F10"],
          mac: ["F10"],
          linux: ["F10"],
        },
      },
      {
        id: "stop",
        description: "Stop",
        keys: {
          win: ["Shift", "F5"],
          mac: ["Shift", "F5"],
          linux: ["Shift", "F5"],
        },
      },
    ],
  },
  {
    title: "Integrated Terminal",
    shortcuts: [
      {
        id: "show_terminal",
        description: "Show integrated terminal",
        keys: {
          win: ["Ctrl", "`"],
          mac: ["Ctrl", "`"],
          linux: ["Ctrl", "`"],
        },
      },
      {
        id: "create_terminal",
        description: "Create new terminal",
        keys: {
          win: ["Ctrl", "Shift", "`"],
          mac: ["Ctrl", "Shift", "`"],
          linux: ["Ctrl", "Shift", "`"],
        },
      },
    ],
  },
];
