import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 bg-muted hover:bg-accent text-muted-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ring rounded-lg border"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon */}
        <Sun
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === "light"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 rotate-90 scale-75"
          }`}
        />

        {/* Moon Icon */}
        <Moon
          className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${
            theme === "dark"
              ? "opacity-100 rotate-0 scale-100"
              : "opacity-0 -rotate-90 scale-75"
          }`}
        />
      </div>
    </button>
  );
}
