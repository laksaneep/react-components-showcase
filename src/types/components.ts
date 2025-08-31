import { DIFFICULTIES_LEVEL } from "@/constants";
import { ComponentType } from "react";

export interface ComponentProp {
  name: string;
  type: string;
  description: string;
  required?: boolean;
  defaultValue?: string;
}

export interface ComponentMetadata {
  title: string;
  description: string;
  difficulty: keyof typeof DIFFICULTIES_LEVEL;
  category: string;
  defaultProps?: Record<string, any>;
  props: ComponentProp[];
  sourceCode: string;
  buttonUsageExamples: string;
  previewExamples?: React.ReactNode;
  tags?: string[];
  version?: string;
  author?: string;
}

export interface RegisteredComponent extends ComponentMetadata {
  component: ComponentType<any>;
}

export interface ComponentRegistry {
  [key: string]: RegisteredComponent;
}
