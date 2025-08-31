import { Code, Search, Filter, ChevronDown } from "lucide-react";
import { getAllComponents } from "@/utils/componentRegistry";
import { useState, useRef, useEffect } from "react";
import CodePreview from "./CodePreview";
import { RegisteredComponent } from "@/types/components";
import ThemeToggle from "../ThemeToggle";
import "../index";
import { DIFFICULTIES_LEVEL_CONFIG } from "../../constants";

const ComponentShowcase = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<RegisteredComponent | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const components = getAllComponents();

  const filteredComponents = Object.entries(components).filter(
    ([name, data]) => {
      const matchesSearch =
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDifficulty =
        filterDifficulty === "All" || data.difficulty === filterDifficulty;
      return matchesSearch && matchesDifficulty;
    }
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="h-full transition-colors bg-background">
      {/* Card Container */}
      <div className="max-w-screen-xl h-screen mx-auto p-8">
        <div className="text-card-foreground h-full overflow-hidden">
          {/* Header */}
          <header className="border-b border-border transition-colors">
            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {/* Theme Toggle */}
              <div className="flex justify-end mb-4 rounded-lg">
                <ThemeToggle />
              </div>

              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  React Component Library
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-4 px-2">
                  A showcase of reusable React components with live previews
                </p>
                <div className="text-sm text-muted-foreground">
                  {Object.keys(components).length} components available
                </div>
              </div>

              {/* Search and Filters */}
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative w-full">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search components..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-input border border-border text-foreground placeholder-muted-foreground rounded-md focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    />
                  </div>
                  <div
                    className="relative w-full sm:w-[200px]"
                    ref={dropdownRef}
                  >
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-foreground  pointer-events-none z-10" />
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full pl-9 sm:pl-10 pr-10 py-2.5 sm:py-3 text-sm  bg-secondary text-secondary-foreground sm:text-base border border-border rounded-lg shadow-sm focus:ring-2 focus:ring-primary focus:border-primary cursor-pointer hover:border-primary/60 transition-all duration-200 text-left"
                    >
                      {filterDifficulty === "All"
                        ? "All Difficulties"
                        : filterDifficulty}
                    </button>
                    <ChevronDown
                      className={`w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary-foreground  pointer-events-none transition-transform duration-200 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-md shadow-lg z-20 overflow-hidden">
                        {difficulties.map((difficulty) => (
                          <button
                            key={difficulty}
                            onClick={() => {
                              setFilterDifficulty(difficulty);
                              setIsDropdownOpen(false);
                            }}
                            className={`w-full px-3 py-2.5 text-left text-md hover:bg-accent hover:text-accent-foreground transition-colors ${
                              filterDifficulty === difficulty
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-card-foreground"
                            }`}
                          >
                            {difficulty === "All"
                              ? "All Difficulties"
                              : difficulty}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Component Grid */}
          <main className="transition-colors">
            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {filteredComponents.length === 0 ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-muted-foreground mb-2">
                    No components found
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base px-4">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-6">
                  {filteredComponents.map(([name, data]) => (
                    <div
                      key={name}
                      className="bg-card text-card-foreground border border-border rounded-md shadow transition-all hover:-translate-y-1"
                    >
                      <div className="p-4 sm:p-6">
                        {/* Component Header */}
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-base sm:text-lg font-semibold text-card-foreground truncate pr-2">
                            {data.title}
                          </h3>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {
                              DIFFICULTIES_LEVEL_CONFIG[
                                data.difficulty as keyof typeof DIFFICULTIES_LEVEL_CONFIG
                              ].icon
                            }
                            <span className="text-xs text-muted-foreground whitespace-nowrap hidden sm:inline">
                              {data.difficulty}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                          {data.description}
                        </p>

                        {/* Live Preview */}
                        <div className="mb-3 sm:mb-4">
                          <div className="text-xs text-muted-foreground mb-2">
                            Live Preview:
                          </div>
                          <div className="border border-border rounded-md p-3 sm:p-4 bg-muted flex items-center justify-center min-h-[80px] sm:min-h-[100px] transition-colors">
                            <data.component {...data.defaultProps} />
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-sm font-medium truncate">
                            {data.category}
                          </span>
                          <button
                            onClick={() => setSelectedComponent(data)}
                            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs sm:text-sm rounded-lg transition-colors flex-shrink-0"
                          >
                            <Code size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span className="hidden sm:inline">View Code</span>
                            <span className="sm:hidden">Code</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Code Preview Modal */}
      {selectedComponent && (
        <CodePreview
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )}
    </div>
  );
};

export default ComponentShowcase;
