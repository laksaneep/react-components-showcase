import { registerComponent } from "@/utils/componentRegistry";
import Button from "./Button";
import { buttonConfig } from "./Button.config";
import { buttonSourceCode, buttonUsageExamples } from "./Button.source";

registerComponent("Button", Button, {
  ...buttonConfig,
  sourceCode: buttonSourceCode,
  usageExamples: buttonUsageExamples,
  previewExamples: (
    <div className="flex flex-wrap gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Delete</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
});
