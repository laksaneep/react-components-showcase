import { registerComponent } from "@/utils/componentRegistry";
import Button from "./Button";
import { buttonConfig } from "./Button.config";
import { buttonSourceCode, buttonUsageExamples } from "./Button.source";

registerComponent("Button", Button, {
  ...buttonConfig,
  sourceCode: buttonSourceCode,
  examples: buttonUsageExamples,
});
