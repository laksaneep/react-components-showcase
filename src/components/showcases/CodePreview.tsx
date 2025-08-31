import { useState } from "react";
import { X } from "lucide-react";
import { RegisteredComponent } from "@/types/components";
import { CODE_PREVIEW_TABS } from "../../constants";
import CodeTabContent from "./tabs/CodeTabContent";
import PropsTabContent from "./tabs/PropsTabContent";
import PreviewTabContent from "./tabs/PreviewTabContent";

const CodePreview = ({
  component,
  onClose,
}: {
  component: RegisteredComponent;
  onClose: () => void;
}) => {
  const [activeTab, setActiveTab] = useState("code");

  const renderTabContent = () => {
    switch (activeTab) {
      case "code":
        return <CodeTabContent component={component} />;
      case "props":
        return <PropsTabContent props={component.props} />;
      case "preview":
        return <PreviewTabContent component={component} />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-card text-card-foreground rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold text-foreground">
            {component.title}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors p-1"
          >
            <X size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border bg-muted">
          {CODE_PREVIEW_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary bg-card"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon size={16} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh] bg-card">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
