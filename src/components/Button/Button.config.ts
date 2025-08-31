import { ComponentMetadata } from "@/types/components";
import { DIFFICULTIES_LEVEL } from "../../constants";

export const buttonConfig: Omit<
  ComponentMetadata,
  "sourceCode" | "buttonUsageExamples"
> = {
  title: "Button",
  description:
    "A versatile button component with multiple variants, sizes, and loading states built with TypeScript and Tailwind CSS",
  difficulty: DIFFICULTIES_LEVEL.EASY as keyof typeof DIFFICULTIES_LEVEL,
  category: "UI Elements",
  defaultProps: {
    children: "Click me!",
    variant: "primary",
    size: "medium",
    disabled: false,
    loading: false,
  },
  props: [
    {
      name: "children",
      type: "ReactNode",
      description: "Button content (text, icons, or other React elements)",
      required: false,
    },
    {
      name: "variant",
      type: "'primary' | 'secondary' | 'danger' | 'outline'",
      description:
        "Button visual style variant that determines colors and appearance",
      defaultValue: "primary",
      required: false,
    },
    {
      name: "size",
      type: "'small' | 'medium' | 'large'",
      description:
        "Button size that affects padding, font size, and overall dimensions",
      defaultValue: "medium",
      required: false,
    },
    {
      name: "disabled",
      type: "boolean",
      description:
        "Whether the button is disabled and cannot be interacted with",
      defaultValue: "false",
      required: false,
    },
    {
      name: "loading",
      type: "boolean",
      description:
        "Show loading spinner and disable interaction (overrides disabled state)",
      defaultValue: "false",
      required: false,
    },
    {
      name: "onClick",
      type: "(event: React.MouseEvent<HTMLButtonElement>) => void",
      description: "Click event handler function called when button is clicked",
      required: false,
    },
    {
      name: "className",
      type: "string",
      description:
        "Additional CSS classes to apply to the button for custom styling",
      required: false,
    },
    {
      name: "type",
      type: "'button' | 'submit' | 'reset'",
      description: "HTML button type attribute for form handling",
      defaultValue: "button",
      required: false,
    },
  ],
  tags: ["button", "form", "interactive", "loading", "accessibility"],
  version: "1.0.0",
  author: "Laksanee P.",
};
