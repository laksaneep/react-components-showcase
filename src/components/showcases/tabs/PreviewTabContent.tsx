import { DIFFICULTIES_LEVEL_CONFIG } from "@/constants";
import { RegisteredComponent } from "@/types/components";

const PreviewTabContent = ({
  component,
}: {
  component: RegisteredComponent;
}) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-foreground">
      Live Component Preview
    </h3>
    <div className="border border-border rounded-lg p-8 bg-slate-700 flex items-center justify-center min-h-[200px] mb-6">
      {component.previewExamples || (
        <component.component {...component.defaultProps} />
      )}
    </div>
    <div className="grid grid-cols-2 gap-4 text-sm">
      <div>
        <strong className="text-foreground">Category:</strong>
        <span className="ml-2 px-2 py-1 bg-primary/10 text-primary rounded text-xs">
          {component.category}
        </span>
      </div>
      <div>
        <strong className="text-foreground">Difficulty:</strong>
        <span
          className={`ml-2 px-2 py-1 rounded text-xs ${
            DIFFICULTIES_LEVEL_CONFIG[
              component.difficulty as keyof typeof DIFFICULTIES_LEVEL_CONFIG
            ].styles
          }`}
        >
          {component.difficulty}
        </span>
      </div>
    </div>
    <br />
    <div className="mt-4 text-left">
      <strong className="text-foreground">Description:</strong>
      <p className="text-muted-foreground mt-1">{component.description}</p>
    </div>
    <hr className="border-border" />
  </div>
);

export default PreviewTabContent;
