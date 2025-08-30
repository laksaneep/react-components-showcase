import { Code, Search, Filter, Zap, Clock, Star } from "lucide-react";
import { getAllComponents } from "@/utils/componentRegistry";
import { useState } from "react";
import CodePreview from "./CodePreview";
import { RegisteredComponent } from "@/types/components";
import ThemeToggle from "../ThemeToggle";
import "../index";

const ComponentShowcase = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<RegisteredComponent | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState("All");

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

  // Get difficulty icon
  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return <Zap className="w-4 h-4 text-green-500" />;
      case "Medium":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "Hard":
        return <Star className="w-4 h-4 text-red-500" />;
      default:
        return <Zap className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="h-full transition-colors ">
      {/* Card Container */}
      <div className="max-w-screen-xl h-screen mx-auto p-8">
        <div className="theme-card h-full overflow-hidden">
          {/* Header */}
          <header className=" border-b border-gray-200 dark:border-slate-700 transition-colors">
            <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              {/* Theme Toggle */}
              <div className="flex justify-end mb-4">
                <ThemeToggle />
              </div>

              <div className="text-center mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-slate-100 mb-2">
                  React Component Library
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-slate-300 mb-4 px-2">
                  A showcase of reusable React components with live previews
                </p>
                <div className="text-sm text-gray-500 dark:text-slate-400">
                  {Object.keys(components).length} components available
                </div>
              </div>

              {/* Search and Filters */}
              <div className="max-w-2xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <div className="flex-1 relative w-full">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-slate-500" />
                    <input
                      type="text"
                      placeholder="Search components..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-9 sm:pl-10 pr-4 py-2.5 sm:py-3 text-sm sm:text-base bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 placeholder-gray-500 dark:placeholder-slate-400 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="relative w-full sm:w-[200px]">
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none" />
                    <select
                      value={filterDifficulty}
                      onChange={(e) => setFilterDifficulty(e.target.value)}
                      className="w-full appearance-none pl-9 sm:pl-10 pr-10 py-2.5 sm:py-3 text-sm sm:text-base bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-gray-900 dark:text-slate-100 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer hover:border-gray-400 dark:hover:border-slate-500 transition-colors shadow-sm"
                    >
                      <option value="All">All Difficulties</option>
                      <option value="Easy">Easy</option>
                      <option value="Medium">Medium</option>
                      <option value="Hard">Hard</option>
                    </select>
                    <svg
                      className="w-4 h-4 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-slate-500 pointer-events-none"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
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
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 dark:text-slate-300 mb-2">
                    No components found
                  </h3>
                  <p className="text-gray-500 dark:text-slate-400 text-sm sm:text-base px-4">
                    Try adjusting your search terms or filters
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                  {filteredComponents.map(([name, data]) => (
                    <div key={name} className="theme-card hover:-translate-y-1">
                      <div className="p-4 sm:p-6">
                        {/* Component Header */}
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-slate-100 truncate pr-2">
                            {data.title}
                          </h3>
                          <div className="flex items-center gap-1 flex-shrink-0">
                            {getDifficultyIcon(data.difficulty)}
                            <span className="text-xs text-gray-500 whitespace-nowrap hidden sm:inline">
                              {data.difficulty}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 dark:text-slate-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                          {data.description}
                        </p>

                        {/* Live Preview */}
                        <div className="mb-3 sm:mb-4">
                          <div className="text-xs text-gray-500 dark:text-slate-400 mb-2">
                            Live Preview:
                          </div>
                          <div className="border border-gray-200 dark:border-slate-600 rounded-lg p-3 sm:p-4 bg-gray-50 dark:bg-slate-700 flex items-center justify-center min-h-[80px] sm:min-h-[100px] transition-colors">
                            <data.component {...data.defaultProps} />
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded font-medium truncate">
                            {data.category}
                          </span>
                          <button
                            onClick={() => setSelectedComponent(data)}
                            className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 bg-gray-900 dark:bg-slate-600 hover:bg-gray-800 dark:hover:bg-slate-500 text-white text-xs sm:text-sm rounded-lg transition-colors flex-shrink-0"
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
