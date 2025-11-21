# VS Code Shortcuts

A modern, responsive web application for browsing and searching Visual Studio Code keyboard shortcuts across Windows, Mac, and Linux operating systems.

## Features

- **Cross-Platform Support**: View shortcuts for Windows, macOS, and Linux
- **Smart OS Detection**: Automatically detects your operating system on page load
- **Command Palette**: Quick search functionality with keyboard shortcut (Ctrl/Cmd + K)
- **Real-time Filtering**: Search shortcuts by description or key combination
- **Responsive Design**: Optimized for desktop and mobile devices
- **Modern UI**: Clean, minimalist interface with smooth transitions and hover effects
- **Categorized Shortcuts**: Organized by category (General, Editing, Navigation, Debug, etc.)

## Tech Stack

### Frontend

- **Next.js 16.0.3**: React framework with App Router
- **React 19.2.0**: Latest React with improved performance
- **TypeScript 5**: Type-safe development
- **Tailwind CSS v4**: Utility-first CSS framework with latest features

### Utilities

- **lucide-react**: Modern icon library
- **clsx** & **tailwind-merge**: Dynamic className management
- **PostCSS**: CSS processing

### Development Tools

- **ESLint 9**: Code linting with Next.js config
- **Next.js DevTools**: Development experience optimization

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/LuizThiago/vscode-shortcuts.git
cd vscode-shortcuts
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
vscode-shortcuts/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles and Tailwind directives
├── components/            # React components
│   ├── Header.tsx         # Header with OS selector and branding
│   ├── CommandPalette.tsx # Search input component
│   ├── ShortcutList.tsx   # Renders categorized shortcuts
│   └── ShortcutItem.tsx   # Individual shortcut display
├── data/                  # Data layer
│   └── shortcuts.ts       # Shortcut definitions and types
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions (cn utility)
└── public/                # Static assets
```

## Shortcuts Data

The shortcuts are defined in `data/shortcuts.ts` with the following structure:

```typescript
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
```

To add or modify shortcuts, edit the `shortcutsData` array in `data/shortcuts.ts`.

## Keyboard Shortcuts

- **Ctrl/Cmd + K**: Focus search input
- Search is case-insensitive and matches both descriptions and key combinations

## Customization

### Theme

The application uses CSS custom properties for theming. Modify `app/globals.css` to adjust colors:

```css
@theme {
  --color-background: /* ... */ ;
  --color-foreground: /* ... */ ;
  --color-primary: /* ... */ ;
}
```

### Adding Categories

Add new categories to the `shortcutsData` array in `data/shortcuts.ts`:

```typescript
{
  title: "Your Category",
  shortcuts: [
    {
      id: "unique_id",
      description: "Shortcut description",
      keys: {
        win: ["Ctrl", "K"],
        mac: ["Cmd", "K"],
        linux: ["Ctrl", "K"],
      },
    },
  ],
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

Created by [Luiz Thiago](https://luizthiago.com)

## Acknowledgments

- Shortcut data sourced from official VS Code documentation
- Icons provided by [Lucide](https://lucide.dev)
- Fonts: Geist Sans and Geist Mono
