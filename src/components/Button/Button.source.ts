// Import the actual file as raw text
import buttonRawCode from "./Button.tsx?raw";

// Clean up the imported code (remove imports, exports, etc.)
export const buttonSourceCode = buttonRawCode
  .replace(/^import.*$/gm, "") // Remove import lines
  .replace(/^export\s+(interface|type).*$/gm, "") // Remove export statements
  .replace(/export default.*$/, "") // Remove export default
  .trim();

// Or just use the raw code as-is
export const buttonFullSourceCode = buttonRawCode;

// Additional examples can still be manually written
export const buttonUsageExamples = `// Basic usage
<Button>Click me!</Button>

// Different variants  
<Button variant="primary">Primary</Button>
<Button variant="danger">Delete</Button>

// Loading state
<Button loading>Saving...</Button>`;
