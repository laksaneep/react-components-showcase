import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/esm/styles/prism";
import { X, Code, Eye, FileText } from "lucide-react";

const CodePreview = ({ component, onClose }) => {
  const [activeTab, setActiveTab] = useState("code");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">
            {component.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b bg-gray-50">
          <button
            onClick={() => setActiveTab("code")}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
              activeTab === "code"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Code size={16} />
            Source Code
          </button>
          <button
            onClick={() => setActiveTab("props")}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
              activeTab === "props"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <FileText size={16} />
            Props
          </button>
          <button
            onClick={() => setActiveTab("preview")}
            className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
              activeTab === "preview"
                ? "text-blue-600 border-b-2 border-blue-600 bg-white"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <Eye size={16} />
            Live Preview
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === "code" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Component Implementation
              </h3>
              <div className="rounded-lg overflow-hidden">
                <SyntaxHighlighter
                  language="jsx"
                  style={tomorrow}
                  showLineNumbers
                  customStyle={{
                    margin: 0,
                    borderRadius: "8px",
                  }}
                >
                  {component.sourceCode || "// Source code not available"}
                </SyntaxHighlighter>
              </div>
            </div>
          )}

          {activeTab === "props" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Props Documentation
              </h3>
              <div className="space-y-4">
                {component.props?.map((prop, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-2"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-blue-600">
                        {prop.name}
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600">
                        {prop.type}
                      </span>
                    </div>
                    <p className="text-gray-700 text-sm">{prop.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "preview" && (
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Live Component Preview
              </h3>
              <div className="border rounded-lg p-8 bg-gray-50 flex items-center justify-center min-h-[200px] mb-6">
                <component.component {...component.defaultProps} />
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <strong className="text-gray-700">Category:</strong>
                  <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                    {component.category}
                  </span>
                </div>
                <div>
                  <strong className="text-gray-700">Difficulty:</strong>
                  <span
                    className={`ml-2 px-2 py-1 rounded text-xs ${
                      component.difficulty === "Easy"
                        ? "bg-green-100 text-green-700"
                        : component.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {component.difficulty}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <strong className="text-gray-700">Description:</strong>
                <p className="text-gray-600 mt-1">{component.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
